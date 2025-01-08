import React, { useState } from 'react';
import logo from './images/logo.png';
import mainLogo from './images/mainlogoips.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-white text-blue-900 shadow-lg p-4">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={mainLogo}
            alt="Main Logo"
            className="h-14 w-auto md:h-16  "
          />
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto md:h-16 "
            onError={(e) => (e.target.src = 'path-to-default-logo.png')}
          />
          <span className="text-xl md:text-2xl font-bold tracking-wide drop-shadow-sm">
            Science Exhibition 2K25
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-blue-900 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen
              ? 'fixed inset-0 bg-blue-50 flex flex-col items-center justify-center z-50'
              : 'hidden md:flex md:items-center md:space-x-6'
          }`}
        >
          {isMobileMenuOpen && (
            <button
              className="absolute top-4 right-4 text-blue-900 text-3xl"
              onClick={toggleMobileMenu}
            >
              ✕
            </button>
          )}

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              Log In
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              Sign up as Team Leader
            </button>
            <button
              className="bg-white hover:bg-gray-200 text-blue-900 font-semibold px-6 py-2 rounded-lg shadow-md transform hover:scale-105 transition duration-300 border border-blue-700"
            >
              Register Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
