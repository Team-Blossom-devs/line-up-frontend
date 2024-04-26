import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Queue } from "./pages/Queue/Queue"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </>
  )
}
