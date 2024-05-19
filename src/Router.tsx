import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { ViewAll } from './pages/ViewAll/ViewAll'
import { WaitingFunnel } from "./pages/Waiting/WaitingFunnel"
import { Auth } from './pages/Home/Auth'
import { Signup } from './pages/Home/Signup'
import { AdminFunnel } from "./pages/Admin/AdminFunnel"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiting/:id" element={<WaitingFunnel />} />
        <Route path="/viewAll" element={<ViewAll />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/admin" element={<AdminFunnel />} />
        <Route path="/admin/login" element={<AdminFunnel />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}
