import React from 'react'
import ProfileCard from '../../Components/Reactbits/ProfileCard/ProfileCard'

const TeamCard = ({ name, title, handle, status, avatarUrl, contactText }) => {
  return (
    <div className="p-4">
      <ProfileCard
        name={name}
        title={title}
        handle={handle}
        status={status}
        avatarUrl={avatarUrl}
        contactText={contactText || 'About Me' }
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log(`Contact ${name}`)}
      />
    </div>
  )
}

export default TeamCard
