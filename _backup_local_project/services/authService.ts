
import { initializeApp, getApp, getApps } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { User } from '../types';

/**
 * PRODUCTION NOTE: 
 * Replace these credentials with your actual Firebase project keys 
 * from the Firebase Console (console.firebase.google.com).
 */
const firebaseConfig = {
  apiKey: "AIzaSyAs-DEMO-ONLY-AUTHENEX-KEY",
  authDomain: "authenex-forensics.firebaseapp.com",
  projectId: "authenex-forensics",
  storageBucket: "authenex-forensics.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase safely
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (): Promise<User> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const fbUser = result.user;
    
    return {
      name: fbUser.displayName || 'Forensic Agent',
      email: fbUser.email || '',
      avatar: fbUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${fbUser.uid}`,
      isPro: false,
      role: 'User',
      credits: 10,
      totalVerifications: 0,
      joinedDate: new Date().getFullYear().toString()
    };
  } catch (error) {
    console.error("Google Auth Error:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (fbUser) => {
    if (fbUser) {
      callback({
        name: fbUser.displayName || 'Forensic Agent',
        email: fbUser.email || '',
        avatar: fbUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${fbUser.uid}`,
        isPro: false,
        role: 'User',
        credits: 10,
        totalVerifications: 0,
        joinedDate: '2024'
      });
    } else {
      callback(null);
    }
  });
};
