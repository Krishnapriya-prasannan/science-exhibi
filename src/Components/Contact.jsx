import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUserTie } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Person 1 */}
          <div className="py-6 px-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-2">
              <FaUserTie className="inline mr-2 text-yellow-400" /> CBSE Science Exhibition Team
            </h4>
          </div>

          {/* Contact Person 2 */}
          <div className="py-6 px-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-2">
              <FaUserTie className="inline mr-2 text-yellow-400" /> Dr. Praggya M Singh
            </h4>
            <p className="text-md text-gray-300">Director (Academics)</p>
          </div>

          {/* Contact Person 3 */}
          <div className="py-6 px-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-2">
              <FaUserTie className="inline mr-2 text-yellow-400" /> Sh. Navin Maini
            </h4>
            <p className="text-md text-gray-300">Joint Secretary(IT)</p>
          </div>

          {/* Contact Person 4 */}
          <div className="py-6 px-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-2">
              <FaUserTie className="inline mr-2 text-yellow-400" /> Sh. Abhishek Bajaj
            </h4>
            <p className="text-md text-gray-300">Under Secretary</p>
          </div>
        </div>

        <div className="text-lg mb-6">
          <h3 className="text-xl font-semibold">
            <FaPhoneAlt className="inline mr-2 text-yellow-400" /> Call:
          </h3>
          <p className="text-md text-gray-300">011-23211575, 011-23212603, 011-23234324</p>
        </div>

        <div className="text-lg mb-6">
          <h3 className="text-xl font-semibold">
            <FaEnvelope className="inline mr-2 text-yellow-400" /> Email:
          </h3>
          <p className="text-md text-gray-300">science.fair[at]cbseshiksha[dot]in</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
