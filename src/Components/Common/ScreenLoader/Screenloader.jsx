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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden font-mono">
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
      <div className="relative z-10 flex flex-col items-center space-y-10 max-w-lg w-full px-8">
        
        {/* Tech logo with circuit design */}
        <div className="relative">
          <div className="w-28 h-28 relative">
            {/* Outer tech ring */}
            <div className="absolute inset-0 border-2 border-purple-500 rounded-lg animate-spin" style={{animationDuration: '4s'}}>
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-purple-300 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
            </div>
            
            {/* Inner rotating circuit */}
            <div className="absolute inset-4 border border-purple-400 border-dashed rounded-lg animate-spin opacity-60" style={{animationDirection: 'reverse', animationDuration: '6s'}}>
              {/* Corner connectors */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute top-0 right-0 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-purple-400 rounded-full"></div>
            </div>
            
            {/* Center processor with logo */}
            <div className="absolute inset-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-2xl">
              <div className="text-white font-bold text-3xl tracking-wider">
                5
              </div>
            </div>
          </div>
        </div>

        {/* Brand with tech styling */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-light text-white tracking-widest">
            <span className="text-white">Five</span>
            <span className="text-purple-500 font-bold ml-2">Stack</span>
            <span className="text-purple-300 text-lg ml-2">.dev</span>
          </h1>
          <div className="text-sm text-gray-400 tracking-wide">
            Building scalable web applications
          </div>
        </div>

        {/* Terminal-style status */}
        <div className="w-full bg-gray-900 rounded-lg p-4 border border-gray-700 space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400">fivestack@localhost</span>
            <span className="text-gray-500">~</span>
            <span className="text-purple-400">npm run dev</span>
          </div>
          
          <div className="text-xs text-gray-400 space-y-1">
            {codeLines.map((line, i) => (
              <div key={i} className="opacity-60 animate-pulse">{line}</div>
            ))}
          </div>
          
          <div className="text-sm text-purple-400 animate-pulse">
            {techMessages[currentModule]}
          </div>
        </div>

        {/* Advanced progress system */}
        <div className="w-full space-y-4">
          {/* Main progress bar */}
          <div className="relative">
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

          {/* Module indicators */}
          <div className="flex justify-between text-xs">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
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

        {/* System indicators */}
        <div className="flex space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">API</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">DB</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">CDN</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">CACHE</span>
          </div>
        </div>
      </div>

      {/* Tech corner elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-purple-500 opacity-60">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-purple-500 opacity-60">
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-purple-500 opacity-60">
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-purple-500 opacity-60">
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>

    </div>
  )
}

export default Screenloader