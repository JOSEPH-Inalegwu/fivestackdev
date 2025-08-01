import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Zap, Users, Terminal, GitBranch, Database, Cpu, ArrowDown } from 'lucide-react';
import TextType from '../../Components/Reactbits/TextType/TextType';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [codeText, setCodeText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const codeSnippet = `const buildSolution = async (problem) => {
  const analysis = await analyzeProblem(problem);
  const solution = designArchitecture(analysis);
  return deployToProduction(solution);
};`;

  const tabs = [
    { name: 'solution.js', active: true },
    { name: 'deploy.yml', active: false },
    { name: 'README.md', active: false }
  ];

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setCodeText(prev => prev + codeSnippet[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeSnippet]);

  // Tab switching animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tabs.length]);

  return (
    <section className="py-8 sm:py-10 md:py-15 lg:py-20 flex items-center bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Section - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-base-200 text-xs sm:text-sm font-medium animate-fade-in-up">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#A346E6] animate-pulse" />
                Building the future of web solutions
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-800 dark:text-gray-100">
                  <TextType
                    className="text-base-content"
                    text={["Modern solutions", "Smart approaches", "Innovative ideas"]}
                    typingSpeed={75}
                    pauseDuration={700}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  for real problems
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-xl animate-fade-in-up animation-delay-400">
                We build scalable web solutions that solve your pain points. Our collaborative team crafts digital products with clean design, efficient code, and user-first experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animation-delay-600">
              <button className="btn btn-lg bg-[#A346E6] hover:bg-[#8c3bc7] border-none text-white px-6 sm:px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                Get Started
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 animate-bounce" />
              </button>
              
              <button className="btn btn-lg btn-outline border-base-300 hover:border-[#A346E6] hover:bg-[#A346E6] hover:text-white px-6 sm:px-8 hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
          
          {/* Right Section - Interactive Development Environment */}
          <div className="relative order-2 lg:order-2 animate-fade-in-left animation-delay-400">
            <div className="relative z-10 space-y-3 sm:space-y-4">
              {/* Code Editor Window */}
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-[#2d2d2d] border-b border-gray-600">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex space-x-1 sm:space-x-1.5">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors duration-200"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors duration-200"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors duration-200"></div>
                    </div>
                    <div className="hidden sm:flex space-x-1">
                      {tabs.map((tab, index) => (
                        <div 
                          key={index}
                          className={`px-2 sm:px-3 py-1 rounded-t text-xs transition-all duration-300 ${
                            activeTab === index 
                              ? 'bg-[#1a1a1a] text-white border-t-2 border-[#A346E6]' 
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {tab.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-[#A346E6]" />
                    <span className="text-xs text-gray-400 hidden sm:inline">Fivestack Terminal</span>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm bg-[#1a1a1a] min-h-[120px] sm:min-h-[160px] md:min-h-[200px] overflow-x-auto">
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs mb-2">// Building solutions that matter</div>
                    <pre className="text-white leading-relaxed whitespace-pre-wrap">
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">buildSolution</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-yellow-400">async</span>{' '}
                      <span className="text-white">(</span>
                      <span className="text-orange-400">problem</span>
                      <span className="text-white">{') => {'}</span>
                      <br />
                      {'  '}
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">analysis</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-yellow-400">await</span>{' '}
                      <span className="text-green-400">analyzeProblem</span>
                      <span className="text-white">(problem);</span>
                      <br />
                      {'  '}
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">solution</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-green-400">designArchitecture</span>
                      <span className="text-white">(analysis);</span>
                      <br />
                      {'  '}
                      <span className="text-purple-400">return</span>{' '}
                      <span className="text-green-400">deployToProduction</span>
                      <span className="text-white">(solution);</span>
                      <br />
                      <span className="text-white">{'};'}</span>
                      <span className="text-[#A346E6] ml-1 animate-pulse">|</span>
                    </pre>
                  </div>
                </div>
              </div>
              
              {/* Development Metrics Dashboard */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-base-100 rounded-lg p-3 sm:p-4 shadow-lg border border-base-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2">
                      <GitBranch className="w-3 h-3 sm:w-4 sm:h-4 text-[#A346E6] group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm font-semibold text-base-content">Git Activity</span>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-base-content/70">Commits Today</span>
                      <span className="text-[#A346E6] font-semibold">12</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-base-content/70">Active Branch</span>
                      <span className="text-green-400 font-semibold">main</span>
                    </div>
                    <div className="w-full bg-base-200 rounded-full h-1.5 mt-2">
                      <div className="bg-[#A346E6] h-1.5 rounded-full animate-pulse" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-base-100 rounded-lg p-3 sm:p-4 shadow-lg border border-base-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2">
                      <Database className="w-3 h-3 sm:w-4 sm:h-4 text-[#A346E6] group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm font-semibold text-base-content">Performance</span>
                    </div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-base-content/70">Response Time</span>
                      <span className="text-[#A346E6] font-semibold">127ms</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-base-content/70">Uptime</span>
                      <span className="text-green-400 font-semibold">99.94%</span>
                    </div>
                    <div className="w-full bg-base-200 rounded-full h-1.5 mt-2">
                      <div className="bg-gradient-to-r from-[#A346E6] to-[#8c3bc7] h-1.5 rounded-full animate-pulse" style={{width: '94%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow Effects */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#A346E6]/10 sm:bg-[#A346E6]/20 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-[#A346E6]/5 sm:bg-[#A346E6]/10 rounded-full blur-lg sm:blur-xl animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;