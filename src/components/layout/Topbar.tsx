import type { ReactNode } from 'react'
import { Menu, Bell } from 'lucide-react'

interface TopbarProps {
  title?: string
  onMenuClick?: () => void
  notificationArea?: ReactNode
  profileArea?: ReactNode
}

function Topbar({ title, onMenuClick, notificationArea, profileArea }: TopbarProps) {
  return (
    <header className="flex min-h-16 items-center justify-between gap-4 border-b border-border bg-surface px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        {onMenuClick && <button type="button" aria-label="Open navigation" className="rounded-md p-2 text-text-secondary hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue lg:hidden" onClick={onMenuClick}><Menu aria-hidden="true" className="size-5" /></button>}
        {title && <p className="truncate text-sm font-semibold text-text-primary">{title}</p>}
      </div>
      <div className="flex items-center gap-2">
        {notificationArea || <button type="button" aria-label="Notifications" className="rounded-md p-2 text-text-secondary hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue"><Bell aria-hidden="true" className="size-5" /></button>}
        {profileArea}
      </div>
    </header>
  )
}

export default Topbar