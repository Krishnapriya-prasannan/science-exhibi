import React, { useState, useEffect, useRef, useCallback } from "react";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import ThemeCardsContainer from "./theme"


// Hero Section Component
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const sliderWrapperRef = useRef(null);

  const images = [slider1, slider2];
  const totalSlides = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      const newPosition = -currentIndex * 100;
      if (sliderWrapperRef.current) {
        setSlidePosition(newPosition);
      }
    };
    handleAnimation();
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-gray-50">
      {/* Logo Section */}
      <div className="flex justify-center pt-8">
        <img
          src="https://www.ipsacademy.org/assets/images/IPSALogo.svg"
          alt="IPS logo"
          className="w-48 h-auto animate-bounce"
        />
      </div>

      {/* Slider Section */}
      <div className="mt-8 relative h-[500px] flex items-center justify-center overflow-hidden shadow-xl">
        {/* Slider Wrapper */}
        <div
          ref={sliderWrapperRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${slidePosition}%)` }}
        >
          {images.map((image, index) => (
            <div className="min-w-full box-border" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
        >
          ❯
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4">
          {images.map((_image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full border-2 border-white h-4 w-4 ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-transparent"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Theme Cards */}
      <ThemeCardsContainer />
    </div>
  );
};

export default Hero;
