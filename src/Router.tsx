import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Queue } from "./pages/Queue/Queue"
import { Admin } from "./pages/Admin/Admin"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}
