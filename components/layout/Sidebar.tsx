'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FiHome, 
  FiUsers, 
  FiMap, 
  FiNavigation, 
  FiBell, 
  FiBarChart2,
  FiAlertCircle,
  FiSettings,
  FiArrowLeft,
  FiArrowRight,
  FiLogOut
} from 'react-icons/fi'
import { supabase } from '../../lib/supabase'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: FiHome },
  { name: 'Users', href: '/dashboard/users', icon: FiUsers },
  { name: 'Routes', href: '/dashboard/routes', icon: FiMap },
  { name: 'Stops', href: '/dashboard/stops', icon: FiNavigation },
  { name: 'Notifications', href: '/dashboard/notifications', icon: FiBell },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FiBarChart2 },
  { name: 'Alerts', href: '/dashboard/alerts', icon: FiAlertCircle },
]

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} bg-primary text-white h-screen flex flex-col transition-all duration-300`}>
      <div className="p-6 border-b border-primary-light">
        <div className="flex items-center space-x-3">
          <div className="bg-white text-primary p-1 rounded-xl ">
            <img src="/favicon.ico" alt="logo" className="w-12 h-12" />
          </div>
          {!collapsed && (
            <>
              <div>
                <h1 className="text-xl font-bold">Ghana Trotro</h1>
                <p className="text-primary-light text-sm">Admin Dashboard</p>
              </div>
            </>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary-light text-white' 
                  : 'hover:bg-primary-light/50 text-primary-light'
              }`}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-primary-light">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary-light/50 w-full text-primary-light"
        >
          {!collapsed ? <><FiArrowLeft size={20} /><span>Collapse Sidebar </span></>  : <FiArrowRight size={20} /> }
        </button>
        
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-error/20 text-error mt-2 w-full"
        >
          <FiLogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
}