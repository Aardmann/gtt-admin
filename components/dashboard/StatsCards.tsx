// components/dashboard/StatsCards.tsx
'use client'

import { FiUsers, FiMap, FiSearch, FiTrendingUp, FiActivity, FiAlertCircle } from 'react-icons/fi'
import { DashboardStats } from '../../types'

interface StatsCardsProps {
  stats: DashboardStats
}

interface CardProps {
  label: string
  value: string | number
  sub: string
  subColor?: string
  icon: React.ReactNode
  iconBg: string
  iconColor: string
}

function Card({ label, value, sub, subColor = 'text-gray-400', icon, iconBg, iconColor }: CardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className={`p-2.5 rounded-xl ${iconBg}`}>
          <span className={`${iconColor} flex items-center text-lg`}>{icon}</span>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">{label}</p>
      </div>
      <p className={`text-xs ${subColor} border-t border-gray-50 pt-2`}>{sub}</p>
    </div>
  )
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        label="Total Users"
        value={stats.totalUsers.toLocaleString()}
        sub={`${stats.activeUsers} active today`}
        subColor="text-emerald-500"
        icon={<FiUsers />}
        iconBg="bg-blue-50"
        iconColor="text-blue-600"
      />
      <Card
        label="Total Routes"
        value={stats.totalRoutes.toLocaleString()}
        sub={`${stats.pendingRoutes} pending approval`}
        subColor={stats.pendingRoutes > 0 ? 'text-amber-500' : 'text-gray-400'}
        icon={<FiMap />}
        iconBg="bg-violet-50"
        iconColor="text-violet-600"
      />
      <Card
        label="Today's Searches"
        value={stats.todaySearches.toLocaleString()}
        sub="Route searches today"
        icon={<FiSearch />}
        iconBg="bg-sky-50"
        iconColor="text-sky-600"
      />
      <Card
        label="Revenue Today"
        value={`GH₵${stats.revenueToday.toFixed(2)}`}
        sub="Route creation payments"
        subColor="text-teal-500"
        icon={<FiTrendingUp />}
        iconBg="bg-teal-50"
        iconColor="text-teal-600"
      />
    </div>
  )
}