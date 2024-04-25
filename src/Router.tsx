import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ViewAll from './pages/ViewAll/ViewAll'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewAll" element={<ViewAll />} />
      </Routes>
    </>
  )
}
