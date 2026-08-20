import { CalendarDays, Clock3, MapPin, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const days = [
  { day: 'Monday', date: '24 Aug', sessions: [{ time: '4:30 PM', group: 'U14 Football Development', coach: 'Daniel Thomas', venue: 'Court 1', athletes: 26 }, { time: '6:00 PM', group: 'Junior Swimming', coach: 'Anika Iyer', venue: 'Aquatic Centre', athletes: 24 }] },
  { day: 'Tuesday', date: '25 Aug', sessions: [{ time: '5:00 PM', group: 'U16 Basketball', coach: 'Sofia Fernandes', venue: 'Main Court', athletes: 21 }] },
  { day: 'Wednesday', date: '26 Aug', sessions: [{ time: '4:30 PM', group: 'Speed Fundamentals', coach: 'Rahul Menon', venue: 'Track Studio', athletes: 18 }] },
  { day: 'Thursday', date: '27 Aug', sessions: [{ time: '4:30 PM', group: 'U16 Football Performance', coach: 'Maya Rao', venue: 'Main Pitch', athletes: 32 }] },
]

function AdminSchedulePage() {
  return <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner"><PageHeader title="Schedule" description="Academy-wide sessions and venue plan." /><Card className="mt-6 border-profieldy-blue/20 bg-profieldy-blue-light/50"><div className="flex items-start gap-3"><CalendarDays aria-hidden="true" className="mt-0.5 size-5 text-profieldy-blue" /><div><p className="text-xs font-semibold uppercase tracking-wide text-profieldy-blue">Week overview</p><h2 className="mt-2 text-xl font-bold text-text-primary">24 - 30 August 2026</h2><p className="mt-2 text-sm text-text-secondary">12 sessions · 121 athletes scheduled across 5 venues</p></div></div></Card><div className="mt-6 space-y-4">{days.map((day) => <Card key={day.day}><div className="flex flex-col gap-4 sm:flex-row sm:items-start"><div className="w-28 shrink-0"><p className="text-sm font-bold text-text-primary">{day.day}</p><p className="mt-1 text-xs text-text-secondary">{day.date}</p></div><div className="flex-1 divide-y divide-border">{day.sessions.map((session) => <div key={`${day.day}-${session.group}`} className="flex flex-col gap-3 py-1 first:pt-0 last:pb-0 sm:flex-row sm:items-center"><div className="flex items-center gap-2 text-sm font-semibold text-text-primary sm:w-28"><Clock3 aria-hidden="true" className="size-4 text-profieldy-blue" /> {session.time}</div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-text-primary">{session.group}</p><div className="mt-1 flex flex-col gap-1 text-xs text-text-secondary sm:flex-row sm:gap-4"><span>{session.coach}</span><span className="flex items-center gap-1"><MapPin aria-hidden="true" className="size-3.5" /> {session.venue}</span><span className="flex items-center gap-1"><Users aria-hidden="true" className="size-3.5" /> {session.athletes} athletes</span></div></div><Badge variant="info">Scheduled</Badge></div>)}</div></div></Card>)}</div><p className="mt-4 text-center text-xs text-text-secondary">Calendar editing and session management are unavailable in prototype mode.</p></AppShell>
}

export default AdminSchedulePage
