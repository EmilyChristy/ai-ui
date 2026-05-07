import { TrendingUp, TrendingDown, Users, FolderKanban, Activity, DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/mockData'

const stats = [
  {
    title: 'Total Revenue',
    value: '$284,920',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    description: 'vs last month',
  },
  {
    title: 'Active Projects',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: FolderKanban,
    description: 'vs last month',
  },
  {
    title: 'Team Members',
    value: '148',
    change: '+8',
    trend: 'up',
    icon: Users,
    description: 'vs last month',
  },
  {
    title: 'Avg Velocity',
    value: '87 pts',
    change: '-4.2%',
    trend: 'down',
    icon: Activity,
    description: 'vs last sprint',
  },
]

const recentActivity = [
  { action: 'New project created', project: 'AI Analytics Platform', time: '2 hours ago', status: 'active' },
  { action: 'Sprint completed', project: 'Mobile App v2.0', time: '5 hours ago', status: 'completed' },
  { action: 'Team member added', project: 'Microservices Migration', time: '1 day ago', status: 'active' },
  { action: 'Milestone reached', project: 'Customer Portal', time: '2 days ago', status: 'active' },
  { action: 'Project paused', project: 'Security Suite', time: '3 days ago', status: 'paused' },
]

const statusColors: Record<string, 'default' | 'success' | 'warning' | 'destructive' | 'secondary'> = {
  active: 'success',
  completed: 'default',
  paused: 'warning',
  planning: 'secondary',
}

export function DashboardPage() {
  const activeProjects = projects.filter(p => p.status === 'active')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold uppercase tracking-[0.06em]">Dashboard</h1>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">{stat.title}</CardTitle>
              <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-[var(--color-primary)]/10">
                <stat.icon className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-[var(--color-primary)]" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-[var(--color-ring)]" />
                )}
                <span className={`text-xs ${stat.trend === 'up' ? 'text-[var(--color-primary)]' : 'text-[var(--color-ring)]'}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-[var(--color-muted-foreground)]">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Currently in progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{project.name}</span>
                  <span className="text-sm text-[var(--color-muted-foreground)]">{project.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--color-muted)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--color-primary)] transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3 h-3 text-[var(--color-muted-foreground)]" />
                  <span className="text-xs text-[var(--color-muted-foreground)]">{project.team} members</span>
                  <span className="text-xs text-[var(--color-muted-foreground)]">•</span>
                  <span className="text-xs text-[var(--color-muted-foreground)]">Due {project.dueDate}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across all projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{item.action}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-[var(--color-muted-foreground)] truncate">{item.project}</span>
                      <Badge variant={statusColors[item.status]} className="text-xs py-0 h-4">
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--color-muted-foreground)] flex-shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
