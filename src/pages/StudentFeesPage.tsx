import { AlertCircle, CalendarDays, CheckCircle2, CreditCard, FileText, IndianRupee } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const payments = [
  { invoice: 'INV-2026-042', description: 'April academy fee', date: '05 Apr 2026', amount: '₹8,500', status: 'Paid', variant: 'success' as const },
  { invoice: 'INV-2026-031', description: 'March academy fee', date: '05 Mar 2026', amount: '₹8,500', status: 'Paid', variant: 'success' as const },
  { invoice: 'INV-2026-019', description: 'February academy fee', date: '06 Feb 2026', amount: '₹8,500', status: 'Paid', variant: 'success' as const },
]

function StudentFeesPage() {
  return (
    <AppShell navigationItems={roleNavigation.student.items} topbarTitle="Student / Parent">
      <PageHeader title="Fees" description="A clear view of your academy fee status." />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total due" value="₹8,500" change="For September 2026" trend="neutral" icon={IndianRupee} />
        <StatCard title="Amount paid" value="₹34,000" change="This academic year" trend="up" icon={CheckCircle2} />
        <StatCard title="Next due date" value="05 Sep 2026" change="16 days remaining" trend="neutral" icon={CalendarDays} />
        <StatCard title="Payment status" value="Due soon" change="No overdue balance" trend="neutral" icon={CreditCard} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Recent payments</h2><p className="mt-1 text-sm text-text-secondary">Your latest academy fee activity</p></div><CreditCard aria-hidden="true" className="size-5 text-profieldy-blue" /></div>
          <div className="mt-6 divide-y divide-border">
            {payments.map((payment) => (
              <div key={payment.invoice} className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-profieldy-blue-light text-profieldy-blue"><FileText aria-hidden="true" className="size-4" /></span><div className="min-w-0"><p className="truncate text-sm font-semibold text-text-primary">{payment.description}</p><p className="mt-1 text-xs text-text-secondary">{payment.invoice} · {payment.date}</p></div></div>
                <div className="flex items-center justify-between gap-4 sm:justify-end"><span className="text-sm font-semibold text-text-primary">{payment.amount}</span><Badge variant={payment.variant}>{payment.status}</Badge></div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-profieldy-blue/20 bg-profieldy-blue-light/50">
          <div className="flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-profieldy-blue"><AlertCircle aria-hidden="true" className="size-4" /></span><div><h2 className="font-semibold text-text-primary">Upcoming payment</h2><p className="mt-1 text-sm text-text-secondary">Your next academy fee reminder</p></div></div>
          <div className="mt-6"><p className="text-2xl font-bold text-text-primary">₹8,500</p><p className="mt-1 text-sm text-text-secondary">Due by 05 September 2026</p></div>
          <Button disabled className="mt-6 w-full" aria-label="Pay now unavailable in prototype mode">Pay now</Button>
          <p className="mt-3 text-center text-xs text-text-secondary">Payments are unavailable in prototype mode.</p>
        </Card>
      </div>

      <Card className="mt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold text-text-primary">Fee support</h2><p className="mt-1 text-sm text-text-secondary">Questions about an invoice? Please contact the academy office.</p></div><Badge variant="info">Prototype billing</Badge></div>
      </Card>
    </AppShell>
  )
}

export default StudentFeesPage
