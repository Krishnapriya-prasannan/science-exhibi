import React, { useState, useEffect, useRef, useCallback } from "react";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";

// Theme Cards Component
const ThemeCardsContainer = () => {
  const themes = [
    {
      title: "Social Impact",
      description:
        "Showcase projects addressing critical social issues. Focusing on community betterment, inclusivity, health access, education access, or solving local/national humanitarian challenges that make a meaningful impact for overall quality of life or societal welfare.",
    },
    {
      title: "Economic Impact",
      description:
        "Showcase innovations that boost the financial economy and foster sustainability with emphasis on generating value through the creation of novel solutions in manufacturing or automation. Focus on technological growth, trade, market enhancements, and creation of revenue generation using innovation in areas like AI-based tools/digital tools.",
    },
    {
      title: "Environmental Impact",
      description:
        "Focus on innovations for the long-term preservation of our environment that focuses on creating cleaner systems, better sustainable resources, and protection of the natural environment that leads to a safer world, with long-term preservation strategies. Show projects related to alternative resources that focus on zero waste/emission principles.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold uppercase text-gray-800 tracking-wide">
          Themes for Project
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Explore our key focus areas to inspire innovation and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="w-full p-6 bg-white rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-700 uppercase text-center mb-4">
              {theme.title}
            </h3>
            <p className="text-gray-600 text-justify">{theme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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
