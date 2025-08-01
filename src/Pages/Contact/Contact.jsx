import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div className="py-8 sm:py-10 md:py-15 lg:py-20 flex items-center bg-base-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact <span className="text-[#A346E6]">Us</span>
                </h1>
                <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Have a question, feedback, or just want to say hello? Reach out to the team at Fivestack.dev — we’re here to help and would love to hear from you!
                </p>
            </div>

            <Form />    
        </div>
    </div>
  )
}

export default Contact
