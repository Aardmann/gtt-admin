// app/layout.tsx
'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '../components/layout/Sidebar'
import { Header } from '../components/layout/Header'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../components/providers/AuthProvider'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          <div className="flex min-h-screen">
            <div className="fixed inset-y-0 left-0 z-50">
              <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
            </div>
            <div className={`flex-1 flex flex-col ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
              <main className="flex-1 p-6 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  )
}