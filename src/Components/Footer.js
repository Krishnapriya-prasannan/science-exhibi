import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-200 py-8 text-center font-sans relative">
      <div className="md:flex justify-center items-center max-w-6xl mx-auto space-y-4 md:space-y-0 md:space-x-8">
        {/* Technical Support Section */}
        <div className="py-2 px-4 border-r border-gray-700 flex-1">
          <h4 className="text-lg mb-2 font-bold uppercase text-blue-400">Technical Support</h4>
          <p className="text-md font-medium">Dipesh Balodiya</p>
          <p className="text-md text-gray-400">Contact: +91 9131715108</p>
        </div>

        {/* Event Queries Section */}
        <div className="py-2 px-4 flex-1">
          <h4 className="text-lg mb-2 font-bold uppercase text-blue-400">Queries Related To Event</h4>
          <p className="text-md font-medium">Umang Sharma</p>
          <p className="text-md text-gray-400">Contact: +91 8602083290</p>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 text-xs text-center text-gray-500 font-mono absolute bottom-0 left-0 right-0">
        Copyright © {new Date().getFullYear()} by IPS Academy IES. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
