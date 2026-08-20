import { CalendarDays, Dumbbell, Mail, MapPin, Phone, ShieldCheck, Target } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const profileDetails = [
  { label: 'Age group', value: 'U16', icon: CalendarDays },
  { label: 'Preferred position', value: 'Attacking midfielder', icon: Dumbbell },
  { label: 'Joined academy', value: '12 September 2023', icon: CalendarDays },
]

const contactDetails = [
  { label: 'Parent / guardian', value: 'Priya Mehta', detail: 'priya.mehta@example.com', icon: Mail },
  { label: 'Emergency contact', value: 'Raj Mehta', detail: '+91 98765 43210', icon: Phone },
]

const focusAreas = ['First touch', 'Explosive speed', 'Decision making']

function StudentProfilePage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader title="Student profile" description="Your identity and academy information." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden p-0">
          <div className="bg-profieldy-blue px-5 py-6 text-white sm:px-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Avatar name="Arjun Mehta" size="lg" className="bg-white text-profieldy-blue" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold">Arjun Mehta</h2>
                  <Badge variant="success" className="bg-white/90">Active member</Badge>
                </div>
                <p className="mt-2 text-sm text-blue-100">Football · Northstar Academy</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-blue-100">
                  <MapPin aria-hidden="true" className="size-4" /> Bengaluru, India
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-3 sm:p-8">
            {profileDetails.map(({ label, value, icon: Icon }) => (
              <div key={label}>
                <Icon aria-hidden="true" className="size-4 text-profieldy-pink" />
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">{value}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-semibold text-text-primary">Training focus</h2>
              <p className="mt-1 text-sm text-text-secondary">Current areas for development</p>
            </div>
            <Target aria-hidden="true" className="size-5 text-profieldy-pink" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => <Badge key={area} variant="info">{area}</Badge>)}
          </div>
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm font-semibold text-text-primary">Membership</p>
            <div className="mt-3 flex items-center gap-3">
              <ShieldCheck aria-hidden="true" className="size-5 text-success" />
              <div><p className="text-sm font-medium text-text-primary">Academy member</p><p className="mt-1 text-xs text-text-secondary">Renewal due 12 September 2026</p></div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <div>
          <h2 className="font-semibold text-text-primary">Contact details</h2>
          <p className="mt-1 text-sm text-text-secondary">For academy communication and support.</p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {contactDetails.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-blue-light text-profieldy-blue"><Icon aria-hidden="true" className="size-4" /></span>
              <div><p className="text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p><p className="mt-1 text-sm font-semibold text-text-primary">{value}</p><p className="mt-1 text-sm text-text-secondary">{detail}</p></div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  )
}

export default StudentProfilePage
