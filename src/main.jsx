import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { themeChange } from 'theme-change'
import './index.css'

// Layout and Pages
import Layout from './Layout'
import LandingPage from './Pages/LandingPage'
import About from './Pages/About/About'
import Team from './Pages/Team/Team'
import NotFound from './Pages/NotFound/NotFound' 

// Initialize theme-change on first load
themeChange()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='team' element={<Team />} />
          {/* Add more routes here */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
