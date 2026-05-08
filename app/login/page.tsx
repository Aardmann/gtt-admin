// app/login/page.tsx - With admin role check
'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../lib/supabase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    // Check existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        // Check if user is admin
        const isAdmin = await checkIfAdmin(session.user.email!)
        if (isAdmin) {
          router.push('/dashboard')
        } else {
          setAuthError('Only administrators can access this dashboard')
          await supabase.auth.signOut()
        }
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Check if user is admin
          const isAdmin = await checkIfAdmin(session.user.email!)
          if (isAdmin) {
            router.push('/dashboard')
          } else {
            setAuthError('Access denied. Only administrators can login.')
            await supabase.auth.signOut()
            toast.error('Access denied. Admin privileges required.')
          }
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [router])

  const checkIfAdmin = async (email: string): Promise<boolean> => {
    try {
      // Check admin_users table
      const { data, error } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single()

      if (error || !data) {
        // Also check profiles table for admin role
        const { data: profileData } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', (await supabase.auth.getUser()).data.user?.id)
          .single()

        return profileData?.role === 'admin'
      }

      return true
    } catch (error) {
      console.error('Error checking admin status:', error)
      return false
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-text mb-2">Ghana Trotro Admin</h1>
          <p className="text-text-light">Administrator access only</p>
        </div>

        {authError && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <p className="text-error font-medium">{authError}</p>
            <p className="text-error/80 text-sm mt-1">
              Please contact system administrator for access.
            </p>
          </div>
        )}

        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#6b21a8',
                  brandAccent: '#581c87',
                },
              },
            },
            style: {
              button: { borderRadius: '8px' },
              input: { borderRadius: '8px' },
            },
          }}
          providers={[]}
          view="sign_in"
          showLinks={false}
          redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/dashboard`}
        />
      </div>
    </div>
  )
}