import React from 'react'
import Footer from './Components/Common/Footer/Footer'
import Navbar from './Components/Common/Navbar/Navbar'
import Screenloader from './Components/Common/ScreenLoader/Screenloader'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout