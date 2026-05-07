export interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'paused' | 'completed' | 'planning'
  progress: number
  team: number
  dueDate: string
  tags: string[]
  tech: string[]
}

export interface Employee {
  id: string
  name: string
  email: string
  role: string
  department: string
  status: 'active' | 'inactive' | 'on-leave'
  joinDate: string
  salary: number
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'AI Analytics Platform',
    description: 'Real-time data analytics with machine learning insights and predictive modeling.',
    status: 'active',
    progress: 72,
    team: 8,
    dueDate: '2025-09-30',
    tags: ['ML', 'Analytics'],
    tech: ['Python', 'React', 'TensorFlow'],
  },
  {
    id: '2',
    name: 'Customer Portal Redesign',
    description: 'Complete UX overhaul of the customer-facing portal with new design system.',
    status: 'active',
    progress: 45,
    team: 5,
    dueDate: '2025-08-15',
    tags: ['Design', 'UX'],
    tech: ['React', 'TypeScript', 'Figma'],
  },
  {
    id: '3',
    name: 'Microservices Migration',
    description: 'Breaking down the monolithic architecture into scalable microservices.',
    status: 'planning',
    progress: 18,
    team: 12,
    dueDate: '2026-01-31',
    tags: ['Architecture', 'DevOps'],
    tech: ['Go', 'Kubernetes', 'Docker'],
  },
  {
    id: '4',
    name: 'Mobile App v2.0',
    description: 'New native mobile application with offline-first capabilities.',
    status: 'active',
    progress: 61,
    team: 6,
    dueDate: '2025-10-15',
    tags: ['Mobile', 'iOS', 'Android'],
    tech: ['React Native', 'TypeScript'],
  },
  {
    id: '5',
    name: 'Data Pipeline Optimization',
    description: 'Improving ETL pipeline performance to handle 10x current data volumes.',
    status: 'completed',
    progress: 100,
    team: 4,
    dueDate: '2025-03-01',
    tags: ['Data', 'Performance'],
    tech: ['Apache Spark', 'Python', 'AWS'],
  },
  {
    id: '6',
    name: 'Security Compliance Suite',
    description: 'SOC2 Type II compliance tooling and automated security scanning.',
    status: 'paused',
    progress: 33,
    team: 3,
    dueDate: '2025-12-01',
    tags: ['Security', 'Compliance'],
    tech: ['Python', 'Terraform'],
  },
]

export const employees: Employee[] = [
  { id: '1', name: 'Sarah Chen', email: 'sarah.chen@company.com', role: 'Engineering Lead', department: 'Engineering', status: 'active', joinDate: '2021-03-15', salary: 145000 },
  { id: '2', name: 'Marcus Williams', email: 'marcus.w@company.com', role: 'Senior Designer', department: 'Product', status: 'active', joinDate: '2022-07-01', salary: 118000 },
  { id: '3', name: 'Elena Rodriguez', email: 'elena.r@company.com', role: 'Data Scientist', department: 'Analytics', status: 'active', joinDate: '2020-11-20', salary: 132000 },
  { id: '4', name: 'James Park', email: 'james.park@company.com', role: 'DevOps Engineer', department: 'Infrastructure', status: 'on-leave', joinDate: '2021-08-10', salary: 128000 },
  { id: '5', name: 'Priya Patel', email: 'priya.p@company.com', role: 'Product Manager', department: 'Product', status: 'active', joinDate: '2019-06-15', salary: 138000 },
  { id: '6', name: 'Tom Anderson', email: 'tom.a@company.com', role: 'Frontend Engineer', department: 'Engineering', status: 'active', joinDate: '2023-01-09', salary: 105000 },
  { id: '7', name: 'Lisa Zhang', email: 'lisa.z@company.com', role: 'Marketing Manager', department: 'Marketing', status: 'inactive', joinDate: '2020-04-20', salary: 115000 },
  { id: '8', name: 'Carlos Mendez', email: 'carlos.m@company.com', role: 'Backend Engineer', department: 'Engineering', status: 'active', joinDate: '2022-09-12', salary: 122000 },
  { id: '9', name: 'Amy Foster', email: 'amy.f@company.com', role: 'UX Researcher', department: 'Product', status: 'active', joinDate: '2021-12-01', salary: 110000 },
  { id: '10', name: 'David Kim', email: 'david.kim@company.com', role: 'Security Engineer', department: 'Infrastructure', status: 'active', joinDate: '2020-02-14', salary: 135000 },
]
