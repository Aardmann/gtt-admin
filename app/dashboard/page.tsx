// app/dashboard/page.tsx
'use client'

import { useDashboardStats } from '../../hooks/useDashboardStats'
import { useRoutes } from '../../hooks/useRoutes'
import { useUsers } from '../../hooks/useUsers'
import { StatsCards } from '../../components/dashboard/StatsCards'
import { RecentActivity } from '../../components/dashboard/RecentActivity'
import { Loader } from '../../components/common/Loader'
import {
  FiUsers, FiSearch, FiBell, FiMapPin,
  FiChevronRight, FiZap, FiSettings, FiFileText
} from 'react-icons/fi'
import Link from 'next/link'

// ─── Role badge ───────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role?: string }) {
  const resolved = role || 'user'
  const styles: Record<string, string> = {
    admin:  'bg-violet-100 text-violet-700',
    banned: 'bg-red-100 text-red-600',
    user:   'bg-emerald-100 text-emerald-700',
  }
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[resolved] ?? styles.user}`}>
      {resolved}
    </span>
  )
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  title, icon, action, children
}: {
  title: string
  icon: React.ReactNode
  action?: { label: string; href: string }
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
        <div className="flex items-center gap-2">
          <span className="text-violet-500">{icon}</span>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{title}</h2>
        </div>
        {action && (
          <Link
            href={action.href}
            className="text-xs font-medium text-violet-600 hover:text-violet-700 flex items-center gap-0.5"
          >
            {action.label} <FiChevronRight size={12} />
          </Link>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

// ─── Quick action button ──────────────────────────────────────────────────────

function QuickAction({ label, href, icon, color }: { label: string; href: string; icon: React.ReactNode; color: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-4 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 ${color}`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </Link>
  )
}

// ─── Inline stat row ──────────────────────────────────────────────────────────

function StatRow({ icon, label, value, bg, iconColor }: { icon: React.ReactNode; label: string; value: string | number; bg: string; iconColor: string }) {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl ${bg}`}>
      <span className={`text-xl ${iconColor}`}>{icon}</span>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { stats, loading: statsLoading } = useDashboardStats()
  const { routes, loading: routesLoading } = useRoutes()
  const { users, loading: usersLoading } = useUsers()

  // Pending = not approved AND no rejection reason
  // Rejected = has a rejection_reason (regardless of approved flag)
  const pendingRoutes  = routes.filter(r => !r.approved && !r.rejection_reason)
  const rejectedRoutes = routes.filter(r => !!r.rejection_reason)
  const routesToShow   = [...pendingRoutes, ...rejectedRoutes].slice(0, 5)

  const recentUsers = [...users]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5)

  if (statsLoading || routesLoading || usersLoading) {
    return <Loader message="Loading dashboard..." />
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-400 mt-0.5">Welcome to Ghana Trotro Transit Admin</p>
      </div>

      {/* Stats */}
      <StatsCards stats={stats} />

      {/* Three-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Users */}
        <Section
          title="Recent Users"
          icon={<FiUsers size={15} />}
          action={{ label: 'View all', href: '/dashboard/users' }}
        >
          {recentUsers.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-6">No users found</p>
          ) : (
            <div className="space-y-2">
              {recentUsers.map(user => (
                <div key={user.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  {/* Avatar initial */}
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-violet-600">
                      {(user.first_name?.[0] || user.email?.[0] || '?').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {user.first_name || user.last_name
                        ? `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim()
                        : user.email}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <RoleBadge role={user.profile?.role} />
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* User Activity */}
        <Section title="User Activity" icon={<FiSearch size={15} />}>
          <div className="space-y-3">
            <StatRow icon={<FiUsers />} label="Total Users" value={users.length.toLocaleString()} bg="bg-blue-50" iconColor="text-blue-500" />
            <StatRow icon={<FiSearch />} label="Today's Searches" value={stats.todaySearches.toLocaleString()} bg="bg-emerald-50" iconColor="text-emerald-500" />
            <StatRow icon={<FiBell />} label="Notifications Sent" value={stats.notificationsSent.toLocaleString()} bg="bg-violet-50" iconColor="text-violet-500" />
          </div>
        </Section>

        {/* Routes needing attention */}
        <Section
          title="Routes Needing Attention"
          icon={<FiMapPin size={15} />}
          action={{ label: 'View all', href: '/dashboard/routes' }}
        >
          <RecentActivity routes={routesToShow} />
          {(pendingRoutes.length > 0 || rejectedRoutes.length > 0) && (
            <div className="mt-4 pt-3 border-t border-gray-50 flex gap-4 text-xs text-gray-400">
              {pendingRoutes.length > 0 && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  {pendingRoutes.length} pending
                </span>
              )}
              {rejectedRoutes.length > 0 && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                  {rejectedRoutes.length} rejected
                </span>
              )}
            </div>
          )}
        </Section>
      </div>

      {/* Quick Actions */}
      <Section title="Quick Actions" icon={<FiZap size={15} />}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickAction label="Send Notification" href="/dashboard/notifications" icon={<FiBell />} color="bg-violet-600" />
          <QuickAction label="Add New Stop"       href="/dashboard/stops"         icon={<FiMapPin />} color="bg-emerald-600" />
          <QuickAction label="View Reports"       href="/dashboard/reports"       icon={<FiFileText />} color="bg-blue-600" />
          <QuickAction label="System Settings"    href="/dashboard/settings"      icon={<FiSettings />} color="bg-gray-700" />
        </div>
      </Section>
    </div>
  )
}