"use client";

import { useState, useEffect } from 'react';
import { Users, UserCheck, UserX, Shield, Search, Edit, Eye, Ban, Trash2, CheckCircle, RefreshCcw } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import DataTable, { Column } from '@/components/admin/shared/DataTable';
import UserDetailsModal from '@/components/admin/users/UserDetailsModal';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'ANALYST' | 'USER' | 'SUSPENDED';
  status: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
  lastLogin: string;
  verifications: number;
  joinedAt: string;
}

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const api = await import("@/lib/api");
        const data = await api.getAllUsers();
        
        // Map API response to User interface
        const mappedUsers: User[] = data.map((u: any) => ({
          id: u.uid,
          name: u.displayName || "Unknown User",
          email: u.email,
          role: u.role, // Assuming role comes as valid string, might need narrowing
          status: u.role === 'SUSPENDED' ? 'SUSPENDED' : 'ACTIVE', // Simplified status mapping
          lastLogin: "N/A", // Not tracked yet
          verifications: 0, // Not tracked efficiently yet
          joinedAt: u.createdAt || new Date().toISOString()
        }));
        
        setUsers(mappedUsers);
      } catch (error) {
        console.error("Failed to load users", error);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, [refreshKey]);

  const handleStatusUpdate = async (uid: string, newRole: string) => {
    try {
        const api = await import("@/lib/api");
        await api.updateUserStatus(uid, newRole);
        toast.success(`User updated to ${newRole}`);
        setRefreshKey(prev => prev + 1); // Refresh list
    } catch (error) {
        console.error("Failed to update user", error);
        toast.error("Failed to update user status");
    }
  };

  const activeUsers = users.filter(u => u.status === 'ACTIVE').length;
  const pendingUsers = users.filter(u => u.status === 'PENDING').length; // Will be 0 for now as we don't have PENDING in backend yet
  const suspendedUsers = users.filter(u => u.status === 'SUSPENDED').length;

  const columns: Column<User>[] = [
    {
      key: 'name',
      label: 'User',
      sortable: true,
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-medium text-white">{user.name}</p>
            <p className="text-xs text-slate-500">{user.email}</p>
          </div>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (user) => {
        const roleStyles: Record<string, string> = {
          ADMIN: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
          ANALYST: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
          USER: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
          SUSPENDED: 'bg-red-500/20 text-red-400 border-red-500/30'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${roleStyles[user.role] || roleStyles.USER}`}>
            {user.role}
          </span>
        );
      }
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (user) => {
        const statusStyles: Record<string, string> = {
          ACTIVE: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          PENDING: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
          SUSPENDED: 'bg-red-500/20 text-red-400 border-red-500/30'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[user.status] || statusStyles.ACTIVE}`}>
            {user.status}
          </span>
        );
      }
    },
    {
      key: 'joinedAt',
      label: 'Joined',
      sortable: true,
      render: (user) => (
        <span className="text-slate-400 text-sm">
          {new Date(user.joinedAt).toLocaleDateString()}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-slate-400">Manage users, roles, and permissions</p>
        </div>
        <button 
            onClick={() => setRefreshKey(prev => prev + 1)}
            className="p-2 bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all"
        >
          <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={users.length}
          icon={Users}
          accentColor="sky"
          description="All registered users"
        />
        <StatsCard
          title="Active Users"
          value={activeUsers}
          icon={UserCheck}
          accentColor="emerald"
          description="Currently active"
        />
        <StatsCard
          title="Pending Approval"
          value={pendingUsers}
          icon={Shield}
          accentColor="amber"
          description="Awaiting verification"
        />
        <StatsCard
          title="Suspended"
          value={suspendedUsers}
          icon={UserX}
          accentColor="red"
          description="Access restricted"
        />
      </div>

      {/* Users Table */}
      <div>
        {loading && users.length === 0 ? (
            <div className="text-center py-10 text-slate-500">Loading users...</div>
        ) : (
            <DataTable
            data={users}
            columns={columns}
            searchPlaceholder="Search users by name, email, or role..."
            onRowClick={(user) => setSelectedUser(user)}
            actions={(user) => (
                <div className="flex items-center gap-2">
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                    setSelectedUser(user);
                    }}
                    className="p-2 hover:bg-sky-500/10 rounded-lg transition-colors group"
                    title="View Details"
                >
                    <Eye className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                </button>
                
                {user.status === 'ACTIVE' ? (
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if(confirm('Are you sure you want to suspend this user?')) {
                            handleStatusUpdate(user.id, 'SUSPENDED');
                        }
                    }}
                    className="p-2 hover:bg-rose-500/10 rounded-lg transition-colors group"
                    title="Suspend User"
                    >
                    <Ban className="w-4 h-4 text-slate-400 group-hover:text-rose-400" />
                    </button>
                ) : (
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleStatusUpdate(user.id, 'USER'); // Default to USER on reactivation
                    }}
                    className="p-2 hover:bg-emerald-500/10 rounded-lg transition-colors group"
                    title="Activate User"
                    >
                    <CheckCircle className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                    </button>
                )}
                </div>
            )}
            />
        )}
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
