# Design System

AI UI is a modern SaaS dashboard prototype built with React, Tailwind CSS v4, and shadcn/ui components. This document describes the design language, tokens, and conventions.

---

## Design Philosophy

- **Clean & Modern**: Minimal visual noise with purposeful use of space
- **Consistent**: Unified token system applied across all components
- **Accessible**: Sufficient contrast ratios, keyboard-navigable, screen-reader friendly
- **Themeable**: Full light and dark mode support via CSS custom properties
- **Responsive**: Fluid layouts that adapt from mobile to widescreen

---

## Theme

All design tokens are defined in `src/styles/theme.css` using Tailwind CSS v4's `@theme` directive. The file is the single source of truth for colors, typography, spacing, and border-radius values.

### Light Theme (Default)

| Token | Value | Description |
|-------|-------|-------------|
| `--color-background` | `oklch(1 0 0)` | Page background (white) |
| `--color-foreground` | `oklch(0.145 0 0)` | Primary text (near-black) |
| `--color-card` | `oklch(1 0 0)` | Card surface |
| `--color-card-foreground` | `oklch(0.145 0 0)` | Card text |
| `--color-primary` | `oklch(0.511 0.262 276.97)` | Indigo/violet brand color |
| `--color-primary-foreground` | `oklch(0.985 0.002 247.84)` | Text on primary |
| `--color-secondary` | `oklch(0.961 0.006 286.28)` | Light slate surface |
| `--color-secondary-foreground` | `oklch(0.21 0.006 285.88)` | Text on secondary |
| `--color-muted` | `oklch(0.961 0.006 286.28)` | Muted backgrounds |
| `--color-muted-foreground` | `oklch(0.552 0.016 285.88)` | Muted text (slate-500) |
| `--color-accent` | `oklch(0.961 0.006 286.28)` | Hover/accent surfaces |
| `--color-accent-foreground` | `oklch(0.21 0.006 285.88)` | Text on accent |
| `--color-destructive` | `oklch(0.577 0.245 27.33)` | Error / danger red |
| `--color-border` | `oklch(0.922 0.006 286.28)` | Borders & dividers |
| `--color-input` | `oklch(0.922 0.006 286.28)` | Input field borders |
| `--color-ring` | `oklch(0.511 0.262 276.97)` | Focus ring (matches primary) |

### Dark Theme

Applied via the `.dark` class on `<html>`. All tokens are overridden:

| Token | Value | Description |
|-------|-------|-------------|
| `--color-background` | `oklch(0.145 0 0)` | Dark page background |
| `--color-foreground` | `oklch(0.985 0 0)` | Light text |
| `--color-card` | `oklch(0.205 0 0)` | Elevated card surface |
| `--color-primary` | `oklch(0.623 0.214 259.13)` | Lighter indigo for dark mode |
| `--color-muted` | `oklch(0.269 0.006 285.88)` | Dark muted surface |
| `--color-muted-foreground` | `oklch(0.714 0.01 285.88)` | Lighter muted text |
| `--color-border` | `oklch(0.269 0.006 285.88)` | Subtle dark borders |

Theme preference is persisted to `localStorage` via `useThemeStore` (Zustand). Default is **light**.

---

## Color Palette

### Brand

The brand palette is built around **indigo/violet** (hue ~277°), chosen for its professional yet energetic quality — common in modern SaaS tools.

- **Primary**: `oklch(0.511 0.262 276.97)` — Indigo 600
- **Primary Light**: `oklch(0.623 0.214 259.13)` — Indigo 500 (dark mode)

### Semantic

