import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { roleNavigation, type UserRole } from './navigation'
import NotFoundPage from '../pages/NotFoundPage'
import RoleRoutePage from '../pages/RoleRoutePage'
import StudentDashboardPage from '../pages/StudentDashboardPage'
import CoachDashboardPage from '../pages/CoachDashboardPage'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import LoginPage from '../pages/LoginPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import UnauthorizedPage from '../pages/UnauthorizedPage'

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/student" element={<StudentDashboardPage />} />
        <Route path="/coach" element={<CoachDashboardPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
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