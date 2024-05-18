import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Admin } from './pages/Admin/Admin'
import { ViewAll } from './pages/ViewAll/ViewAll'
import AdminLogin from './pages/Admin/Login'
import { WaitingFunnel } from "./pages/Waiting/WaitingFunnel"
import { Auth } from './pages/Home/Auth'
import { Signup } from './pages/Home/Signup'
import WaitingList from "./pages/Waiting/WaitingList"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitings" element={<WaitingList />} />
        <Route path="/waiting/:id" element={<WaitingFunnel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/viewAll" element={<ViewAll />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}
