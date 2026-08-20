import { CalendarDays, Mail, MapPin, Phone, Trophy, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const academyDetails = [
  { label: 'Academy type', value: 'Multi-sport performance academy', icon: Trophy },
  { label: 'Location', value: 'Bengaluru, Karnataka', icon: MapPin },
  { label: 'Established', value: 'September 2016', icon: CalendarDays },
]

function AdminAcademyPage() {
  return (
    <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner">
      <PageHeader title="Academy" description="Your academy profile and operating snapshot." action={<Badge variant="success">Active academy</Badge>} />

      <Card className="mt-6 overflow-hidden p-0">
        <div className="bg-profieldy-blue px-5 py-7 text-white sm:px-8"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-wide text-blue-100">Academy profile</p><h2 className="mt-2 text-2xl font-bold">Northstar Academy</h2><p className="mt-2 text-sm text-blue-100">A focused home for confident, capable athletes.</p></div><span className="flex size-14 items-center justify-center rounded-lg bg-white/15"><Trophy aria-hidden="true" className="size-7" /></span></div></div>
        <div className="grid gap-5 p-5 sm:grid-cols-3 sm:p-8">{academyDetails.map(({ label, value, icon: Icon }) => <div key={label}><Icon aria-hidden="true" className="size-4 text-profieldy-pink" /><p className="mt-3 text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p><p className="mt-1 text-sm font-semibold text-text-primary">{value}</p></div>)}</div>
      </Card>

      <div className="mt-6 grid gap-4 sm:grid-cols-3"><StatCard title="Total students" value="248" change="Across 12 active programs" trend="up" icon={Users} /><StatCard title="Total coaches" value="18" change="Across 5 sports" trend="neutral" icon={Trophy} /><StatCard title="Batches / programs" value="12" change="3 new this season" trend="up" icon={CalendarDays} /></div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.75fr]"><Card><h2 className="font-semibold text-text-primary">About Northstar</h2><p className="mt-1 text-sm text-text-secondary">Our academy overview</p><p className="mt-5 text-sm leading-7 text-text-secondary">Northstar Academy helps young athletes build strong fundamentals, resilient habits, and a lifelong love of sport. Our coaching teams combine structured training with individual attention across football, basketball, swimming, and athletic development.</p></Card><Card><h2 className="font-semibold text-text-primary">Contact information</h2><p className="mt-1 text-sm text-text-secondary">Academy office details</p><div className="mt-5 space-y-4"><p className="flex items-center gap-3 text-sm text-text-secondary"><Mail aria-hidden="true" className="size-4 text-profieldy-blue" /> hello@northstar.example</p><p className="flex items-center gap-3 text-sm text-text-secondary"><Phone aria-hidden="true" className="size-4 text-profieldy-blue" /> +91 80 4567 8900</p><p className="flex items-start gap-3 text-sm leading-6 text-text-secondary"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-profieldy-blue" /> 14 Orion Park, Indiranagar, Bengaluru</p></div></Card></div>
    </AppShell>
  )
}

export default AdminAcademyPage
