import React from 'react'
import { Rocket, Users, Zap, Target, BookOpen, Lightbulb } from 'lucide-react'

const TeamValues = () => {
const values = [
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'You get forward-thinking solutions built with the latest technologies — keeping your product ahead of the curve.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'You’re part of the process — we work with you, not just for you, to bring your ideas to life.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'You can expect high-quality code and flawless user experiences that elevate your brand.',
    color: 'from-[#A346E6] to-purple-600'
  },
  {
    icon: Target,
    title: 'Focus',
    description: 'Your goals drive our work — we deliver results that align with your vision and needs.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'You benefit from a team that’s always evolving, staying sharp with the latest trends and tools.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'You’ll see fresh ideas and bold thinking applied to every challenge — no cookie-cutter solutions.',
    color: 'from-yellow-500 to-yellow-600'
  }
]


  return (
    <div className="mt-20 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-[#A346E6]">Values</span>
        </h2>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          These are the principles that guide how we work, how we collaborate, and how we serve our clients — with creativity, integrity, and a commitment to building things that matter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const IconComponent = value.icon
          return (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Background Card */}
              <div className="bg-base-200 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 group-hover:text-[#A346E6] transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-center opacity-70 leading-relaxed group-hover:opacity-90 transition-opacity duration-300">
                  {value.description}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A346E6] to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TeamValues