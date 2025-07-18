import React, { useState, useEffect } from 'react'

const Screenloader = () => {
  const [progress, setProgress] = useState(0)
  const [currentModule, setCurrentModule] = useState(0)
  const [codeLines, setCodeLines] = useState([])
  
  const modules = [
    "core.bootstrap()",
    "api.initialize()",
    "ui.render()",
    "state.hydrate()",
    "app.mount()"
  ]

  const techMessages = [
    "Compiling TypeScript modules...",
    "Bundling React components...",
    "Optimizing asset pipeline...",
    "Establishing WebSocket connections...",
    "Initializing service workers..."
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 12 + 3, 100)
        return newProgress
      })
    }, 200)

    const moduleInterval = setInterval(() => {
      setCurrentModule(prev => (prev + 1) % modules.length)
    }, 1200)

    // Simulate code streaming
    const codeInterval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev, `// ${Math.random().toString(36).substr(2, 8)}.js`]
        return newLines.slice(-5) // Keep only last 5 lines
      })
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(moduleInterval)
      clearInterval(codeInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden px-4 py-8">
      {/* Matrix-style background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500 text-xs opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(163, 70, 230, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163, 70, 230, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridSlide 15s linear infinite'
        }}></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-4 sm:px-6 md:px-8">
        
        {/* Tech logo with circuit design - Responsive sizes */}
        <div className="relative mb-6 sm:mb-8 md:mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative">
            {/* Outer tech ring */}
            <div className="absolute inset-0 border-2 border-purple-500 rounded-lg animate-spin" style={{animationDuration: '4s'}}>
              <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
            </div>
            
            {/* Inner rotating circuit */}
            <div className="absolute inset-3 sm:inset-4 border border-purple-400 border-dashed rounded-lg animate-spin opacity-60" style={{animationDirection: 'reverse', animationDuration: '6s'}}>
              {/* Corner connectors */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute top-0 right-0 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-purple-400 rounded-full"></div>
            </div>
            
            {/* Center processor with logo */}
            <div className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-7 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-2xl">
              <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider">
                5
              </div>
            </div>
          </div>
        </div>

        {/* Brand with tech styling - Responsive text */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-widest">
            <span className="text-white">Five</span>
            <span className="text-purple-500 font-bold">Stack</span>
          </h1>
          <div className="text-xs sm:text-sm text-gray-400 tracking-wide mt-2 sm:mt-4">
            Building scalable web applications
          </div>
        </div>

        {/* Terminal-style status - Responsive padding and text */}
        <div className="w-full bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-700 mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center space-x-2 text-xs sm:text-sm mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400">fivestack@localhost</span>
            <span className="text-gray-500">~</span>
            <span className="text-purple-400 truncate">npm run dev</span>
          </div>
          
          <div className="text-xs text-gray-400 space-y-1 mb-2 hidden sm:block">
            {codeLines.map((line, i) => (
              <div key={i} className="opacity-60 animate-pulse truncate">{line}</div>
            ))}
          </div>
          
          <div className="text-xs sm:text-sm text-purple-400 animate-pulse truncate">
            {techMessages[currentModule]}
          </div>
        </div>

        {/* Advanced progress system - Responsive */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10">
          {/* Main progress bar */}
          <div className="relative mb-3 sm:mb-4">
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-300 ease-out relative"
                style={{width: `${progress}%`}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -top-6 right-0 text-xs text-gray-400 font-mono">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Module indicators - Responsive text and spacing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-1 text-xs">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`transition-all duration-300 truncate text-center sm:text-left ${
                  index === currentModule 
                    ? 'text-purple-400 font-bold' 
                    : index < currentModule 
                      ? 'text-green-400' 
                      : 'text-gray-500'
                }`}
              >
                {module}
              </div>
            ))}
          </div>
        </div>

        {/* System indicators - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs">
          <div className="flex items-center space-x-1 justify-center sm:justify-start">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">API</span>
          </div>
          <div className="flex items-center space-x-1 justify-center sm:justify-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">DB</span>
          </div>
          <div className="flex items-center space-x-1 justify-center sm:justify-start">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">CDN</span>
          </div>
          <div className="flex items-center space-x-1 justify-center sm:justify-start">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">CACHE</span>
          </div>
        </div>
      </div>

      {/* Tech corner elements - Responsive sizes and positioning */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-l-2 border-t-2 border-purple-500 opacity-60">
        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-r-2 border-t-2 border-purple-500 opacity-60">
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-l-2 border-b-2 border-purple-500 opacity-60">
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-r-2 border-b-2 border-purple-500 opacity-60">
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>

    </div>
  )
}

export default Screenloader