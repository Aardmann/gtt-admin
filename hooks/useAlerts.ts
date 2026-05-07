// hooks/useAlerts.ts
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { Alert } from '../types'
import { toast } from 'react-hot-toast'

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAlerts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      // ── 1. New routes (last 24 hours) ────────────────────────────────────────
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

      const { data: newRoutes, error: routesError } = await supabase
        .from('routes')
        .select('id, name, created_at, created_by')
        .gte('created_at', twentyFourHoursAgo)
        .order('created_at', { ascending: false })

      if (routesError) {
        console.error('Routes query error:', routesError?.message || String(routesError))
        throw new Error(`Routes query failed: ${routesError?.message || 'Unknown error'}`)
      }

      // ── 2. Resolve creator names for routes ──────────────────────────────────
      let usersMap: { [key: string]: any } = {}
      if (newRoutes && newRoutes.length > 0) {
        const userIds = newRoutes.map(route => route.created_by).filter(Boolean)
        if (userIds.length > 0) {
          const { data: usersData, error: usersError } = await supabase
            .from('users')
            .select('id, first_name, last_name, email')
            .in('id', userIds)

          if (!usersError && usersData) {
            usersData.forEach(user => { usersMap[user.id] = user })
          }
        }
      }

      // ── 3. New users (last 24 hours) ─────────────────────────────────────────
      let newUsers: any[] = []
      try {
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('*')
          .gte('created_at', twentyFourHoursAgo)
          .order('created_at', { ascending: false })

        if (profilesError) {
          const { data: usersData, error: usersError } = await supabase
            .from('users')
            .select('id, first_name, last_name, email, created_at')
            .gte('created_at', twentyFourHoursAgo)
            .order('created_at', { ascending: false })

          if (usersError) throw usersError
          newUsers = usersData || []
        } else {
          newUsers = profilesData || []
        }
      } catch (userError) {
        console.error('User query failed:', String(userError))
      }

      // ── 4. Reports — fetch ALL non-resolved (no time limit) ──────────────────
      let reports: any[] = []
      try {
        const { data: reportsData, error: reportsError } = await supabase
          .from('reports')
          .select('id, route_id, route_name, user_id, reason, message, status, created_at')
          .neq('status', 'resolved')
          .order('created_at', { ascending: false })

        if (reportsError) {
          console.error('Reports query error:', reportsError?.message)
        } else {
          reports = reportsData || []
        }
      } catch (reportError) {
        console.error('Reports query failed:', String(reportError))
      }

      // ── 5. Build unified alerts array ────────────────────────────────────────
      const alertsFromData: Alert[] = []

      newRoutes?.forEach((route: any) => {
        const user = usersMap[route.created_by]
        const creatorName = user
          ? `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email || 'Unknown User'
          : 'Unknown User'

        alertsFromData.push({
          id: `route-${route.id}`,
          title: 'New Route Submitted',
          message: `A new route "${route.name}" was submitted`,
          type: 'new_route',
          severity: 'info',
          read: false,
          route_id: route.id,
          created_by_name: creatorName,
          created_at: route.created_at,
          updated_at: route.created_at,
        })
      })

      newUsers?.forEach(user => {
        const userName = user.first_name && user.last_name
          ? `${user.first_name} ${user.last_name}`
          : user.full_name || user.email || 'Unknown User'

        alertsFromData.push({
          id: `user-${user.id}`,
          title: 'New User Registered',
          message: `User "${userName}" created an account`,
          type: 'user',
          severity: 'info',
          read: false,
          created_at: user.created_at,
          updated_at: user.created_at,
        })
      })

      // Reports persist until resolved — no time filter
      reports.forEach((report: any) => {
        const severityMap: Record<string, 'info' | 'warning' | 'error'> = {
          pending: 'warning',
          reviewed: 'info',
        }

        alertsFromData.push({
          id: `report-${report.id}`,
          title: 'Route Report',
          message: report.message
            ? `${report.reason}: "${report.message}"`
            : report.reason,
          type: 'report',
          severity: severityMap[report.status] ?? 'warning',
          read: report.status !== 'pending',
          route_id: report.route_id ?? undefined,
          route_name: report.route_name ?? undefined,
          report_id: report.id,
          report_status: report.status,
          report_reason: report.reason,
          created_at: report.created_at,
          updated_at: report.created_at,
        })
      })

      alertsFromData.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )

      setAlerts(alertsFromData)
    } catch (err) {
      console.error('Failed to fetch alerts:', String(err))
      setError('Failed to load alerts')
      setAlerts([
        {
          id: '1',
          title: 'System Alert',
          message: 'Unable to load real-time alerts. Using demo data.',
          type: 'system',
          severity: 'warning',
          read: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAlerts()
  }, [fetchAlerts])

  const markAsRead = async (alertId: string) => {
    try {
      const { error } = await supabase
        .from('alerts')
        .update({ read: true, updated_at: new Date().toISOString() })
        .eq('id', alertId)

      if (error) {
        setAlerts(prev =>
          prev.map(a => (a.id === alertId ? { ...a, read: true } : a))
        )
      }
      toast.success('Alert marked as read')
      fetchAlerts()
    } catch (err: any) {
      console.error('Mark as read error:', err?.message || err)
      toast.error('Failed to mark alert as read')
    }
  }

  // ── Update report status ──────────────────────────────────────────────────────
  const updateReportStatus = async (reportId: string, status: 'reviewed' | 'resolved') => {
    try {
      const { data: updated, error } = await supabase
        .from('reports')
        .update({ status })
        .eq('id', reportId)
        .select('id, status')   // returns the modified row(s) so we can verify

      // Hard DB error (syntax, connection, etc.)
      if (error) {
        console.error('[updateReportStatus] DB error:', error)
        toast.error(`DB error: ${error.message}`)
        return
      }

      // Supabase RLS silently blocks writes and returns no error — just 0 rows.
      // This is the most common cause of "nothing happens" after clicking resolve.
      if (!updated || updated.length === 0) {
        console.error(
          '[updateReportStatus] 0 rows updated — RLS is blocking the write.\n' +
          'Fix: run this in your Supabase SQL editor:\n\n' +
          'ALTER TABLE reports ENABLE ROW LEVEL SECURITY;\n' +
          'CREATE POLICY "admins_can_update_reports"\n' +
          '  ON reports FOR UPDATE TO authenticated\n' +
          '  USING (true) WITH CHECK (true);\n'
        )
        toast.error('Update blocked by database policy — see browser console for the fix.')
        return
      }

      toast.success(
        status === 'resolved'
          ? 'Report resolved and dismissed'
          : 'Report marked as reviewed'
      )

      // Re-fetch so UI reflects true DB state
      await fetchAlerts()
    } catch (err: any) {
      console.error('[updateReportStatus] unexpected error:', err)
      toast.error('Unexpected error — see browser console.')
    }
  }

  const deleteAlert = async (alertId: string) => {
    try {
      const { error } = await supabase
        .from('alerts')
        .delete()
        .eq('id', alertId)

      if (error) {
        setAlerts(prev => prev.filter(a => a.id !== alertId))
      }
      toast.success('Alert deleted')
      fetchAlerts()
    } catch (err: any) {
      console.error('Delete alert error:', err)
      toast.error('Failed to delete alert')
    }
  }

  return {
    alerts,
    loading,
    error,
    refresh: fetchAlerts,
    markAsRead,
    deleteAlert,
    updateReportStatus,
  }
}