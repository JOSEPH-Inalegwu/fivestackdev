import React, { useState } from 'react';
import ThemeToggle from '../../UI/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent mx-2 md:mx-8 mt-3 md:mt-4">
      <nav className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
        {/* Desktop Top Bar */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 bg-base-100 shadow-lg transition-colors duration-300 rounded-full border border-base-300 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-base-content font-bold text-xl sm:text-2xl hover:text-[#A346E6] transition-colors duration-300"
            >
              FiveStack
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Build Logs", "Team", "Contact"].map((label, idx) => (
              <a
                key={idx}
                href="#"
                className="text-base-content hover:text-[#A346E6] text-sm font-medium relative group transition-all duration-300 py-2 px-1"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A346E6] group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-md"></span>
              </a>
            ))}
          </div>

          {/* Right side: Buttons + Theme Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <button className="bg-[#A346E6] hover:bg-primary-focus rounded-full text-white px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Explore Builds
              </button>
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
            {["Home", "About", "Projects", "Build Logs", "Team", "Contact"].map((label, idx) => (
              <a
                key={idx}
                href="#"
                className="block px-3 py-2 text-base-content hover:text-[#A346E6] hover:bg-base-200 rounded-md text-base font-medium transition-all duration-300"
              >
                {label}
              </a>
            ))}

            <div className="pt-4">
              <button className="w-full bg-[#A346E6] hover:bg-primary-focus text-white px-4 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Explore Builds
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
