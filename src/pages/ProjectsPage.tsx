import { useState } from 'react'
import { Users, Calendar, Tag, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/mockData'

const statusConfig: Record<string, { label: string; variant: 'default' | 'success' | 'warning' | 'destructive' | 'secondary' }> = {
  active: { label: 'Active', variant: 'success' },
  planning: { label: 'Planning', variant: 'secondary' },
  paused: { label: 'Paused', variant: 'warning' },
  completed: { label: 'Completed', variant: 'default' },
}

export function ProjectsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<string>('all')

  const statuses = ['all', 'active', 'planning', 'paused', 'completed']

  const filtered = projects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || p.status === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-[var(--color-muted-foreground)]">Manage and track all your projects</p>
        </div>
        <Button>New Project</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {statuses.map((s) => (
            <Button
              key={s}
              variant={filter === s ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(s)}
              className="capitalize"
            >
              {s}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => {
          const config = statusConfig[project.status]
          return (
            <Card key={project.id} className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">{project.name}</CardTitle>
                  <Badge variant={config.variant} className="flex-shrink-0">{config.label}</Badge>
                </div>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[var(--color-muted-foreground)]">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--color-muted)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--color-primary)]"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[var(--color-muted-foreground)]">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.dueDate}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Tag className="w-3 h-3 text-[var(--color-muted-foreground)]" />
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs py-0 h-5">{tag}</Badge>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-[var(--color-muted)] text-[var(--color-muted-foreground)]">{t}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[var(--color-muted-foreground)]">
          <p className="text-lg font-medium">No projects found</p>
          <p className="text-sm">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  )
}
