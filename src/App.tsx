import { Link } from 'react-router-dom'
import { roleNavigation, type UserRole } from './app/navigation'

function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold tracking-wide text-profieldy-blue">PROFIELDY</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Choose a prototype workspace</h1>
        <p className="mt-3 max-w-2xl text-text-secondary">Explore the navigation structure for each PROFIELDY role.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {(Object.entries(roleNavigation) as [UserRole, (typeof roleNavigation)[UserRole]][]).map(([role, details]) => (
            <Link key={role} to={details.items[0].href} className="rounded-lg border border-border bg-surface p-5 shadow-sm transition hover:border-profieldy-blue hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profieldy-blue">
              <h2 className="font-semibold text-text-primary">{details.label}</h2>
              <p className="mt-2 text-sm text-text-secondary">{details.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-profieldy-blue">Open workspace</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App