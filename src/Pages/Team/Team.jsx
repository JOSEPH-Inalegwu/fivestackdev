import React, { useRef, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import TeamCard from './TeamCard'
import TeamValues from './TeamValues'

const Team = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const [isHovered, setIsHovered] = useState(false)
  const cardWidth = 300
  const gap = 24 // 6 * 4px (gap-6 in Tailwind)

  // Real team member data
  const cards = [
    {
      name: 'Joseph I. Jonah',
      title: 'Full Stack Developer',
      handle: 'josephjonah',
      status: 'Online',
      avatarUrl: '/image/jose.jpg',
      contactText: 'See Portfolio',
      // portfolioUrl: ''
    },
    {
      name: 'Samuel Evelyn',
      title: 'UI/UX Designer',
      handle: 'lynsamuel',
      status: 'Offline',
      avatarUrl: '/image/evelyn.jpg',
    },
    {
      name: 'Ferdinand',
      title: 'Backend Developer',
      handle: 'ferdinanddev',
      status: 'Busy',
      avatarUrl: '/image/ferdinand.jpg',
      contactText: 'See Portfolio'
    },
    {
      name: 'Fabian Joseph',
      title: 'Full Stack & Mobile Developer',
      handle: 'fabianjoseph',
      status: 'Online',
      avatarUrl: '/image/fabian.jpg',
      contactText: 'See Portfolio'
    },
    {
      name: 'Wright',
      title: 'Graphic Designer',
      handle: 'wrightdesigns',
      status: 'Available',
      avatarUrl: '/image/wright.jpg'
    }
  ]

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) { // mobile
        setVisibleCards(1)
      } else { // tablet and desktop
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  // Calculate scroll positions for each step
  const getScrollPositions = () => {
    const positions = []
    const totalSteps = cards.length - visibleCards + 1
    
    for (let i = 0; i < totalSteps; i++) {
      if (i === 0) {
        positions.push(0) // First position
      } else if (i === totalSteps - 1) {
        // Last position: calculate to show last cards completely
        const container = scrollRef.current
        if (container) {
          const maxScrollLeft = container.scrollWidth - container.clientWidth
          positions.push(maxScrollLeft)
        } else {
          positions.push(i * (cardWidth + gap))
        }
      } else {
        positions.push(i * (cardWidth + gap))
      }
    }
    
    return positions
  }

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    const container = scrollRef.current
    if (!container) return

    const scrollPositions = getScrollPositions()
    const targetScrollLeft = scrollPositions[index]

    container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }

  // Auto-scroll logic
  useEffect(() => {
    // Don't start interval if hovered
    if (isHovered) return

    const interval = setInterval(() => {
      const container = scrollRef.current
      if (!container) return

      const scrollPositions = getScrollPositions()
      const nextIndex = (activeIndex + 1) % scrollPositions.length
      const nextScrollLeft = scrollPositions[nextIndex]

      container.scrollTo({ left: nextScrollLeft, behavior: 'smooth' })
      setActiveIndex(nextIndex)
    }, 7000)

    return () => clearInterval(interval)
  }, [activeIndex, cards.length, visibleCards, isHovered]) // Added isHovered dependency

  return (
    <div className="py-8 sm:py-10 md:py-15 lg:py-20 flex items-center bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-[#A346E6]">Team</span>
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Get to know the passionate minds behind Fivestack.dev — a diverse team of developers,
            designers, and problem-solvers committed to building tools that supercharge your
            workflow.
          </p>
        </div>

        <div 
          className="overflow-x-auto hide-scrollbar" 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 w-max">
            {cards.map((member, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[280px] flex-shrink-0"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-6 space-x-2 cursor-pointer">
          {Array.from({ length: cards.length - visibleCards + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                activeIndex === idx ? 'bg-purple-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to team member group ${idx + 1}`}
            />
          ))}
        </div>

        <div>
          <TeamValues />
        </div>

        <ToastContainer
          position="top-right" 
          autoClose={3000}
          />
      </div>
    </div>
  )
}

export default Team