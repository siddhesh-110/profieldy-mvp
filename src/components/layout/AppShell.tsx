import type { ReactNode } from 'react'
import { useState } from 'react'
import PageContainer from './PageContainer'
import Sidebar, { type NavigationItem } from './Sidebar'
import Topbar from './Topbar'

interface AppShellProps {
  children: ReactNode
  navigationItems: NavigationItem[]
  topbarTitle?: string
  notificationArea?: ReactNode
  profileArea?: ReactNode
}

function AppShell({ children, navigationItems, topbarTitle, notificationArea, profileArea }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={navigationItems} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={topbarTitle} onMenuClick={() => setSidebarOpen(true)} notificationArea={notificationArea} profileArea={profileArea} />
        <main className="flex-1"><PageContainer>{children}</PageContainer></main>
      </div>
    </div>
  )
}

export default AppShell