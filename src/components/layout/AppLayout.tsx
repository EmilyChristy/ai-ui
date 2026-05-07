import { useEffect } from 'react'
import { Outlet, useNavigate } from '@tanstack/react-router'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { useAuthStore } from '@/stores/useAuthStore'
import { useThemeStore } from '@/stores/useThemeStore'

export function AppLayout() {
  const { isAuthenticated } = useAuthStore()
  const { theme } = useThemeStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/login' })
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) return null

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-muted)]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
