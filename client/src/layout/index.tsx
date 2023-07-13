import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Toaster } from 'react-hot-toast'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <Outlet />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  )
}
