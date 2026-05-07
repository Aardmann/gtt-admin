// hooks/useRoutes.ts - Add missing functions
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { Route } from '../types'
import { toast } from 'react-hot-toast'

export function useRoutes() {
  const [routes, setRoutes] = useState<Route[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRoutes = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error: fetchError } = await supabase
        .from('routes')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      
      setRoutes(data || [])
      
    } catch (err: any) {
      console.error('Failed to fetch routes:', err)
      setError(err.message)
      toast.error('Failed to load routes')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRoutes()
  }, [fetchRoutes])

  const approveRoute = async (routeId: string) => {
    try {
      const { error } = await supabase
        .from('routes')
        .update({ 
          approved: true,
          rejection_reason: null,
          description: null,
          notes: null,
          updated_at: new Date().toISOString()
        })
        .eq('id', routeId)

      if (error) throw error
      
      toast.success('Route approved successfully')
      fetchRoutes()
    } catch (err: any) {
      toast.error('Failed to approve route: ' + err.message)
    }
  }

  const rejectRoute = async (routeId: string, reason: string) => {
    try {
      const { error } = await supabase
        .from('routes')
        .update({ 
          approved: false,
          rejection_reason: reason,
          updated_at: new Date().toISOString()
        })
        .eq('id', routeId)

      if (error) throw error
      
      toast.success('Route rejected successfully')
      fetchRoutes()
    } catch (err: any) {
      toast.error('Failed to reject route: ' + err.message)
    }
  }

  const deleteRoute = async (routeId: string) => {
    if (!confirm('Are you sure you want to delete this route?')) return
    
    try {
      const { error } = await supabase
        .from('routes')
        .delete()
        .eq('id', routeId)

      if (error) throw error
      
      toast.success('Route deleted successfully')
      fetchRoutes()
    } catch (err: any) {
      toast.error('Failed to delete route: ' + err.message)
    }
  }

  return {
    routes,
    loading,
    error,
    refresh: fetchRoutes,
    approveRoute,
    rejectRoute,
    deleteRoute
  }
}