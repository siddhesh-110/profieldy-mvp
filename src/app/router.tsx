import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { roleNavigation, type UserRole } from './navigation'
import NotFoundPage from '../pages/NotFoundPage'
import RoleRoutePage from '../pages/RoleRoutePage'

const roleRoutes: Array<{ role: UserRole; basePath: string }> = [
  { role: 'student', basePath: '/student' },
  { role: 'coach', basePath: '/coach' },
  { role: 'admin', basePath: '/admin' },
]

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {roleRoutes.map(({ role, basePath }) => (
          <Route key={role} path={basePath} element={<RoleRoutePage role={role} sectionTitle="Overview" />} />
        ))}
        {roleRoutes.flatMap(({ role }) =>
          roleNavigation[role].items.slice(1).map((item) => (
            <Route key={item.href} path={item.href} element={<RoleRoutePage role={role} sectionTitle={item.label} />} />
          )),
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}