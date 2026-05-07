// hooks/useDashboardStats.ts
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { DashboardStats } from '../types'

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalRoutes: 0,
    totalStops: 0,
    activeUsers: 0,
    pendingRoutes: 0,
    todaySearches: 0,
    notificationsSent: 0,
    revenueToday: 0
  })
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    try {
      setLoading(true)
      
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const todayISO = today.toISOString()

      // Fetch all stats in parallel
      const [
        usersRes,
        routesRes,
        stopsRes,
        activeUsersRes,
        pendingRoutesRes,
        todaySearchesRes,
        notificationsRes,
        revenueRes
      ] = await Promise.all([
        supabase.from('users').select('*', { count: 'exact', head: true }),
        supabase.from('routes').select('*', { count: 'exact', head: true }),
        supabase.from('stops').select('*', { count: 'exact', head: true }),
        supabase.from('profiles')
          .select('*', { count: 'exact', head: true })
          .gte('last_seen_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('routes').select('*', { count: 'exact', head: true }).eq('approved', false),
        supabase.from('search_history').select('*', { count: 'exact', head: true }).gte('searched_at', todayISO),
        supabase.from('notifications').select('sent_count'),
        supabase.from('route_creation_payments')
          .select('amount')
          .eq('payment_status', 'completed')
          .gte('created_at', todayISO)
      ])

      const notificationsSent = notificationsRes.data?.reduce((sum, n) => sum + n.sent_count, 0) || 0
      const revenueToday = revenueRes.data?.reduce((sum, p) => sum + (p.amount || 0), 0) || 0

      setStats({
        totalUsers: usersRes.count || 0,
        totalRoutes: routesRes.count || 0,
        totalStops: stopsRes.count || 0,
        activeUsers: activeUsersRes.count || 0,
        pendingRoutes: pendingRoutesRes.count || 0,
        todaySearches: todaySearchesRes.count || 0,
        notificationsSent,
        revenueToday
      })
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
    
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    
    return () => clearInterval(interval)
  }, [])

  return { stats, loading, refresh: fetchStats }
}