"use client";

import { useState } from 'react';
import { Users, UserCheck, UserX, Shield, Search, Edit, Eye, Ban, Trash2, CheckCircle } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import DataTable, { Column } from '@/components/admin/shared/DataTable';
import UserDetailsModal from '@/components/admin/users/UserDetailsModal';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'ANALYST' | 'USER';
  status: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
  lastLogin: string;
  verifications: number;
  joinedAt: string;
}

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@authenex.gov',
    role: 'ADMIN',
    status: 'ACTIVE',
    lastLogin: '2024-02-09T10:30:00Z',
    verifications: 1247,
    joinedAt: '2023-01-15'
  },
  {
    id: '2',
    name: 'Raj Patel',
    email: 'raj.patel@authenex.gov',
    role: 'ANALYST',
    status: 'ACTIVE',
    lastLogin: '2024-02-09T09:15:00Z',
    verifications: 892,
    joinedAt: '2023-03-22'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@ministry.gov',
    role: 'ANALYST',
    status: 'ACTIVE',
    lastLogin: '2024-02-08T16:45:00Z',
    verifications: 634,
    joinedAt: '2023-06-10'
  },
  {
    id: '4',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@cybersec.gov',
    role: 'USER',
    status: 'PENDING',
    lastLogin: 'Never',
    verifications: 0,
    joinedAt: '2024-02-08'
  },
  {
    id: '5',
    name: 'Li Wei',
    email: 'li.wei@research.gov',
    role: 'USER',
    status: 'SUSPENDED',
    lastLogin: '2024-01-20T11:00:00Z',
    verifications: 45,
    joinedAt: '2023-11-30'
  }
];

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users] = useState<User[]>(mockUsers);

  const activeUsers = users.filter(u => u.status === 'ACTIVE').length;
  const pendingUsers = users.filter(u => u.status === 'PENDING').length;
  const suspendedUsers = users.filter(u => u.status === 'SUSPENDED').length;

  const columns: Column<User>[] = [
    {
      key: 'name',
      label: 'User',
      sortable: true,
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
            {user.name.split(' ').map(n => n[0]).join('')}
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
        const roleStyles = {
          ADMIN: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
          ANALYST: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
          USER: 'bg-slate-500/20 text-slate-400 border-slate-500/30'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${roleStyles[user.role]}`}>
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
        const statusStyles = {
          ACTIVE: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          PENDING: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
          SUSPENDED: 'bg-red-500/20 text-red-400 border-red-500/30'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[user.status]}`}>
            {user.status}
          </span>
        );
      }
    },
    {
      key: 'verifications',
      label: 'Verifications',
      sortable: true,
      render: (user) => (
        <span className="font-mono text-sky-400">{user.verifications.toLocaleString()}</span>
      )
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true,
      render: (user) => (
        <span className="text-slate-400 text-sm">
          {user.lastLogin === 'Never' 
            ? 'Never' 
            : new Date(user.lastLogin).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
          }
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
        <button className="px-4 py-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-lg font-medium hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/20">
          + Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={users.length}
          icon={Users}
          accentColor="sky"
          trend={{ value: 12, isPositive: true }}
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
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-2 hover:bg-indigo-500/10 rounded-lg transition-colors group"
                title="Edit User"
              >
                <Edit className="w-4 h-4 text-slate-400 group-hover:text-indigo-400" />
              </button>
              {user.status === 'ACTIVE' ? (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors group"
                  title="Suspend User"
                >
                  <Ban className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
                </button>
              ) : (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 hover:bg-emerald-500/10 rounded-lg transition-colors group"
                  title="Activate User"
                >
                  <CheckCircle className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                </button>
              )}
            </div>
          )}
        />
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
