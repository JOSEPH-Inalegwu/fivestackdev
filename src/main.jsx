import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { themeChange } from 'theme-change'
import './index.css'

// Layout and Pages
import Layout from './Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import FAQ from './Pages/FAQ/FAQ'
import NotFound from './Pages/NotFound/NotFound' 

// Initialize theme-change on first load
themeChange()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<FAQ />} />
          {/* Add more routes here */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
