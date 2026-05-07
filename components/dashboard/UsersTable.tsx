// components/dashboard/UsersTable.tsx - Updated version
import { User } from '../../types'
import { FiUser, FiMail, FiCalendar, FiShield, FiTrash2, FiSlash } from 'react-icons/fi'

interface UsersTableProps {
  users: User[]
  loading: boolean
  onBan: (userId: string) => void
  onDelete: (userId: string) => void
}

export function UsersTable({ users, loading, onBan, onDelete }: UsersTableProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-4 text-text">Loading users...</p>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-light">No users found</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FiUser className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-text">
                      {user.first_name} {user.last_name}
                    </div>
                    <div className="text-sm text-text-light">
                      ID: {user.id.substring(0, 8)}...
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-text">
                  <FiMail className="mr-2 text-text-light" />
                  {user.email}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.profile?.role === 'admin' 
                    ? 'bg-purple-100 text-purple-800'
                    : user.profile?.role === 'banned'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {user.profile?.role || 'user'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-light">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  {new Date(user.created_at).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  {user.profile?.role !== 'banned' && (
                    <button
                      onClick={() => onBan(user.id)}
                      className="text-yellow-600 hover:text-yellow-900 flex items-center"
                      title="Ban user"
                    >
                      <FiSlash className="mr-1" />
                      Ban
                    </button>
                  )}
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 hover:text-red-900 flex items-center"
                    title="Delete user"
                  >
                    <FiTrash2 className="mr-1" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}