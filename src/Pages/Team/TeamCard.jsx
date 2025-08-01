import React from 'react'
import { toast } from 'react-toastify'
import ProfileCard from '../../Components/Reactbits/ProfileCard/ProfileCard'

const TeamCard = ({ name, title, handle, status, avatarUrl, contactText, portfolioUrl }) => {
  return (
    <div className="p-4">
      <ProfileCard
        name={name}
        title={title}
        handle={handle}
        status={status}
        avatarUrl={avatarUrl}
        contactText={contactText || 'About Me'}
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => {
          if (portfolioUrl) {
            window.open(portfolioUrl, '_blank')
          } else {
            toast.error('Portfolio link not available')
          }
        }}
      />
    </div>
  )
}

export default TeamCard