// app/dashboard/page.tsx - Updated
'use client'

import { useDashboardStats } from '../hooks/useDashboardStats'
import { useRoutes } from '../hooks/useRoutes'
import { useUsers } from '../hooks/useUsers'
import { StatsCards } from '../components/dashboard/StatsCards'
import { RecentActivity } from '../components/dashboard/RecentActivity'
import { Loader } from '../components/common/Loader'
import { FiUsers, FiSearch, FiBell, FiMapPin } from 'react-icons/fi'

export default function DashboardPage() {
  const { stats, loading: statsLoading } = useDashboardStats()
  const { routes, loading: routesLoading } = useRoutes()
  const { users, loading: usersLoading } = useUsers()

  const pendingRoutes = routes.filter(route => !route.approved)
  const recentUsers = users.slice(0, 5).sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  if (statsLoading || routesLoading || usersLoading) {
    return <Loader message="Loading dashboard..." />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text">Dashboard Overview</h1>
        <p className="text-text-light">Welcome to Ghana Trotro Transit Admin</p>
      </div>

      <StatsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text">Recent Users</h2>
            <FiUsers className="text-primary text-xl" />
          </div>
          <div className="space-y-3">
            {recentUsers.length === 0 ? (
              <p className="text-text-light text-center py-4">No users found</p>
            ) : (
              recentUsers.map(user => (
                <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-medium text-text">
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="text-sm text-text-light">{user.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    user.profile?.role === 'admin' 
                      ? 'bg-purple-100 text-purple-800'
                      : user.profile?.role === 'banned'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {user.profile?.role || 'user'}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* User Activity Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-text mb-4">User Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <FiUsers className="text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-text-light">Total Users</p>
                  <p className="text-2xl font-bold text-text">{users.length}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <FiSearch className="text-green-600 mr-3" />
                <div>
                  <p className="text-sm text-text-light">Today's Searches</p>
                  <p className="text-2xl font-bold text-text">{stats.todaySearches}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center">
                <FiBell className="text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-text-light">Notifications</p>
                  <p className="text-2xl font-bold text-text">{stats.notificationsSent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Routes Pending Approval */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text">Pending Routes</h2>
            <FiMapPin className="text-yellow-600 text-xl" />
          </div>
          <RecentActivity routes={pendingRoutes.slice(0, 5)} />
          {pendingRoutes.length === 0 ? (
            <p className="text-text-light text-center py-4">No routes pending approval</p>
          ) : (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-text-light">
                {pendingRoutes.length} route{pendingRoutes.length !== 1 ? 's' : ''} pending approval
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-text mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => window.location.href = '/dashboard/notifications'}
            className="p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Send Notification
          </button>
          <button 
            onClick={() => window.location.href = '/dashboard/stops'}
            className="p-4 bg-success text-white rounded-lg hover:bg-success/90 transition-colors"
          >
            Add New Stop
          </button>
          <button 
            onClick={() => window.location.href = '/dashboard/reports'}
            className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Reports
          </button>
          <button 
            onClick={() => window.location.href = '/dashboard/settings'}
            className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            System Settings
          </button>
        </div>
      </div>
    </div>
  )
}