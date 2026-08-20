import { AlertCircle, CalendarDays, CheckCircle2, Clock3, MapPin, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const attendanceEntries = [
  { name: 'Riya Sharma', status: 'Present', variant: 'success' as const, note: 'Arrived prepared' },
  { name: 'Arjun Mehta', status: 'Present', variant: 'success' as const, note: '' },
  { name: 'Kabir Singh', status: 'Late', variant: 'warning' as const, note: 'Arrived 12 minutes late' },
  { name: 'Meera Patel', status: 'Absent', variant: 'danger' as const, note: 'Parent notified' },
  { name: 'Aanya Nair', status: 'Present', variant: 'success' as const, note: '' },
  { name: 'Vihaan Shah', status: 'Present', variant: 'success' as const, note: '' },
]

function CoachAttendancePage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Attendance" description="Review attendance for a selected training session." action={<Button disabled variant="outline" aria-label="Mark attendance unavailable in prototype mode">Mark attendance</Button>} />

      <Card className="mt-6 border-profieldy-blue/20 bg-profieldy-blue-light/50">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-wide text-profieldy-blue">Selected session</p><h2 className="mt-2 text-xl font-bold text-text-primary">Junior performance group</h2><div className="mt-4 grid gap-3 text-sm text-text-secondary sm:grid-cols-2"><span className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4 text-profieldy-blue" /> Thursday, 20 August 2026</span><span className="flex items-center gap-2"><Clock3 aria-hidden="true" className="size-4 text-profieldy-blue" /> 4:30 PM - 6:00 PM</span><span className="flex items-center gap-2"><Users aria-hidden="true" className="size-4 text-profieldy-blue" /> U16 performance · Maya Rao</span><span className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-profieldy-blue" /> Northstar Arena · Court 1</span></div></div><div className="rounded-md bg-white px-5 py-4 shadow-sm"><p className="text-xs font-medium uppercase tracking-wide text-text-muted">Overall attendance</p><p className="mt-2 text-2xl font-bold text-profieldy-blue">83%</p><p className="mt-1 text-xs text-text-secondary">5 of 6 present or late</p></div></div>
      </Card>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Total students" value="6" change="Selected group" trend="neutral" icon={Users} /><StatCard title="Present" value="4" change="67% of group" trend="up" icon={CheckCircle2} /><StatCard title="Late" value="1" change="12 minutes late" trend="neutral" icon={Clock3} /><StatCard title="Absent" value="1" change="Parent notified" trend="down" icon={AlertCircle} /></div>

      <Card className="mt-6">
        <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Student attendance</h2><p className="mt-1 text-sm text-text-secondary">Read-only attendance recorded for this session.</p></div><Badge variant="neutral">Prototype record</Badge></div>
        <div className="mt-6 divide-y divide-border">{attendanceEntries.map((entry) => <div key={entry.name} className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center"><Avatar name={entry.name} size="md" /><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-text-primary">{entry.name}</p><p className="mt-1 text-xs text-text-secondary">{entry.note || 'No note recorded'}</p></div><Badge variant={entry.variant} className="w-fit">{entry.status}</Badge></div>)}</div>
      </Card>

      <p className="mt-4 text-center text-xs text-text-secondary">Attendance editing and submission are unavailable in prototype mode.</p>
    </AppShell>
  )
}

export default CoachAttendancePage
