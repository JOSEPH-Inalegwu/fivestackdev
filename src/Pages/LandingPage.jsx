import React from 'react'
import Home from './Home/Home'
import FAQ from './FAQ/FAQ'

const LandingPage = () => {
  return (
    <div>
        <Home />
        <FAQ />
        {/* Ferdinand, these are landing page components (Home, Features, FAQ etc) that stay on the homepage and don’t have their own navbar links */}
    </div>
  )
}

export default LandingPage