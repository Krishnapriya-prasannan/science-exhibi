import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import animation library

// Import your images
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [slider1, slider2];  // Your background images

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);  // Change slide every 5 seconds
    return () => clearInterval(interval);  // Cleanup on component unmount
  }, []);

  return (
    <section className="relative bg-blue-900 text-white h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex transition-all duration-1000 ease-in-out">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${slides[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            transition: "opacity 1s ease-in-out",  // Adding fade effect between slides
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Science Exhibition 2024
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-6 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          A world of scientific discoveries and creativity awaits you!
        </motion.p>

        <motion.a
          href="#steps"
          className="inline-block bg-yellow-500 text-black py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:bg-yellow-400 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Get Started
        </motion.a>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </section>
  );
};

export default Hero;
