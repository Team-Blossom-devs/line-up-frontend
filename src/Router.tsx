import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Admin } from './pages/Admin/Admin'
import ViewAll from './pages/ViewAll/ViewAll'
import AdminLogin from './pages/Admin/Login'
import { WaitingFunnel } from "./pages/Waiting/WaitingFunnel"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitings" element={<WaitingFunnel />} />
        <Route path="/waiting/:id" element={<WaitingFunnel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/viewAll" element={<ViewAll />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  )
}
