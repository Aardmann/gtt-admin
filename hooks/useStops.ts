// hooks/useStops.ts
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Stop } from '../types'
import { toast } from 'react-hot-toast'

export function useStops() {
  const [stops, setStops] = useState<Stop[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStops = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase
        .from('stops')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      
      setStops(data || [])
    } catch (err: any) {
      setError(err.message)
      toast.error('Failed to fetch stops')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStops()
    
    // Setup real-time subscription
    const subscription = supabase
      .channel('stops-channel')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'stops' },
        fetchStops
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const addStop = async (stop: Omit<Stop, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { error } = await supabase
        .from('stops')
        .insert([stop])

      if (error) throw error
      
      toast.success('Stop added successfully')
      fetchStops()
    } catch (err: any) {
      toast.error('Failed to add stop')
    }
  }

  const updateStop = async (stopId: string, updates: Partial<Stop>) => {
    try {
      const { error } = await supabase
        .from('stops')
        .update(updates)
        .eq('id', stopId)

      if (error) throw error
      
      toast.success('Stop updated successfully')
      fetchStops()
    } catch (err: any) {
      toast.error('Failed to update stop')
    }
  }

  const deleteStop = async (stopId: string) => {
    try {
      const { error } = await supabase
        .from('stops')
        .delete()
        .eq('id', stopId)

      if (error) throw error
      
      toast.success('Stop deleted')
      fetchStops()
    } catch (err: any) {
      toast.error('Failed to delete stop')
    }
  }

  return {
    stops,
    loading,
    error,
    refresh: fetchStops,
    addStop,
    updateStop,
    deleteStop
  }
}