| Role | Light | Dark |
|------|-------|------|
| Success | `emerald-500` (#10b981) | `emerald-400` |
| Warning | `amber-500` (#f59e0b) | `amber-400` |
| Error | `oklch(0.577 0.245 27.33)` (red-600) | `oklch(0.704 0.191 22.18)` |
| Info | Primary color | Primary color |

---

## Typography

**Font**: Inter (Google Fonts)  
**Scale**: Tailwind default type scale

| Style | Class | Size | Weight |
|-------|-------|------|--------|
| Display | `text-4xl font-bold` | 2.25rem | 700 |
| Heading 1 | `text-3xl font-semibold` | 1.875rem | 600 |
| Heading 2 | `text-2xl font-semibold` | 1.5rem | 600 |
| Heading 3 | `text-xl font-medium` | 1.25rem | 500 |
| Body | `text-base` | 1rem | 400 |
| Small | `text-sm` | 0.875rem | 400 |
| Caption | `text-xs` | 0.75rem | 400 |
| Label / Overline | `text-xs uppercase tracking-widest font-medium` | 0.75rem | 500 |

---

## Spacing & Layout

- **Base unit**: 4px (Tailwind default `spacing-1`)
- **Page padding**: `p-6` (24px)
- **Card padding**: `p-6` (24px) header, `p-6 pt-0` (24px, no top) content
- **Component gap**: `gap-4` (16px) or `gap-6` (24px)
- **Sidebar width**: 240px expanded, 64px collapsed

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, small chips |
| `--radius-md` | 6px | Inputs, small buttons |
| `--radius-lg` | 8px | Cards, dropdowns, modals |
| `--radius-xl` | 12px | Large cards, avatars |
| Full | `9999px` | Pills, avatar circles |

---

## Components

### Button

Variants: `default`, `secondary`, `outline`, `ghost`, `destructive`, `link`  
Sizes: `lg` (40px), `default` (36px), `sm` (32px), `icon` (36×36px)

### Card

Structure: `Card > CardHeader > CardTitle + CardDescription`, `Card > CardContent`, `Card > CardFooter`  
Style: `rounded-xl border shadow-sm`

### Badge

Variants: `default` (primary), `secondary`, `outline`, `destructive`, `success`, `warning`  
Shape: `rounded-full`

### Input / Label

Standard text inputs with `border-[var(--color-input)]` and focus ring.  
Always paired with `<Label>` for accessibility.

### Table

Built with `@tanstack/react-table`. Columns support sorting. Global filtering and pagination are included.

### Sidebar

Collapsible navigation with icon + label items. Active state uses primary color fill.

### Avatar

Radix UI Avatar with `AvatarFallback` for initials display.

### Switch

Radix UI Switch for boolean toggles.

### Select

Radix UI Select with custom styled trigger and content.

---

## Iconography

**Library**: [Lucide React](https://lucide.dev)  
**Size convention**: `w-4 h-4` (16px) in-line, `w-5 h-5` (20px) standalone icons

---

## Shadows

| Class | Usage |
|-------|-------|
| `shadow-sm` | Cards, inputs |
| `shadow-md` | Dropdowns, tooltips, hover states |
| `shadow-lg` | Modals, overlays |

---

## Animation

- Transitions: `transition-colors` (150ms), `transition-shadow` (150ms)
- Radix animations: `data-[state=open]:animate-in`, `data-[state=closed]:animate-out` with fade + zoom

---

## Architecture

```
src/
├── components/
│   ├── layout/          # AppLayout, Sidebar, Header
│   └── ui/              # Reusable UI primitives (shadcn-style)
├── data/                # Mock data / fixtures
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── pages/               # Page-level components
├── router.tsx           # TanStack Router configuration
├── stores/              # Zustand state stores
│   ├── useAuthStore.ts  # Auth state (login/logout)
│   └── useThemeStore.ts # Theme state (light/dark)
└── styles/
    └── theme.css        # Tailwind v4 @theme tokens (single source of truth)
```

---

## Routing

**TanStack Router** (code-based, not file-based).  
Route tree: `/login` (public) · `/` → `/dashboard`, `/projects`, `/data`, `/components` (auth-protected)

Auth guard in `AppLayout` redirects unauthenticated users to `/login`.

---

## State Management

**Zustand** with `persist` middleware (localStorage).

| Store | Key | Contents |
|-------|-----|----------|
| `useAuthStore` | `auth-storage` | user object, isAuthenticated |
| `useThemeStore` | `theme-storage` | current theme (light/dark) |

---

## Demo Credentials

```
Email:    demo@ai-ui.dev
Password: password  (any password works)
```
