import type { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export interface NavigationItem {
  label: string
  href: string
  icon?: LucideIcon
}

interface SidebarProps {
  items: NavigationItem[]
  open?: boolean
  onClose?: () => void
  brand?: string
}

function Sidebar({ items, open = true, onClose, brand = 'PROFIELDY' }: SidebarProps) {
  const location = useLocation()

  return (
    <>
      {open && onClose && <button type="button" aria-label="Close navigation" className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-surface transition-transform lg:static lg:z-auto lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center border-b border-border px-6">
          <span className="text-lg font-bold tracking-tight text-profieldy-blue">{brand}</span>
        </div>
        <nav aria-label="Primary navigation" className="flex-1 space-y-1 overflow-y-auto p-4">
          {items.map(({ label, href, icon: Icon }) => {
            const active = location.pathname === href || (href !== '/' && location.pathname.startsWith(`${href}/`))
            return (
              <Link key={href} to={href} onClick={onClose} className={`flex min-h-10 items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue ${active ? 'bg-profieldy-blue-light text-profieldy-blue' : 'text-text-secondary hover:bg-background hover:text-text-primary'}`} aria-current={active ? 'page' : undefined}>
                {Icon && <Icon aria-hidden="true" className="size-4" />}
                {label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar