import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Queue } from './pages/Queue/Queue'
import { Admin } from './pages/Admin/Admin'
import { ViewAll } from './pages/ViewAll/ViewAll'
import AdminLogin from './pages/Admin/Login'
import { Auth } from './pages/Home/Auth'
import { Signup } from './pages/Home/Signup'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/viewAll" element={<ViewAll />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}
