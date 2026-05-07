import { useState, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { employees, type Employee } from '@/data/mockData'

const statusConfig: Record<string, { label: string; variant: 'default' | 'success' | 'warning' | 'destructive' | 'secondary' }> = {
  active: { label: 'Active', variant: 'success' },
  inactive: { label: 'Inactive', variant: 'secondary' },
  'on-leave': { label: 'On Leave', variant: 'warning' },
}

export function DataPage() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo<ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: 'name',
        header: ({ column }) => (
          <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Name <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        ),
        cell: ({ row }) => (
          <div>
            <div className="font-medium">{row.original.name}</div>
            <div className="text-xs text-[var(--color-muted-foreground)]">{row.original.email}</div>
          </div>
        ),
      },
      {
        accessorKey: 'role',
        header: ({ column }) => (
          <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Role <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        ),
      },
      {
        accessorKey: 'department',
        header: 'Department',
        cell: ({ row }) => (
          <Badge variant="outline">{row.original.department}</Badge>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
          const config = statusConfig[row.original.status]
          return <Badge variant={config.variant}>{config.label}</Badge>
        },
      },
      {
        accessorKey: 'joinDate',
        header: ({ column }) => (
          <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Join Date <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        ),
      },
      {
        accessorKey: 'salary',
        header: ({ column }) => (
          <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Salary <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        ),
        cell: ({ row }) => (
          <span>${row.original.salary.toLocaleString()}</span>
        ),
      },
    ],
    []
  )

  const table = useReactTable({
    data: employees,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: { pagination: { pageSize: 7 } },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Data Table</h1>
        <p className="text-[var(--color-muted-foreground)]">Employee directory with sorting, filtering, and pagination</p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
          <Input
            placeholder="Search employees..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-9"
          />
        </div>
        <span className="text-sm text-[var(--color-muted-foreground)]">
          {table.getFilteredRowModel().rows.length} results
        </span>
      </div>

      {/* Table */}
      <div className="rounded-xl border bg-[var(--color-card)] overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-[var(--color-muted)]/30">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="px-4 py-3">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-[var(--color-muted-foreground)]">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
