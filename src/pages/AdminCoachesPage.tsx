import { CheckCircle2, GraduationCap, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const coaches = [
  { name: 'Maya Rao', specialty: 'Football performance', batches: 'U14 Development, U16 Performance', students: 32, status: 'Active', variant: 'success' as const },
  { name: 'Daniel Thomas', specialty: 'Technical football', batches: 'U14 Development, Junior Skills', students: 26, status: 'Active', variant: 'success' as const },
  { name: 'Anika Iyer', specialty: 'Swimming & conditioning', batches: 'Junior Swim, Senior Swim', students: 24, status: 'Active', variant: 'success' as const },
  { name: 'Rahul Menon', specialty: 'Athletic development', batches: 'Speed Fundamentals', students: 18, status: 'On leave', variant: 'warning' as const },
  { name: 'Sofia Fernandes', specialty: 'Basketball skills', batches: 'U16 Basketball', students: 21, status: 'Active', variant: 'success' as const },
]

function AdminCoachesPage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Coaches" description="A clear overview of the academy coaching team." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2"><StatCard title="Total coaches" value="18" change="Across 5 sports" trend="neutral" icon={GraduationCap} /><StatCard title="Active coaches" value="16" change="89% of coaching team" trend="up" icon={CheckCircle2} /></div>
      <Card className="mt-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Coaching team</h2><p className="mt-1 text-sm text-text-secondary">Static staff roster preview</p></div><Users aria-hidden="true" className="size-5 text-profieldy-blue" /></div><div className="mt-6 overflow-x-auto"><table className="w-full min-w-180 border-collapse text-left"><caption className="sr-only">Academy coaching team</caption><thead><tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted"><th scope="col" className="pb-3 pr-4 font-medium">Coach</th><th scope="col" className="pb-3 pr-4 font-medium">Specialization</th><th scope="col" className="pb-3 pr-4 font-medium">Assigned batches</th><th scope="col" className="pb-3 pr-4 font-medium">Students</th><th scope="col" className="pb-3 font-medium">Status</th></tr></thead><tbody className="divide-y divide-border">{coaches.map((coach) => <tr key={coach.name}><th scope="row" className="py-4 pr-4 font-normal"><div className="flex items-center gap-3"><Avatar name={coach.name} size="sm" status={coach.status === 'Active' ? 'online' : 'away'} /><span className="text-sm font-semibold text-text-primary">{coach.name}</span></div></th><td className="py-4 pr-4 text-sm text-text-secondary">{coach.specialty}</td><td className="max-w-64 py-4 pr-4 text-sm leading-5 text-text-secondary">{coach.batches}</td><td className="py-4 pr-4 text-sm font-semibold tabular-nums text-text-primary">{coach.students}</td><td className="py-4"><Badge variant={coach.variant}>{coach.status}</Badge></td></tr>)}</tbody></table></div><p className="mt-4 text-xs text-text-secondary">Coach details and staff management actions are unavailable in prototype mode.</p></Card>
    </AppShell>
  )
}

export default AdminCoachesPage
