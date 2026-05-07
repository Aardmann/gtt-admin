'use client'

import { FiSearch, FiBell, FiUser } from 'react-icons/fi'
import { useAuth } from '../../components/providers/AuthProvider'

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  const { session } = useAuth()

  return (
    <header className="bg-white border-b border-border p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">{title}</h1>
          {subtitle && <p className="text-text-light">{subtitle}</p>}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <FiBell size={20} className="text-text-light" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
              <FiUser className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-text">
                {session?.user?.email?.split('@')[0] || 'Admin'}
              </p>
              <p className="text-xs text-text-light">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}