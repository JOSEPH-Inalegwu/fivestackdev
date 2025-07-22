import React from 'react';

const Home = () => {
  return (
    <div className="dark:text-black">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-12 lg:py-0">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                Innovation forged by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  five
                </span>
                , built to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  scale
                </span>
                .
              </h1>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We help startups and brands bring ideas to life with scalable web solutions.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                  </svg>
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                  <span>Modern Tech</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Let's Build Together
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 text-center lg:text-left">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Trusted by innovative companies
                </p>
                <div className="flex justify-center lg:justify-start space-x-8 opacity-60">
                  <div className="text-2xl font-bold text-slate-400">STARTUP</div>
                  <div className="text-2xl font-bold text-slate-400">BRAND</div>
                  <div className="text-2xl font-bold text-slate-400">SCALE</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl transform -rotate-3 scale-105"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Custom SVG Illustration */}
                  <div className="p-8">
                    <svg viewBox="0 0 400 300" className="w-full h-auto">
                      {/* Background */}
                      <rect width="400" height="300" fill="currentColor" className="text-slate-50 dark:text-slate-800" />
                      
                      {/* Team Members (5 circles representing the team) */}
                      <circle cx="80" cy="120" r="25" fill="#6366f1" opacity="0.8" />
                      <circle cx="160" cy="100" r="25" fill="#8b5cf6" opacity="0.8" />
                      <circle cx="240" cy="120" r="25" fill="#ec4899" opacity="0.8" />
                      <circle cx="320" cy="100" r="25" fill="#06b6d4" opacity="0.8" />
                      <circle cx="200" cy="60" r="25" fill="#10b981" opacity="0.8" />
                      
                      {/* Connecting Lines */}
                      <line x1="80" y1="120" x2="160" y2="100" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
                      <line x1="160" y1="100" x2="240" y2="120" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
                      <line x1="240" y1="120" x2="320" y2="100" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
                      <line x1="160" y1="100" x2="200" y2="60" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
                      <line x1="240" y1="120" x2="200" y2="60" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
                      
                      {/* Code Blocks */}
                      <rect x="50" y="180" width="80" height="40" rx="8" fill="#e5e7eb" opacity="0.8" />
                      <rect x="160" y="200" width="80" height="40" rx="8" fill="#e5e7eb" opacity="0.8" />
                      <rect x="270" y="180" width="80" height="40" rx="8" fill="#e5e7eb" opacity="0.8" />
                      
                      {/* Code Lines */}
                      <rect x="60" y="190" width="60" height="4" rx="2" fill="#4f46e5" opacity="0.7" />
                      <rect x="60" y="200" width="40" height="4" rx="2" fill="#7c3aed" opacity="0.7" />
                      <rect x="170" y="210" width="60" height="4" rx="2" fill="#db2777" opacity="0.7" />
                      <rect x="170" y="220" width="40" height="4" rx="2" fill="#0891b2" opacity="0.7" />
                      <rect x="280" y="190" width="60" height="4" rx="2" fill="#059669" opacity="0.7" />
                      <rect x="280" y="200" width="40" height="4" rx="2" fill="#4f46e5" opacity="0.7" />
                      
                      {/* Floating Elements */}
                      <circle cx="50" cy="50" r="8" fill="#f59e0b" opacity="0.6" />
                      <circle cx="350" cy="50" r="6" fill="#10b981" opacity="0.6" />
                      <circle cx="30" cy="250" r="10" fill="#ec4899" opacity="0.6" />
                      <circle cx="370" cy="250" r="8" fill="#3b82f6" opacity="0.6" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating Animation Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;