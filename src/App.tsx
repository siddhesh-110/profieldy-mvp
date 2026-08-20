import { LayoutDashboard } from 'lucide-react'
import AppShell from './components/layout/AppShell'
import type { NavigationItem } from './components/layout/Sidebar'
import PageHeader from './components/ui/PageHeader'
import Card from './components/ui/Card'

const foundationNavigation: NavigationItem[] = [
  { label: 'Overview', href: '/', icon: LayoutDashboard },
]

function App() {
  return (
    <AppShell navigationItems={foundationNavigation} topbarTitle="Foundation">
      <PageHeader title="PROFIELDY foundation" description="Reusable interface components for the sports academy platform." />
      <Card className="mt-6">
        <p className="text-sm text-text-secondary">The design system foundation is ready for feature modules.</p>
      </Card>
    </AppShell>
  )
}

export default App