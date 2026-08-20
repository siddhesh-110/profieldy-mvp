import { AlertCircle, CheckCircle2, CreditCard, IndianRupee, Users } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import { roleNavigation } from '../app/navigation'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'

const feeRows = [
  { name: 'Arjun Mehta', batch: 'U16 Football', amount: '₹8,500', status: 'Paid', variant: 'success' as const, date: '05 Aug 2026' },
  { name: 'Riya Sharma', batch: 'U16 Football', amount: '₹8,500', status: 'Paid', variant: 'success' as const, date: '05 Aug 2026' },
  { name: 'Kabir Singh', batch: 'U14 Football', amount: '₹7,500', status: 'Pending', variant: 'warning' as const, date: 'Due 25 Aug 2026' },
  { name: 'Meera Patel', batch: 'U16 Football', amount: '₹8,500', status: 'Overdue', variant: 'danger' as const, date: 'Due 05 Aug 2026' },
  { name: 'Aanya Nair', batch: 'U14 Football', amount: '₹7,500', status: 'Paid', variant: 'success' as const, date: '04 Aug 2026' },
]

function AdminFeesPage() {
  return <AppShell navigationItems={roleNavigation.admin.items} topbarTitle="Admin / Owner"><PageHeader title="Fees" description="Academy-wide collection and outstanding fee overview." /><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard title="Collected this month" value="₹18.4L" change="+12% from July" trend="up" icon={IndianRupee} /><StatCard title="Pending dues" value="₹2.8L" change="34 invoices pending" trend="neutral" icon={CreditCard} /><StatCard title="Overdue count" value="12" change="Needs follow-up" trend="down" icon={AlertCircle} /><StatCard title="Collection rate" value="86%" change="+4% this month" trend="up" icon={CheckCircle2} /></div><Card className="mt-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-text-primary">Recent fee activity</h2><p className="mt-1 text-sm text-text-secondary">Static academy payment overview</p></div><Users aria-hidden="true" className="size-5 text-profieldy-blue" /></div><div className="mt-6 overflow-x-auto"><table className="w-full min-w-180 border-collapse text-left"><caption className="sr-only">Recent academy fee activity</caption><thead><tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted"><th scope="col" className="pb-3 pr-4 font-medium">Student</th><th scope="col" className="pb-3 pr-4 font-medium">Batch</th><th scope="col" className="pb-3 pr-4 font-medium">Amount</th><th scope="col" className="pb-3 pr-4 font-medium">Status</th><th scope="col" className="pb-3 font-medium">Date</th></tr></thead><tbody className="divide-y divide-border">{feeRows.map((row) => <tr key={row.name}><th scope="row" className="py-4 pr-4 font-normal"><div className="flex items-center gap-3"><Avatar name={row.name} size="sm" /><span className="text-sm font-semibold text-text-primary">{row.name}</span></div></th><td className="py-4 pr-4 text-sm text-text-secondary">{row.batch}</td><td className="py-4 pr-4 text-sm font-semibold text-text-primary">{row.amount}</td><td className="py-4 pr-4"><Badge variant={row.variant}>{row.status}</Badge></td><td className="py-4 text-sm text-text-secondary">{row.date}</td></tr>)}</tbody></table></div></Card></AppShell>
}

export default AdminFeesPage
