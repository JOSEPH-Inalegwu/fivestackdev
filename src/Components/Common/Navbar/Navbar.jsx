import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../../UI/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items with their routes
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Build Logs', path: '/build-logs' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-transparent mx-2 md:mx-8 mt-3 md:mt-4">
      <nav className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
        {/* Desktop Top Bar */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 bg-base-100 shadow-lg transition-colors duration-300 rounded-full border border-base-300 px-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-0.5">
            {/* Light Theme Image - shows by default and in light mode */}
            <img
              src="/logo-Fivestack.svg"
              className="w-10 h-10 border border-base-300 block [[data-theme=synthwave]_&]:hidden"
              alt="FiveStack Logo Light"
            />
            
            {/* Dark Theme Image - hidden by default */}
            <img
              src="/5stack00.svg"
              className="w-10 border border-base-300 h-10 hidden [[data-theme=synthwave]_&]:block"
              alt="FiveStack Logo Dark"
            />
            <h3 className="font-bold text-2xl text-base-content">Stack</h3>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium relative group transition-all duration-300 py-2 px-1 ${
                    isActive 
                      ? 'text-[#A346E6]' 
                      : 'text-base-content hover:text-[#A346E6]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#A346E6] transition-all duration-300 ease-out ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                    <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-md"></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: Buttons + Theme Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <NavLink 
                to="/build-logs"
                className="bg-[#A346E6] hover:bg-primary-focus rounded-full text-white px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Explore Builds
              </NavLink>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="text-base-content hover:text-[#A346E6] focus:outline-none transition duration-300 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className={`w-7 h-7 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Rectangular) */}
        <div
          className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-base-100 border border-base-300 mt-2 rounded-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 transition-colors duration-300">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#A346E6] bg-base-200'
                      : 'text-base-content hover:text-[#A346E6] hover:bg-base-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4">
              <NavLink 
                to="/build-logs"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-[#A346E6] hover:bg-primary-focus text-white px-4 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-center"
              >
                Explore Builds
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;