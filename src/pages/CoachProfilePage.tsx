import { Award, CheckCircle2, Mail, Phone, Target, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const profileDetails = [
  { label: 'Specialty', value: 'Football performance', icon: Target },
  { label: 'Experience', value: '8 years coaching', icon: Award },
  { label: 'Academy', value: 'Northstar Academy', icon: Users },
]

const coachingDetails = [
  { label: 'Qualifications', value: 'AIFF C Licence · UEFA Fitness Diploma' },
  { label: 'Primary training groups', value: 'U14 development · U16 performance' },
  { label: 'Available coaching days', value: 'Monday, Tuesday, Thursday, Saturday' },
]

function CoachProfilePage() {
  return (
    <AppShell navigationItems={roleNavigation.coach.items} topbarTitle="Coach">
      <PageHeader title="Coach profile" description="Your coaching identity and academy information." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden p-0">
          <div className="bg-profieldy-blue px-5 py-6 text-white sm:px-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Avatar name="Maya Rao" size="lg" status="online" className="bg-white text-profieldy-blue" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-bold">Maya Rao</h2><Badge variant="success" className="bg-white/90">Active coach</Badge></div>
                <p className="mt-2 text-sm text-blue-100">Football performance coach · Northstar Academy</p>
                <p className="mt-3 text-xs text-blue-100">Coaching since 2018 · Bengaluru, India</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-3 sm:p-8">
            {profileDetails.map(({ label, value, icon: Icon }) => <div key={label}><Icon aria-hidden="true" className="size-4 text-profieldy-pink" /><p className="mt-3 text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p><p className="mt-1 text-sm font-semibold text-text-primary">{value}</p></div>)}
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Coaching philosophy</h2><p className="mt-1 text-sm text-text-secondary">Current focus with athletes</p></div><Target aria-hidden="true" className="size-5 text-profieldy-pink" /></div>
          <p className="mt-6 text-sm leading-6 text-text-secondary">Build confident athletes through purposeful repetition, clear feedback, and an environment where every player can make good decisions.</p>
          <div className="mt-6 flex flex-wrap gap-2"><Badge variant="info">Decision making</Badge><Badge variant="info">Player confidence</Badge><Badge variant="info">Movement quality</Badge></div>
          <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs text-text-secondary"><CheckCircle2 aria-hidden="true" className="size-4 text-success" /> Profile active for the 2026 season</div>
        </Card>
      </div>

      <Card className="mt-6">
        <div><h2 className="font-semibold text-text-primary">Coaching details</h2><p className="mt-1 text-sm text-text-secondary">Read-only academy information.</p></div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">{coachingDetails.map(({ label, value }) => <div key={label}><p className="text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p><p className="mt-2 text-sm font-semibold leading-6 text-text-primary">{value}</p></div>)}</div>
      </Card>

      <Card className="mt-6">
        <div><h2 className="font-semibold text-text-primary">Contact details</h2><p className="mt-1 text-sm text-text-secondary">Academy contact information.</p></div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2"><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-md bg-profieldy-blue-light text-profieldy-blue"><Mail aria-hidden="true" className="size-4" /></span><div><p className="text-xs font-medium uppercase tracking-wide text-text-muted">Email</p><p className="mt-1 text-sm font-semibold text-text-primary">maya.rao@northstar.example</p></div></div><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-md bg-profieldy-blue-light text-profieldy-blue"><Phone aria-hidden="true" className="size-4" /></span><div><p className="text-xs font-medium uppercase tracking-wide text-text-muted">Phone</p><p className="mt-1 text-sm font-semibold text-text-primary">+91 98765 12345</p></div></div></div>
      </Card>
    </AppShell>
  )
}

export default CoachProfilePage
