import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import '@/styles/index.css'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl lg:px-8">{children}</div>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
