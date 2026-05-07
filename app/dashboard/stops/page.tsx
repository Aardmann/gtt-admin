'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { Stop } from '../../../types'
import { Header } from '../../../components/layout/Header'
import { StopsTable } from '../../../components/dashboard/StopsTable'
import { SearchBar } from '../../../components/common/SearchBar'
import { Pagination } from '../../../components/common/Pagination'
import { toast } from 'react-hot-toast'
import { FiPlus, FiMap, FiFilter } from 'react-icons/fi'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../../components/map/Map'), { ssr: false })

export default function StopsPage() {
  const [stops, setStops] = useState<Stop[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null)
  const [selectedStopCreator, setSelectedStopCreator] = useState<any>(null)
  const [showMap, setShowMap] = useState(false)
  const [totalStops, setTotalStops] = useState(0)
  const itemsPerPage = 10

  useEffect(() => {
    fetchStops()
    fetchTotalStops()
    setupRealtimeSubscription()
  }, [page, search])

  const fetchStops = async () => {
    try {
      setLoading(true)
      
      let query = supabase
        .from('stops')
        .select('*', { count: 'exact' })

      if (search) {
        query = query.ilike('name', `%${search}%`)
      }

      const from = (page - 1) * itemsPerPage
      const to = from + itemsPerPage - 1

      const { data, error, count } = await query
        .range(from, to)
        .order('created_at', { ascending: false })

      if (error) throw error

      setStops(data || [])
      setTotalPages(Math.ceil((count || 0) / itemsPerPage))
    } catch (error) {
      toast.error('Failed to load stops')
    } finally {
      setLoading(false)
    }
  }

  const fetchTotalStops = async () => {
    try {
      const { count, error } = await supabase
        .from('stops')
        .select('*', { count: 'exact', head: true })

      if (error) throw error

      setTotalStops(count || 0)
    } catch (error) {
      console.error('Failed to fetch total stops:', error)
    }
  }

  const setupRealtimeSubscription = () => {
    const subscription = supabase
      .channel('stops-realtime')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'stops' },
        fetchStops
      )
      .subscribe()

    return () => subscription.unsubscribe()
  }

  const handleDeleteStop = async (stopId: string) => {
    if (!confirm('Are you sure you want to delete this stop?')) return
    
    try {
      const { error } = await supabase
        .from('stops')
        .delete()
        .eq('id', stopId)

      if (error) throw error
      
      toast.success('Stop deleted successfully')
    } catch (error) {
      toast.error('Failed to delete stop')
    }
  }

  const handleSelectStop = async (stop: Stop) => {
    setSelectedStop(stop)
    
    // Fetch creator information
    if (stop.created_by) {
      try {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('id, first_name, last_name, email')
          .eq('id', stop.created_by)
          .single()
        
        if (!userError && userData) {
          // Try to get role from profiles table
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', stop.created_by)
            .single()
          
          if (!profileError && profileData) {
            setSelectedStopCreator({ ...userData, role: profileData.role })
          } else {
            setSelectedStopCreator(userData)
          }
        } else {
          setSelectedStopCreator(null)
        }
      } catch (error) {
        setSelectedStopCreator(null)
      }
    } else {
      setSelectedStopCreator(null)
    }
  }

  const handleAddStop = async () => {
    const name = prompt('Enter stop name:')
    if (!name) return

    const latitude = parseFloat(prompt('Enter latitude:') || '0')
    const longitude = parseFloat(prompt('Enter longitude:') || '0')

    try {
      const { error } = await supabase
        .from('stops')
        .insert([{
          name,
          latitude,
          longitude,
          created_by: (await supabase.auth.getUser()).data.user?.id
        }])

      if (error) throw error
      
      toast.success('Stop added successfully')
    } catch (error) {
      toast.error('Failed to add stop')
    }
  }


  return (
    <div className="space-y-6">
      <Header 
        title="Stops Management" 
        subtitle="Manage bus stops, view locations, and edit stop information"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <SearchBar 
                  value={search}
                  onChange={setSearch}
                  placeholder="Search stops by name..."
                />
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => window.open('https://aardmann.github.io/ghana-trotro-transit-admin-web/', '_blank')}
                  className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50"
                >
                  <FiMap />
                  <span>Show Map</span>
                </button>
                
                <button 
                  onClick={() => window.open('https://aardmann.github.io/ghana-trotro-transit-admin-web/', '_blank')}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  <FiPlus />
                  <span>Add Stop</span>
                </button>
              </div>
            </div>

            <StopsTable 
              stops={stops}
              loading={loading}
              onDelete={handleDeleteStop}
              onSelect={handleSelectStop}
            />

            <Pagination 
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>

          {showMap && stops.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Stops Map View</h3>
              <div className="h-96 rounded-lg overflow-hidden">
                <Map stops={stops} selectedStop={selectedStop} />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">Stop Statistics</h3>
            <div className="space-y-4">
              <div>
                <p className="text-text-light">Total Stops</p>
                <p className="text-2xl font-bold text-text">{totalStops}</p>
              </div>
              <div>
                <p className="text-text-light">In Accra Region</p>
                <p className="text-2xl font-bold text-primary">
                  {stops.filter(s => s.name.toLowerCase().includes('accra')).length}
                </p>
              </div>
              <div>
                <p className="text-text-light">Recently Added</p>
                <p className="text-2xl font-bold text-success">
                  {stops.filter(s => {
                    const date = new Date(s.created_at)
                    const now = new Date()
                    return (now.getTime() - date.getTime()) < 7 * 24 * 60 * 60 * 1000
                  }).length}
                </p>
              </div>
            </div>
          </div>

          {selectedStop && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-text mb-4">Selected Stop Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-text-light">Name</p>
                  <p className="font-medium text-text">{selectedStop.name}</p>
                </div>
                <div>
                  <p className="text-text-light">Coordinates</p>
                  <p className="font-medium text-text">
                    {selectedStop.latitude}, {selectedStop.longitude}
                  </p>
                </div>
                <div>
                  <p className="text-text-light">Created</p>
                  <p className="font-medium text-text">
                    {new Date(selectedStop.created_at).toLocaleDateString()}
                  </p>
                </div>
                {selectedStopCreator && (
                  <div>
                    <p className="text-text-light">Created By</p>
                    <p className="font-medium text-text flex items-center">
                      {selectedStopCreator.first_name && selectedStopCreator.last_name 
                        ? `${selectedStopCreator.first_name} ${selectedStopCreator.last_name}` 
                        : selectedStopCreator.email || 'Unknown User'}
                      {selectedStopCreator.role && (
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                          selectedStopCreator.role === 'admin' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {selectedStopCreator.role}
                        </span>
                      )}
                    </p>
                  </div>
                )}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      const newName = prompt('Enter new name:', selectedStop.name)
                      if (newName) {
                        // Update stop name
                        supabase
                          .from('stops')
                          .update({ name: newName })
                          .eq('id', selectedStop.id)
                          .then(() => {
                            toast.success('Stop updated')
                            fetchStops()
                          })
                      }
                    }}
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    Edit Stop
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-gray-50 text-left">
                Import Stops from CSV
              </button>
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-gray-50 text-left">
                Generate Report
              </button>
              <button className="w-full px-4 py-3 border border-border rounded-lg hover:bg-gray-50 text-left">
                View Stop Usage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}