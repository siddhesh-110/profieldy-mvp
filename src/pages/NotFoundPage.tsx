import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-profieldy-blue">
          PROFIELDY
        </p>

        <h1 className="mt-3 text-4xl font-bold text-text-primary">
          Page not found
        </h1>

        <p className="mt-3 text-text-secondary">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-profieldy-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-profieldy-blue-dark"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage