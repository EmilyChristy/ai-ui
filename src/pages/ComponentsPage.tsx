import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Check, AlertCircle, Info, Star } from 'lucide-react'

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export function ComponentsPage() {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Components</h1>
        <p className="text-[var(--color-muted-foreground)]">Design system component showcase</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Buttons */}
        <Section title="Buttons" description="All button variants and sizes">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon"><Star className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badges" description="Status and label indicators">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </Section>

        {/* Inputs */}
        <Section title="Form Elements" description="Input fields and labels">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Default Input</Label>
              <Input placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label>With icon hint</Label>
              <Input type="email" placeholder="name@company.com" />
            </div>
            <div className="space-y-2">
              <Label>Disabled</Label>
              <Input placeholder="Disabled input" disabled />
            </div>
            <div className="space-y-2">
              <Label>Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={switchOn} onCheckedChange={setSwitchOn} id="demo-switch" />
              <Label htmlFor="demo-switch">Toggle switch ({switchOn ? 'On' : 'Off'})</Label>
            </div>
          </div>
        </Section>

        {/* Avatars */}
        <Section title="Avatars" description="User avatar components">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">AJ</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarFallback className="text-base">EP</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-xl">MK</AvatarFallback>
            </Avatar>
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography" description="Text hierarchy and styles">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
            <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <h4 className="text-xl font-medium">Heading 4</h4>
            <p className="text-base">Body text — Regular paragraph with default font size and line height for comfortable reading.</p>
            <p className="text-sm text-[var(--color-muted-foreground)]">Small muted text for captions and secondary content.</p>
            <p className="text-xs uppercase tracking-widest font-medium text-[var(--color-muted-foreground)]">Overline / Label text</p>
          </div>
        </Section>

        {/* Alerts / States */}
        <Section title="Alert States" description="Feedback and status messages">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Success</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-500">Action completed successfully.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Warning</p>
                <p className="text-xs text-amber-600 dark:text-amber-500">Please review before continuing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-destructive)]/10 border border-[var(--color-destructive)]/20">
              <AlertCircle className="w-4 h-4 text-[var(--color-destructive)] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-[var(--color-destructive)]">Error</p>
                <p className="text-xs text-[var(--color-destructive)]/80">Something went wrong. Please try again.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
              <Info className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-[var(--color-primary)]">Info</p>
                <p className="text-xs text-[var(--color-primary)]/80">Helpful information to guide your action.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Color Palette */}
        <Section title="Color Palette" description="Theme color tokens">
          <div className="space-y-3">
            {[
              { name: 'Primary', bg: 'bg-[var(--color-primary)]', text: 'text-[var(--color-primary-foreground)]' },
              { name: 'Secondary', bg: 'bg-[var(--color-secondary)]', text: 'text-[var(--color-secondary-foreground)]' },
              { name: 'Muted', bg: 'bg-[var(--color-muted)]', text: 'text-[var(--color-muted-foreground)]' },
              { name: 'Destructive', bg: 'bg-[var(--color-destructive)]', text: 'text-[var(--color-destructive-foreground)]' },
            ].map((color) => (
              <div key={color.name} className={`flex items-center justify-between px-4 py-2 rounded-lg ${color.bg}`}>
                <span className={`text-sm font-medium ${color.text}`}>{color.name}</span>
                <span className={`text-xs font-mono ${color.text} opacity-80`}>{color.name.toLowerCase()}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Separators */}
        <Section title="Dividers & Separators">
          <div className="space-y-4">
            <Separator />
            <div className="flex items-center gap-4">
              <Separator orientation="vertical" className="h-16" />
              <p className="text-sm text-[var(--color-muted-foreground)]">Vertical separator</p>
            </div>
            <div className="relative">
              <Separator />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-card)] px-2 text-xs text-[var(--color-muted-foreground)]">or</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
