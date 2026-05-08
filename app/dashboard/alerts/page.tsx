// app/dashboard/alerts/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../../components/layout/Header'
import { toast } from 'react-hot-toast'
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiRefreshCw,
  FiBell,
  FiUserCheck,
  FiNavigation,
  FiFlag,
  FiEye,
  FiCheck,
  FiHash,
} from 'react-icons/fi'
import { useAlerts } from '../../../hooks/useAlerts'
import { Alert } from '../../../types'
import { Loader } from '../../../components/common/Loader'

const ReportStatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    pending:  'bg-yellow-100 text-yellow-800 border border-yellow-200',
    reviewed: 'bg-blue-100   text-blue-800   border border-blue-200',
    resolved: 'bg-green-100  text-green-800  border border-green-200',
  }
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status] ?? styles.pending}`}>
      {status.toUpperCase()}
    </span>
  )
}

export default function AlertsPage() {
  const router = useRouter()
  const { alerts, loading, error, refresh, updateReportStatus } = useAlerts()
  const [filter, setFilter] = useState('all')
  const [updatingReport, setUpdatingReport] = useState<string | null>(null)

  const filteredAlerts = alerts.filter((alert: Alert) => {
    if (filter === 'unread')  return !alert.read
    if (filter === 'read')    return alert.read
    if (filter === 'report')  return alert.type === 'report'
    if (filter !== 'all')     return alert.type === filter
    return true
  })

  const reportCount        = alerts.filter((a: Alert) => a.type === 'report').length
  const pendingReportCount = alerts.filter((a: Alert) => a.type === 'report' && a.report_status === 'pending').length

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'error':   return 'bg-red-50    text-red-700    border-red-200'
      case 'warning': return 'bg-yellow-50 text-yellow-700 border-yellow-200'
      default:        return 'bg-blue-50   text-blue-700   border-blue-200'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'new_route': return <FiNavigation className="mr-2 shrink-0" />
      case 'payment':   return <FiBell       className="mr-2 shrink-0" />
      case 'user':      return <FiUserCheck  className="mr-2 shrink-0" />
      case 'report':    return <FiFlag       className="mr-2 shrink-0" />
      default:          return <FiAlertCircle className="mr-2 shrink-0" />
    }
  }

  const handleAlertClick = (alert: Alert) => {
    if (alert.route_id && alert.type !== 'report') {
      router.push(`/dashboard/routes?highlight=${alert.route_id}`)
    }
  }

  const handleMarkReviewed = async (e: React.MouseEvent, reportId: string) => {
    e.stopPropagation()
    setUpdatingReport(reportId)
    await updateReportStatus(reportId, 'reviewed')
    setUpdatingReport(null)
  }

  const handleMarkResolved = async (e: React.MouseEvent, reportId: string) => {
    e.stopPropagation()
    setUpdatingReport(reportId)
    await updateReportStatus(reportId, 'resolved')
    setUpdatingReport(null)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <Header title="Alerts & Reports" />
        <Loader message="Loading..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Header title="Alerts & Monitoring" />
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-center py-12">
            <FiAlertCircle className="mx-auto text-4xl text-error mb-4" />
            <p className="text-text font-medium mb-2">{error}</p>
            <p className="text-text-light">Please run the database setup script first</p>
            <button onClick={refresh} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Header
        title="Alerts & Reports"
        subtitle="Monitor system alerts, route submissions, user activity, and route reports"
      />

      <div className="bg-white rounded-lg shadow p-6">
        {/* ── Toolbar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            >
              <option value="all">All Alerts</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
              <option value="new_route">New Routes</option>
              <option value="report">Reports {reportCount > 0 ? `(${reportCount})` : ''}</option>
              <option value="payment">Payments</option>
              <option value="system">System</option>
            </select>

            {pendingReportCount > 0 && (
              <button
                onClick={() => setFilter('report')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-full text-xs font-semibold hover:bg-yellow-200 transition-colors"
              >
                <FiFlag className="text-yellow-600" />
                {pendingReportCount} pending report{pendingReportCount !== 1 ? 's' : ''}
              </button>
            )}
          </div>

          <button
            onClick={refresh}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark text-sm"
          >
            <FiRefreshCw />
            <span>Refresh</span>
          </button>
        </div>

        {/* ── Alert list ── */}
        <div className="space-y-3">
          {filteredAlerts.length === 0 ? (
            <div className="text-center py-12">
              <FiCheckCircle className="text-success mx-auto text-4xl mb-4" />
              <p className="text-text font-medium">No alerts found</p>
              <p className="text-text-light text-sm mt-1">All systems are running smoothly</p>
            </div>
          ) : (
            filteredAlerts.map((alert: Alert) => {
              const isReport   = alert.type === 'report'
              const isUpdating = updatingReport === alert.report_id

              return (
                <div
                  key={alert.id}
                  onClick={() => handleAlertClick(alert)}
                  className={[
                    'border rounded-lg p-4 transition-colors',
                    isReport ? 'cursor-default' : 'cursor-pointer hover:bg-blue-50',
                    alert.read ? 'bg-gray-50' : 'bg-white',
                    isReport && alert.report_status === 'pending'
                      ? 'border-yellow-200'
                      : 'border-border',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-2 rounded-lg border shrink-0 ${getSeverityColor(alert.severity)}`}>
                      {getTypeIcon(alert.type)}
                    </div>

                    {/* Body */}
                    <div className="flex-1 min-w-0">
                      {/* Title + badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold text-text">{alert.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getSeverityColor(alert.severity)}`}>
                          {alert.severity.toUpperCase()}
                        </span>
                        {isReport && alert.report_status && (
                          <ReportStatusBadge status={alert.report_status} />
                        )}
                        {!isReport && alert.read && (
                          <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full">
                            READ
                          </span>
                        )}
                      </div>

                      {/* Message */}
                      <p className="text-text-light text-sm">{alert.message}</p>

                      {/* Route name + ID for reports */}
                      {isReport && (alert.route_name || alert.route_id) && (
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          {alert.route_name && (
                            <p className="text-xs text-text-light">
                              Route:{' '}
                              <span className="font-medium text-text">{alert.route_name}</span>
                            </p>
                          )}
                          {alert.route_id && (
                            <p className="text-xs text-text-light flex items-center gap-1">
                              <FiHash size={10} />
                              <span className="font-mono">{alert.route_id}</span>
                            </p>
                          )}
                        </div>
                      )}

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="text-xs text-text-light flex items-center gap-1">
                          <FiClock />
                          {new Date(alert.created_at).toLocaleString()}
                        </span>
                        <span className="text-xs text-text-light capitalize">
                          {alert.type.replace('_', ' ')}
                        </span>
                        {alert.created_by_name && (
                          <span className="text-xs text-text-light">
                            By: <span className="font-medium">{alert.created_by_name}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Report action buttons */}
                    {isReport && alert.report_id && (
                      <div className="flex flex-col gap-2 shrink-0">
                        {alert.report_status === 'pending' && (
                          <button
                            onClick={(e) => handleMarkReviewed(e, alert.report_id!)}
                            disabled={isUpdating}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 disabled:opacity-50 transition-colors whitespace-nowrap"
                          >
                            <FiEye size={12} />
                            {isUpdating ? 'Saving...' : 'Mark Reviewed'}
                          </button>
                        )}
                        {alert.report_status !== 'resolved' && (
                          <button
                            onClick={(e) => handleMarkResolved(e, alert.report_id!)}
                            disabled={isUpdating}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 disabled:opacity-50 transition-colors whitespace-nowrap"
                          >
                            <FiCheck size={12} />
                            {isUpdating ? 'Saving...' : 'Resolve'}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Extra data details */}
                  {alert.data && Object.keys(alert.data).length > 0 && (
                    <div className="mt-3 ml-14">
                      <details className="text-sm">
                        <summary className="cursor-pointer text-primary hover:text-primary-dark">
                          View Details
                        </summary>
                        <pre className="mt-2 p-3 bg-gray-50 rounded text-xs overflow-x-auto">
                          {JSON.stringify(alert.data, null, 2)}
                        </pre>
                      </details>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}