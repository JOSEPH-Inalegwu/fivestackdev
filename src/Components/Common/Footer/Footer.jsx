import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base text-base-content py-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl transition-colors duration-300 shadow-lg">
      <aside>
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#" 
            className="font-bold text-xl sm:text-3xl text-[#A346E6] transition-colors duration-300"
          >
            FiveStack
          </a>
        </div>
        <p className="max-w-xs mt-2 text-sm">
          Powering the future — one FiveStack at a time.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">What We Do</h6>
        <a className="link link-hover">Full Stack Development</a>
        <a className="link link-hover">Web Applications</a>
        <a className="link link-hover">API Integration</a>
        <a className="link link-hover">UI/UX Prototyping</a>
      </nav>

      <nav>
        <h6 className="footer-title">FiveStack</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our Vision</a>
        <a className="link link-hover">Open Source</a>
        <a className="link link-hover">Careers</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
