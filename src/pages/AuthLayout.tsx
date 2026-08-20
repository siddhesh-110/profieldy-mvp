import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'

interface AuthLayoutProps {
  children: ReactNode
  eyebrow?: string
  title?: string
  description?: string
}

function AuthLayout({ children, eyebrow, title, description }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="hidden lg:block">
          <Link to="/" className="text-lg font-bold tracking-tight text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-profieldy-blue">PROFIELDY</Link>
          <div className="mt-16 max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-profieldy-pink">Train with purpose</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-text-primary">One clear view of every academy journey.</h1>
            <p className="mt-5 text-base leading-7 text-text-secondary">A focused workspace for students, coaches, and academy owners to stay aligned.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <Link to="/" className="text-lg font-bold tracking-tight text-profieldy-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-profieldy-blue">PROFIELDY</Link>
            <Badge variant="info">Prototype mode</Badge>
          </div>
          <div className="mb-6 hidden justify-end lg:flex"><Badge variant="info">Prototype mode</Badge></div>
          {eyebrow && <p className="text-sm font-semibold text-profieldy-blue">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-primary">{title}</h2>}
          {description && <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>}
          <div className="mt-6">{children}</div>
        </section>
      </div>
    </main>
  )
}

export default AuthLayout
