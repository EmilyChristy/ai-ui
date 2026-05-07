import { useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import {
  LayoutDashboard,
  FolderKanban,
  Table2,
  Palette,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/data', icon: Table2, label: 'Data Table' },
  { to: '/components', icon: Palette, label: 'Components' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  return (
    <aside
      className={cn(
        'relative flex flex-col h-screen border-r border-[#212226] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] transition-all duration-300',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      {/* Logo */}
      <div className={cn('flex items-center gap-3 px-4 py-5 border-b border-white/10', collapsed && 'justify-center px-0')}>
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded bg-white/10 text-[var(--color-primary-foreground)]">
          <Sparkles className="w-4 h-4" />
        </div>
        {!collapsed && (
          <span className="font-semibold text-sm tracking-[0.08em] uppercase">AI UI</span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.to || (item.to !== '/dashboard' && pathname.startsWith(item.to))
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white',
                collapsed && 'justify-center px-2'
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={cn(
          'absolute -right-3 top-20 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] transition-colors hover:border-[var(--color-ring)] hover:text-[var(--color-foreground)]'
        )}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  )
}
