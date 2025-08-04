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
                Have a question, feedback, or just want to say hello? Reach out to the team at Fivestack.dev — we're here to help and would love to hear from you!
                </p>
            </div>

            {/* Contact Methods Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 rounded-lg bg-base-200">
                    <div className="w-12 h-12 bg-[#A346E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.2a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="opacity-70 mb-2">Send us an email anytime</p>
                    <a href="mailto:hello@fivestack.dev" className="text-[#A346E6] hover:underline">
                        hello@fivestack.dev
                    </a>
                </div>

                <div className="text-center p-6 rounded-lg bg-base-200">
                    <div className="w-12 h-12 bg-[#A346E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="opacity-70 mb-2">Based in</p>
                    <p>Remote Worldwide</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-base-200">
                    <div className="w-12 h-12 bg-[#A346E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                    <p className="opacity-70 mb-2">We typically respond within</p>
                    <p>24-48 hours</p>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">What to Expect</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#A346E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-sm font-bold">1</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Quick Acknowledgment</h4>
                                <p className="opacity-70">We'll confirm receipt of your message within 24 hours</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#A346E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-sm font-bold">2</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Thoughtful Response</h4>
                                <p className="opacity-70">Our team will provide a detailed response to your inquiry</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#A346E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-sm font-bold">3</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Follow-up Support</h4>
                                <p className="opacity-70">We'll continue the conversation until your questions are answered</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#A346E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-sm font-bold">4</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Action Items</h4>
                                <p className="opacity-70">If needed, we'll outline clear next steps for collaboration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="mb-16">
                <Form />
            </div>

        </div>
    </div>
  )
}

export default Contact