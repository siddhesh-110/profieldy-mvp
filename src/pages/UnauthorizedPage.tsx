import { ShieldX } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import Card from '../components/ui/Card'

function UnauthorizedPage() {
  return (
    <AuthLayout eyebrow="Access check" title="You do not have access to this page" description="Choose a prototype role from the login screen to continue exploring PROFIELDY.">
      <Card className="p-6 text-center sm:p-7">
        <ShieldX aria-hidden="true" className="mx-auto size-10 text-warning" />
        <p className="mt-4 text-sm leading-6 text-text-secondary">This is a prototype-only access message. No permissions or protected routes are active yet.</p>
        <Link to="/login" className="mt-6 inline-flex min-h-10 items-center justify-center rounded-md bg-profieldy-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-profieldy-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">Back to login</Link>
      </Card>
    </AuthLayout>
  )
}

export default UnauthorizedPage
