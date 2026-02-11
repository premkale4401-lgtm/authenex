"""
Data Migration Script: Consolidate Scans to Consistent UID

This script consolidates all scans from old UIDs to the new consistent email-based UID.
Run this ONCE after deploying the UID consistency fix.

Usage:
    python migrate_uid.py your@email.com
"""

import sys
import hashlib
import sqlite3

DB_NAME = "authenex.db"

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def generate_consistent_uid(email: str) -> str:
    """Generate consistent UID from email (matches backend logic)"""
    email_hash = hashlib.sha256(email.lower().encode()).hexdigest()[:16]
    return f"user-{email_hash}"

def migrate_user_scans(email: str):
    """Consolidate all scans for a given email to the consistent UID"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # Generate the consistent UID
        correct_uid = generate_consistent_uid(email)
        print(f"\n📧 Email: {email}")
        print(f"✅ Consistent UID: {correct_uid}\n")
        
        # Find all users with this email
        cursor.execute("SELECT uid, email, display_name, photo_url FROM users WHERE email = ?", (email,))
        all_users = cursor.fetchall()
        
        if not all_users:
            print(f"❌ No users found with email: {email}")
            return
        
        print(f"Found {len(all_users)} user record(s) with this email:")
        old_uids = []
        for user in all_users:
            print(f"  - UID: {user['uid']}")
            if user['uid'] != correct_uid:
                old_uids.append(user['uid'])
        
        # Count scans under each UID
        print(f"\n📊 Scan distribution:")
        total_scans = 0
        for user in all_users:
            cursor.execute("SELECT COUNT(*) as count FROM scans WHERE uid = ?", (user['uid'],))
            count = cursor.fetchone()['count']
            print(f"  - UID {user['uid']}: {count} scans")
            total_scans += count
        
        if total_scans == 0:
            print("\n✅ No scans to migrate.")
            conn.close()
            return
        
        # Confirm migration
        print(f"\n⚠️  This will migrate {total_scans} scans to UID: {correct_uid}")
        confirm = input("Continue? (yes/no): ")
        
        if confirm.lower() != "yes":
            print("❌ Migration cancelled.")
            conn.close()
            return
        
        # STEP 1: Ensure the correct user record exists
        cursor.execute("SELECT * FROM users WHERE uid = ?", (correct_uid,))
        correct_user = cursor.fetchone()
        
        if not correct_user:
            # User with correct UID doesn't exist
            if all_users:
                # Use data from first user and update their UID
                first_user = all_users[0]
                
                # Check if any user with this email exists
                cursor.execute("SELECT COUNT(*) as count FROM users WHERE email = ?", (email,))
                email_count = cursor.fetchone()['count']
                
                if email_count > 0:
                    # Update the first user's UID to the correct one
                    cursor.execute("""
                        UPDATE users 
                        SET uid = ?, display_name = ?, photo_url = ?
                        WHERE email = ?
                    """, (correct_uid, first_user['display_name'], first_user['photo_url'], email))
                    conn.commit()
                    print(f"✅ Updated existing user record to correct UID: {correct_uid}")
                    
                    # Remove the old UID from our list since we just updated it
                    if first_user['uid'] in old_uids:
                        old_uids.remove(first_user['uid'])
                else:
                    # No user with this email, safe to insert
                    cursor.execute("""
                        INSERT INTO users (uid, email, display_name, photo_url)
                        VALUES (?, ?, ?, ?)
                    """, (correct_uid, email, first_user['display_name'], first_user['photo_url']))
                    conn.commit()
                    print(f"✅ Created correct user record: {correct_uid}")

            else:
                print("❌ No user data to create correct record")
                conn.close()
                return
        
        # STEP 2: Migrate all scans to the correct UID
        for old_uid in old_uids:
            cursor.execute("SELECT COUNT(*) as count FROM scans WHERE uid = ?", (old_uid,))
            count = cursor.fetchone()['count']
            
            cursor.execute("UPDATE scans SET uid = ? WHERE uid = ?", (correct_uid, old_uid))
            conn.commit()
            print(f"✅ Migrated {count} scans from {old_uid} to {correct_uid}")
        
        # STEP 3: Delete old user records
        for old_uid in old_uids:
            cursor.execute("DELETE FROM users WHERE uid = ?", (old_uid,))
            print(f"🗑️  Deleted old user record: {old_uid}")
        conn.commit()
        
        # Verify final state
        cursor.execute("SELECT COUNT(*) as count FROM scans WHERE uid = ?", (correct_uid,))
        final_scan_count = cursor.fetchone()['count']
        
        cursor.execute("SELECT COUNT(*) as count FROM users WHERE email = ?", (email,))
        final_user_count = cursor.fetchone()['count']
        
        print(f"\n✅ Migration complete!")
        print(f"   - Total scans under {correct_uid}: {final_scan_count}")
        print(f"   - User records with email {email}: {final_user_count}")
        
    except Exception as e:
        conn.rollback()
        print(f"\n❌ Migration failed: {e}")
        raise
    finally:
        conn.close()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python migrate_uid.py your@email.com")
        sys.exit(1)
    
    email = sys.argv[1]
    migrate_user_scans(email)

