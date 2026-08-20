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
import StudentProfilePage from '../pages/StudentProfilePage'
import StudentPerformancePage from '../pages/StudentPerformancePage'
import StudentReportsPage from '../pages/StudentReportsPage'
import StudentFeesPage from '../pages/StudentFeesPage'
import StudentSchedulePage from '../pages/StudentSchedulePage'
import StudentCommunityPage from '../pages/StudentCommunityPage'
import CoachProfilePage from '../pages/CoachProfilePage'
import CoachStudentsPage from '../pages/CoachStudentsPage'
import CoachAttendancePage from '../pages/CoachAttendancePage'
import CoachPerformancePage from '../pages/CoachPerformancePage'
import CoachReportsPage from '../pages/CoachReportsPage'
import CoachSchedulePage from '../pages/CoachSchedulePage'
import CoachCommunityPage from '../pages/CoachCommunityPage'
import AdminAcademyPage from '../pages/AdminAcademyPage'
import AdminStudentsPage from '../pages/AdminStudentsPage'
import AdminCoachesPage from '../pages/AdminCoachesPage'
import AdminAttendancePage from '../pages/AdminAttendancePage'
import AdminPerformancePage from '../pages/AdminPerformancePage'
import AdminReportsPage from '../pages/AdminReportsPage'

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
        <Route path="/student/profile" element={<StudentProfilePage />} />
        <Route path="/student/performance" element={<StudentPerformancePage />} />
        <Route path="/student/reports" element={<StudentReportsPage />} />
        <Route path="/student/fees" element={<StudentFeesPage />} />
        <Route path="/student/schedule" element={<StudentSchedulePage />} />
        <Route path="/student/community" element={<StudentCommunityPage />} />
        <Route path="/coach" element={<CoachDashboardPage />} />
        <Route path="/coach/profile" element={<CoachProfilePage />} />
        <Route path="/coach/students" element={<CoachStudentsPage />} />
        <Route path="/coach/attendance" element={<CoachAttendancePage />} />
        <Route path="/coach/performance" element={<CoachPerformancePage />} />
        <Route path="/coach/reports" element={<CoachReportsPage />} />
        <Route path="/coach/schedule" element={<CoachSchedulePage />} />
        <Route path="/coach/community" element={<CoachCommunityPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/academy" element={<AdminAcademyPage />} />
        <Route path="/admin/students" element={<AdminStudentsPage />} />
        <Route path="/admin/coaches" element={<AdminCoachesPage />} />
        <Route path="/admin/attendance" element={<AdminAttendancePage />} />
        <Route path="/admin/performance" element={<AdminPerformancePage />} />
        <Route path="/admin/reports" element={<AdminReportsPage />} />
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