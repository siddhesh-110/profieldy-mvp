import { Construction } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { roleNavigation, type UserRole } from '../app/navigation'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/ui/PageHeader'
import EmptyState from '../components/ui/EmptyState'

interface RoleRoutePageProps {
  role: UserRole
  sectionTitle: string
}

function RoleRoutePage({ role, sectionTitle }: RoleRoutePageProps) {
  const location = useLocation()
  const roleDetails = roleNavigation[role]

  return (
    <AppShell navigationItems={roleDetails.items} topbarTitle={roleDetails.label}>
      <PageHeader title={sectionTitle} description={`${roleDetails.label} workspace`} />
      <div className="mt-6 rounded-lg border border-border bg-surface">
        <EmptyState
          icon={Construction}
          title="Coming soon"
          description={`${sectionTitle} for the ${roleDetails.label} role will be available in a future phase.`}
        />
      </div>
      <p className="sr-only">Current route: {location.pathname}</p>
    </AppShell>
  )
}

export default RoleRoutePage
