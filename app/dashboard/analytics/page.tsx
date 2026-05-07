// app/dashboard/analytics/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { Header } from '../../../components/layout/Header'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer
} from 'recharts'
import {
  FiUsers, FiMap, FiNavigation, FiBell, FiTrendingUp,
  FiSearch, FiMapPin, FiCalendar, FiClock, FiAlertCircle,
  FiRefreshCw, FiActivity
} from 'react-icons/fi'

const COLORS = ['#7c3aed', '#a78bfa', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899', '#8b5cf6']

const GHANA_REGIONS = [
  'Greater Accra', 'Ashanti', 'Western', 'Central', 'Eastern',
  'Volta', 'Northern', 'Upper East', 'Upper West', 'Brong Ahafo',
  'Oti', 'North East', 'Savannah', 'Bono', 'Bono East', 'Ahafo'
]

// ─── Stat Card Component ──────────────────────────────────────────────────────

interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  icon: React.ReactNode
  accent: string        // tailwind bg class for icon bg
  iconColor: string     // tailwind text class for icon
  trend?: string
}

function StatCard({ label, value, sub, icon, accent, iconColor, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className={`p-2.5 rounded-xl ${accent}`}>
          <span className={`${iconColor} text-xl flex items-center`}>{icon}</span>
        </div>
        {trend && (
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <FiTrendingUp size={10} /> {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
        <p className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wide">{label}</p>
      </div>
      {sub && <p className="text-xs text-gray-500 border-t border-gray-50 pt-2">{sub}</p>}
    </div>
  )
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-50">
        <span className="text-violet-600">{icon}</span>
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function Empty({ icon, message, hint }: { icon: React.ReactNode; message: string; hint?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-2">
      <span className="text-gray-300 text-4xl">{icon}</span>
      <p className="text-gray-500 font-medium">{message}</p>
      {hint && <p className="text-xs text-gray-400 max-w-xs">{hint}</p>}
    </div>
  )
}

// ─── Tooltip Styles ───────────────────────────────────────────────────────────

const tooltipStyle = {
  backgroundColor: '#1e1b4b',
  border: 'none',
  borderRadius: '10px',
  color: '#e9d5ff',
  fontSize: '12px',
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRoutes: 0,
    totalStops: 0,
    activeUsers: 0,
    notificationsSent: 0,
    totalSearches: 0,
    userCreatedRoutes: 0,
    totalPayments: 0,
    totalReports: 0,
    pendingReports: 0,
    resolvedReports: 0,
  })

  const [userGrowth, setUserGrowth] = useState<any[]>([])
  const [routeData, setRouteData] = useState<any[]>([])
  const [notificationData, setNotificationData] = useState<any[]>([])
  const [popularSearches, setPopularSearches] = useState<any[]>([])
  const [topRegions, setTopRegions] = useState<any[]>([])
  const [activeHoursData, setActiveHoursData] = useState<any[]>([])
  const [userDistributionByHour, setUserDistributionByHour] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    fetchAnalyticsData()
  }, [])

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true)

      const [
        { data: users },
        { data: profiles },
        { data: routes },
        { data: stops },
        { data: notifications },
        { data: searchHistory },
        { data: userCreatedRoutes },
        { data: payments },
        { data: reports },
      ] = await Promise.all([
        supabase.from('users').select('*, created_at'),
        supabase.from('profiles').select('*, last_location, last_seen_at'),
        supabase.from('routes').select('*'),
        supabase.from('stops').select('*'),
        supabase.from('notifications').select('*'),
        supabase.from('search_history').select('*'),
        supabase.from('user_created_routes').select('*'),
        supabase.from('route_creation_payments').select('*'),
        supabase.from('reports').select('id, status'),
      ])

      const growthData = processUserGrowth(users || [])
      const routeStats = getRouteStats(routes || [])
      const notificationStats = getNotificationStats(notifications || [])
      const popularSearchesData = getPopularSearches(searchHistory || [])
      const topRegionsData = getUserRegionsFromProfiles(profiles || [])
      const hoursData = getActiveHours(searchHistory || [])
      const userDistributionData = getUserDistributionByHour(profiles || [])

      const allReports = reports || []
      const pendingReports = allReports.filter(r => r.status === 'pending').length
      const resolvedReports = allReports.filter(r => r.status === 'resolved').length

      setStats({
        totalUsers: (users || []).length,
        totalRoutes: (routes || []).length,
        totalStops: (stops || []).length,
        activeUsers: getActiveUsers(profiles || []),
        notificationsSent: (notifications || []).reduce((sum, n) => sum + (n.sent_count || 0), 0),
        totalSearches: (searchHistory || []).length,
        userCreatedRoutes: (userCreatedRoutes || []).length,
        totalPayments: (payments || []).reduce((sum, p) => sum + (p.amount || 0), 0),
        totalReports: allReports.length,
        pendingReports,
        resolvedReports,
      })

      setUserGrowth(growthData)
      setRouteData(routeStats)
      setNotificationData(notificationStats)
      setPopularSearches(popularSearchesData)
      setTopRegions(topRegionsData)
      setActiveHoursData(hoursData)
      setUserDistributionByHour(userDistributionData)
      setLastUpdated(new Date())

    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  // ─── Data Processing Helpers ─────────────────────────────────────────────

  const getActiveUsers = (profiles: any[]) => {
    const oneDayAgo = new Date(Date.now() - 86400000)
    return profiles.filter(p => p.last_seen_at && new Date(p.last_seen_at) > oneDayAgo).length
  }

  const processUserGrowth = (users: any[]) => {
    const now = new Date()
    const last12Months = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
      return { month: date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }), users: 0, fullDate: date, cumulative: 0 }
    }).reverse()

    const sortedUsers = [...users].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    let cumulative = 0
    last12Months.forEach(m => {
      const end = new Date(m.fullDate.getFullYear(), m.fullDate.getMonth() + 1, 0)
      const newUsers = sortedUsers.filter(u => {
        if (!u.created_at) return false
        const d = new Date(u.created_at)
        return d >= m.fullDate && d <= end
      }).length
      cumulative += newUsers
      m.users = newUsers
      m.cumulative = cumulative
    })
    return last12Months.map(({ fullDate, ...rest }) => rest)
  }

  const getRouteStats = (routes: any[]) => {
    const stats = routes.reduce((acc: any, route) => {
      const type = route.vehicle_type || 'Unknown'
      if (!acc[type]) acc[type] = { approved: 0, pending: 0, total: 0 }
      acc[type].total++
      route.approved ? acc[type].approved++ : acc[type].pending++
      return acc
    }, {})
    return Object.entries(stats).map(([type, data]: any) => ({
      type, approved: data.approved, pending: data.pending, total: data.total,
      approvalRate: data.total > 0 ? Math.round((data.approved / data.total) * 100) : 0
    }))
  }

  const getNotificationStats = (notifications: any[]) => {
    const typeStats = notifications.reduce((acc: any, n) => {
      const type = n.type || 'unknown'
      if (!acc[type]) acc[type] = { count: 0, totalSent: 0, totalRead: 0 }
      acc[type].count++
      acc[type].totalSent += n.sent_count || 0
      acc[type].totalRead += n.read_count || 0
      return acc
    }, {})
    return Object.entries(typeStats).map(([type, data]: any) => ({
      type: type.charAt(0).toUpperCase() + type.slice(1),
      count: data.count, sent: data.totalSent, read: data.totalRead,
      readRate: data.totalSent > 0 ? (data.totalRead / data.totalSent) * 100 : 0
    }))
  }

  const getPopularSearches = (searches: any[]) => {
    const counts: Record<string, number> = {}
    searches.forEach(s => {
      if (!s.start_point || !s.destination) return
      const key = `${s.start_point.trim()} → ${s.destination.trim()}`
      counts[key] = (counts[key] || 0) + 1
    })
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count, popularity: count > 10 ? 'High' : count > 5 ? 'Medium' : 'Low' }))
      .sort((a, b) => b.count - a.count).slice(0, 15)
  }

  const getUserRegionsFromProfiles = (profiles: any[]): any[] => {
    const regionCounts: Record<string, number> = {}
    let total = 0
    profiles.forEach(p => {
      if (p.last_location?.region) {
        const region = matchGhanaRegion(p.last_location.region)
        regionCounts[region] = (regionCounts[region] || 0) + 1
        total++
      }
    })
    return Object.entries(regionCounts)
      .map(([name, count]) => ({ name, count, percentage: total > 0 ? (count / total) * 100 : 0 }))
      .sort((a, b) => b.count - a.count).slice(0, 10)
  }

  const matchGhanaRegion = (text: string): string => {
    if (!text) return 'Unknown'
    const t = text.toLowerCase()
    if (t.includes('accra')) return 'Greater Accra'
    if (t.includes('kumasi')) return 'Ashanti'
    if (t.includes('tamale')) return 'Northern'
    if (t.includes('takoradi') || t.includes('sekondi')) return 'Western'
    if (t.includes('cape coast')) return 'Central'
    if (t.includes('koforidua')) return 'Eastern'
    if (t.includes('ho')) return 'Volta'
    if (t.includes('sunyani')) return 'Bono'
    if (t.includes('wa')) return 'Upper West'
    if (t.includes('bolgatanga')) return 'Upper East'
    for (const r of GHANA_REGIONS) if (t.includes(r.toLowerCase())) return r
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  }

  const getActiveHours = (searches: any[]) => {
    const hourCounts = Array(24).fill(0)
    searches.forEach(s => { if (s.searched_at) hourCounts[new Date(s.searched_at).getHours()]++ })
    return hourCounts.map((count, hour) => ({
      hour: `${hour}:00`, count,
      formattedHour: `${hour % 12 || 12}${hour < 12 ? 'AM' : 'PM'}`
    }))
  }

  const getUserDistributionByHour = (profiles: any[]) => {
    const hourCounts = Array(24).fill(0)
    profiles.forEach(p => { if (p.last_seen_at) try { hourCounts[new Date(p.last_seen_at).getHours()]++ } catch { } })
    return hourCounts.map((count, hour) => ({
      hour: `${hour}:00`, users: count,
      formattedHour: `${hour % 12 || 12}${hour < 12 ? 'AM' : 'PM'}`
    }))
  }

  const getRegionSummary = () => {
    const usersWithLocation = topRegions.reduce((sum, r) => sum + r.count, 0)
    return {
      usersWithLocation,
      locationPercentage: stats.totalUsers > 0 ? (usersWithLocation / stats.totalUsers) * 100 : 0,
      totalRegions: topRegions.length
    }
  }

  // ─── Loading State ────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="space-y-6">
        <Header title="Analytics Dashboard" subtitle="Comprehensive insights for Ghana Trotro Transit" />
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-violet-100" />
            <div className="absolute inset-0 rounded-full border-4 border-violet-600 border-t-transparent animate-spin" />
          </div>
          <p className="text-gray-500 text-sm font-medium">Loading analytics…</p>
        </div>
      </div>
    )
  }

  const regionSummary = getRegionSummary()
  const peakSearchHour = activeHoursData.length > 0
    ? activeHoursData.reduce((max, h) => h.count > max.count ? h : max, { count: 0 }).formattedHour
    : 'N/A'
  const peakActivityHour = userDistributionByHour.length > 0
    ? userDistributionByHour.reduce((max, h) => h.users > max.users ? h : max, { users: 0 }).formattedHour
    : 'N/A'
  const avgReadRate = notificationData.length > 0
    ? Math.round(notificationData.reduce((sum, n) => sum + n.readRate, 0) / notificationData.length)
    : 0

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <Header title="Analytics Dashboard" subtitle="Comprehensive insights for Ghana Trotro Transit" />

      {/* ── Stat Cards ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <StatCard
          label="Total Users"
          value={stats.totalUsers.toLocaleString()}
          sub={`${stats.activeUsers.toLocaleString()} active today`}
          icon={<FiUsers />}
          accent="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatCard
          label="Active Today"
          value={stats.activeUsers.toLocaleString()}
          sub={stats.totalUsers > 0 ? `${Math.round((stats.activeUsers / stats.totalUsers) * 100)}% active rate` : '—'}
          icon={<FiActivity />}
          accent="bg-emerald-50"
          iconColor="text-emerald-600"
        />
        <StatCard
          label="Total Routes"
          value={stats.totalRoutes.toLocaleString()}
          sub={`${routeData.reduce((s, r) => s + r.approved, 0)} approved`}
          icon={<FiMap />}
          accent="bg-violet-50"
          iconColor="text-violet-600"
        />
        <StatCard
          label="Total Stops"
          value={stats.totalStops.toLocaleString()}
          icon={<FiMapPin />}
          accent="bg-pink-50"
          iconColor="text-pink-600"
        />
        <StatCard
          label="Total Searches"
          value={stats.totalSearches.toLocaleString()}
          sub={stats.totalUsers > 0 ? `~${Math.round(stats.totalSearches / stats.totalUsers)} per user` : '—'}
          icon={<FiSearch />}
          accent="bg-red-50"
          iconColor="text-red-500"
        />
        <StatCard
          label="Notifications"
          value={stats.notificationsSent.toLocaleString()}
          sub={`${avgReadRate}% read rate`}
          icon={<FiBell />}
          accent="bg-amber-50"
          iconColor="text-amber-600"
        />
        <StatCard
          label="User Routes"
          value={stats.userCreatedRoutes.toLocaleString()}
          sub={stats.totalUsers > 0 ? `${Math.round((stats.userCreatedRoutes / stats.totalUsers) * 100)}% create rate` : '—'}
          icon={<FiNavigation />}
          accent="bg-indigo-50"
          iconColor="text-indigo-600"
        />
        <StatCard
          label="Revenue"
          value={`GH₵${stats.totalPayments.toLocaleString()}`}
          icon={<FiTrendingUp />}
          accent="bg-teal-50"
          iconColor="text-teal-600"
        />
        <StatCard
          label="Total Reports"
          value={stats.totalReports.toLocaleString()}
          sub={`${stats.pendingReports} pending · ${stats.resolvedReports} resolved`}
          icon={<FiAlertCircle />}
          accent="bg-orange-50"
          iconColor="text-orange-500"
          trend={stats.pendingReports > 0 ? `${stats.pendingReports} need review` : undefined}
        />
      </div>

      {/* ── Reports Breakdown Banner ──────────────────────────────────────── */}
      {stats.totalReports > 0 && (
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-5">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-100 rounded-lg"><FiAlertCircle className="text-orange-600" /></div>
              <span className="text-sm font-semibold text-gray-700">Reports Overview</span>
            </div>
            {[
              { label: 'Total', value: stats.totalReports, color: 'text-gray-700', bg: 'bg-white' },
              { label: 'Pending', value: stats.pendingReports, color: 'text-amber-700', bg: 'bg-amber-100' },
              { label: 'Reviewed', value: stats.totalReports - stats.pendingReports - stats.resolvedReports, color: 'text-blue-700', bg: 'bg-blue-100' },
              { label: 'Resolved', value: stats.resolvedReports, color: 'text-emerald-700', bg: 'bg-emerald-100' },
            ].map(item => (
              <div key={item.label} className={`flex items-center gap-2 px-4 py-2 rounded-xl ${item.bg}`}>
                <span className={`text-xl font-bold ${item.color}`}>{item.value}</span>
                <span className="text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Charts Row 1: User Growth + Route Status ──────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="User Growth — Last 12 Months" icon={<FiCalendar size={16} />}>
          <div className="h-72">
            {userGrowth.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userGrowth} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="users" stroke="#7c3aed" strokeWidth={2.5} name="New Users" dot={{ r: 3, fill: '#7c3aed' }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="cumulative" stroke="#10b981" strokeWidth={2} name="Total Users" strokeDasharray="5 5" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <Empty icon={<FiCalendar />} message="No user growth data yet" />
            )}
          </div>
        </Section>

        <Section title="Route Approval by Vehicle Type" icon={<FiMap size={16} />}>
          <div className="h-56">
            {routeData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={routeData} margin={{ top: 4, right: 8, bottom: 0, left: 0 }} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                  <XAxis dataKey="type" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="approved" fill="#10b981" name="Approved" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="#f59e0b" name="Pending" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <Empty icon={<FiMap />} message="No route data yet" />
            )}
          </div>
          {routeData.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {routeData.map(route => (
                <div key={route.type} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
                  <span className="text-xs font-medium text-gray-600">{route.type}</span>
                  <span className="text-xs font-bold text-emerald-600">{route.approvalRate}%</span>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* ── Charts Row 2: Notifications + Peak Search + User Activity ─────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Section title="Notification Performance" icon={<FiBell size={16} />}>
          <div className="h-52">
            {notificationData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={notificationData} cx="50%" cy="50%" outerRadius={75} innerRadius={35}
                    dataKey="count" nameKey="type" paddingAngle={3}>
                    {notificationData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [v.toLocaleString(), 'Notifications']} />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <Empty icon={<FiBell />} message="No notification data yet" />
            )}
          </div>
          {notificationData.length > 0 && (
            <div className="mt-3 space-y-2">
              {notificationData.map(n => (
                <div key={n.type} className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{n.type}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${n.readRate > 50 ? 'bg-emerald-100 text-emerald-700' : n.readRate > 20 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {n.readRate.toFixed(1)}% read
                  </span>
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section title="Peak Search Hours" icon={<FiClock size={16} />}>
          <div className="h-52">
            {activeHoursData.some(h => h.count > 0) ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeHoursData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                  <XAxis dataKey="formattedHour" tick={{ fontSize: 9, fill: '#9ca3af' }} interval={2} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="count" fill="#7c3aed" name="Searches" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <Empty icon={<FiClock />} message="No search hour data yet" />
            )}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Peak Hour', value: peakSearchHour },
              { label: 'Total Searches', value: activeHoursData.reduce((s, h) => s + h.count, 0).toLocaleString() },
              { label: 'Avg / Hour', value: Math.round(activeHoursData.reduce((s, h) => s + h.count, 0) / 24).toLocaleString() },
            ].map(item => (
              <div key={item.label} className="text-center bg-gray-50 rounded-xl py-2">
                <p className="text-sm font-bold text-violet-700">{item.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="User Activity by Hour" icon={<FiUsers size={16} />}>
          <div className="h-52">
            {userDistributionByHour.some(h => h.users > 0) ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userDistributionByHour} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                  <XAxis dataKey="formattedHour" tick={{ fontSize: 9, fill: '#9ca3af' }} interval={2} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="users" fill="#3b82f6" name="Active Users" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <Empty icon={<FiUsers />} message="No activity data yet" />
            )}
          </div>
          <div className="mt-4 text-center bg-gray-50 rounded-xl py-3">
            <p className="text-sm font-bold text-blue-600">{peakActivityHour}</p>
            <p className="text-xs text-gray-400 mt-0.5">Peak activity hour</p>
            <p className="text-xs text-gray-400">Based on last-seen timestamps</p>
          </div>
        </Section>
      </div>

      {/* ── Data Lists: Regions + Popular Searches ────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="User Locations by Region" icon={<FiMapPin size={16} />}>
          {topRegions.length > 0 ? (
            <>
              <div className="flex gap-4 mb-5 p-4 bg-blue-50 rounded-xl">
                <div>
                  <p className="text-xs text-gray-500">With location data</p>
                  <p className="text-lg font-bold text-gray-800">
                    {regionSummary.usersWithLocation.toLocaleString()}
                    <span className="text-sm font-normal text-gray-400 ml-1">({Math.round(regionSummary.locationPercentage)}%)</span>
                  </p>
                </div>
                <div className="border-l border-blue-100 pl-4">
                  <p className="text-xs text-gray-500">Regions detected</p>
                  <p className="text-lg font-bold text-gray-800">{regionSummary.totalRegions}</p>
                </div>
              </div>
              <div className="space-y-3">
                {topRegions.map((region, index) => {
                  const maxCount = Math.max(...topRegions.map(r => r.count))
                  const pct = maxCount > 0 ? (region.count / maxCount) * 100 : 0
                  return (
                    <div key={region.name} className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-gray-400 w-5 text-right shrink-0">#{index + 1}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-sm font-medium text-gray-700 truncate">{region.name}</span>
                          <span className="text-xs text-gray-400 ml-2 shrink-0">{region.count.toLocaleString()} users</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-violet-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            <Empty icon={<FiMapPin />} message="No location data yet" hint="User locations will appear once users update their profile location in the app." />
          )}
        </Section>

        <Section title="Popular Routes Searched" icon={<FiSearch size={16} />}>
          {popularSearches.length > 0 ? (
            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {popularSearches.map((search, index) => (
                <div key={search.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <span className="text-xs font-semibold text-gray-300 w-5 text-right shrink-0">#{index + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">{search.name}</p>
                    <p className="text-xs text-gray-400">{search.count} search{search.count !== 1 ? 'es' : ''}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    search.popularity === 'High' ? 'bg-red-100 text-red-700' :
                    search.popularity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {search.popularity}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <Empty icon={<FiSearch />} message="No search data yet" hint="Search data will appear once users start searching for routes in the app." />
          )}
        </Section>
      </div>

      {/* ── Refresh Footer ─────────────────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-gray-700">Analytics Data</p>
          <p className="text-xs text-gray-400 mt-0.5">
            Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : '—'}
          </p>
        </div>
        <button
          onClick={fetchAnalyticsData}
          disabled={loading}
          className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
        >
          <FiRefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          Refresh Analytics
        </button>
      </div>
    </div>
  )
}