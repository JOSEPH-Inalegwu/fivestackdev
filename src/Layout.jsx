import React, { useEffect, useState } from 'react'
import Footer from './Components/Common/Footer/Footer'
import Navbar from './Components/Common/Navbar/Navbar'
import Screenloader from './Components/Common/ScreenLoader/Screenloader'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Delay for loader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) 

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Screenloader />

  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
