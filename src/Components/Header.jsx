import React, { useState } from "react";
import { FiUser } from "react-icons/fi"; // Importing the user icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Header with Glassy Effect */}
      <div className="bg-blue-950 bg-opacity-30 backdrop-blur-lg text-white shadow-md rounded-lg p-1">        <div className="container mx-auto px-16 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">ScienceExhibition</a>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-8">
            {/* First Section */}
            <div className="space-x-4">
              <a href="#" className="hover:text-red-500">HOME</a>
              <a href="#" className="hover:text-red-500">RESOURCES</a>
            </div>
            {/* Spacer */}
            <div className="w-px bg-gray-600 mx-2 h-8"></div>
            {/* Second Section */}
            <div className="space-x-4 flex items-center">
              <a href="#" className="hover:text-red-500">LOGIN</a>
              <a href="#" className="hover:text-red-500">CONTACT US</a>
              {/* User Icon */}
              <a href="#" className="hover:text-red-500">
                <FiUser size={24} /> {/* User Icon */}
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header without Glassy Effect */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-black text-white shadow-lg p-6 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          className="text-2xl mb-6 focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          &times; {/* Close Icon */}
        </button>
        <nav>
          {/* First Section */}
          <div className="space-y-4">
            <a href="#" className="block text-lg hover:text-red-500">Everything</a>
            <a href="#" className="block text-lg hover:text-red-500">Women</a>
            <a href="#" className="block text-lg hover:text-red-500">Men</a>
            <a href="#" className="block text-lg hover:text-red-500">Accessories</a>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-600 my-6"></div>

          {/* Second Section */}
          <div className="space-y-4">
            <a href="#" className="block text-lg hover:text-red-500">About</a>
            <a href="#" className="block text-lg hover:text-red-500">Contact Us</a>
            {/* User Icon */}
            <a href="#" className="block text-lg hover:text-red-500 flex items-center space-x-2">
              <FiUser size={20} /> <span>Login</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <button
        className="lg:hidden text-white text-3xl absolute top-6 right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776; {/* Hamburger Icon */}
      </button>
    </header>
  );
};

export default Header;
