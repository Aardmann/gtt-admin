// app/dashboard/routes/RoutesPageContent.tsx
'use client'

export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '../../../components/layout/Header'
import { RoutesTable } from '../../../components/dashboard/RoutesTable'
import { SearchBar } from '../../../components/common/SearchBar'
import { Pagination } from '../../../components/common/Pagination'
import { FiFilter, FiDownload } from 'react-icons/fi'
import { useRoutes } from '../../../hooks/useRoutes'

export default function RoutesPageContent() {
  const searchParams = useSearchParams()
  const highlightRouteId = searchParams.get('highlight')
  
  const { routes, loading, approveRoute, rejectRoute, deleteRoute } = useRoutes()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('all')
  const [highlightedRoute, setHighlightedRoute] = useState<string | null>(highlightRouteId)
  const itemsPerPage = 10

  // When highlight route changes, scroll to the correct page
  useEffect(() => {
    if (highlightRouteId && routes.length > 0) {
      const routeIndex = routes.findIndex(r => r.id === highlightRouteId)
      if (routeIndex !== -1) {
        const pageNum = Math.floor(routeIndex / itemsPerPage) + 1
        setPage(pageNum)
        setHighlightedRoute(highlightRouteId)
        
        // Clear highlight after 5 seconds
        const timeout = setTimeout(() => {
          setHighlightedRoute(null)
        }, 5000)
        
        return () => clearTimeout(timeout)
      }
    }
  }, [highlightRouteId, routes, itemsPerPage])

  // Filter routes
  const filteredRoutes = routes.filter(route => {
    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      const matchesSearch = 
        route.name.toLowerCase().includes(searchLower) ||
        route.description?.toLowerCase().includes(searchLower) ||
        route.vehicle_type?.toLowerCase().includes(searchLower)
      if (!matchesSearch) return false
    }

    // Approval filter
    if (filter === 'pending' && (route.approved || route.rejection_reason)) return false
    if (filter === 'approved' && !route.approved) return false
    if (filter === 'rejected' && !route.rejection_reason) return false

    return true
  })

  // Pagination
  const totalPages = Math.ceil(filteredRoutes.length / itemsPerPage)
  const paginatedRoutes = filteredRoutes.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  const routeStats = {
    total: routes.length,
    approved: routes.filter(r => r.approved).length,
    pending: routes.filter(r => !r.approved && !r.rejection_reason).length,
    rejected: routes.filter(r => r.rejection_reason).length,
    totalDistance: routes.reduce((sum, r) => sum + (r.total_distance || 0), 0),
    totalStops: routes.reduce((sum, r) => sum + (r.stops?.length || 0), 0)
  }

  return (
    <div className="space-y-6">
      <Header 
        title="Routes Management" 
        subtitle="Manage and approve routes, view route details"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <SearchBar 
                  value={search}
                  onChange={setSearch}
                  placeholder="Search routes by name or description..."
                />
                
                <select
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value)
                    setPage(1)
                  }}
                  className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Routes</option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              {/* <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    alert('Export feature coming soon!')
                  }}
                  className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50"
                >
                  <FiDownload />
                  <span>Export</span>
                </button>
              </div> */}
            </div>

            <RoutesTable 
              routes={paginatedRoutes}
              loading={loading}
              onApprove={approveRoute}
              onReject={(routeId) => {
                const reason = prompt('Enter rejection reason:')
                if (reason) rejectRoute(routeId, reason)
              }}
              onDelete={deleteRoute}
              highlightedRoute={highlightedRoute}
            />

            <Pagination 
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">Route Statistics</h3>
            <div className="space-y-4">
              <div>
                <p className="text-text-light">Total Routes</p>
                <p className="text-2xl font-bold text-text">{routeStats.total}</p>
              </div>
              <div>
                <p className="text-text-light">Approved</p>
                <p className="text-2xl font-bold text-success">{routeStats.approved}</p>
              </div>
              <div>
                <p className="text-text-light">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{routeStats.pending}</p>
              </div>
              <div>
                <p className="text-text-light">Rejected</p>
                <p className="text-2xl font-bold text-error">{routeStats.rejected}</p>
              </div>
              <div>
                <p className="text-text-light">Total Distance</p>
                <p className="text-2xl font-bold text-primary">{routeStats.totalDistance.toFixed(1)} km</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-text mb-4">Popular Vehicle Types</h3>
            <div className="space-y-3">
              {Array.from(
                new Set(routes.map(r => r.vehicle_type).filter(Boolean))
              )
              .slice(0, 5)
              .map(type => {
                const count = routes.filter(r => r.vehicle_type === type).length
                return (
                  <div key={type} className="flex items-center justify-between">
                    <span className="text-text">{type}</span>
                    <span className="font-medium text-primary">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}