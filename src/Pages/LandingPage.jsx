import React from 'react'
import Home from './Home/Home'
import Team from './Team/Team'
import FAQ from './FAQ/FAQ'

const LandingPage = () => {
  return (
    <div>
        <Home />
        <Team showTeamValues = {false} /> {/* ❌ Don’t show values here */}
        <FAQ />
        
        {/* Ferdinand, these are landing page components (Home, Features, FAQ etc) that stay on the homepage and don’t have their own navbar links */}
    </div>
  )
}

export default LandingPage