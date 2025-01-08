import React from "react";
import { motion } from "framer-motion";

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
        <h2 className="text-3xl font-extrabold uppercase text-blue-800 tracking-wide">
          Themes for Project
        </h2>
        <p className="text-blue-600 mt-2 text-lg">
          Explore our key focus areas to inspire innovation and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {themes.map((theme, index) => (
          <motion.div
            key={index}
            className="w-full p-6 bg-white rounded-lg border border-blue-200 shadow-lg"
            initial={{
              opacity: 0,
              y: 50, // Slide in from the bottom
            }}
            animate={{
              opacity: 1,
              y: 0, // Return to normal position
            }}
            whileHover={{
              scale: 1.1, // Slight scale-up on hover
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)", // Floating effect
              backgroundColor: "rgba(173, 216, 230, 0.7)", // Soft blue background on hover
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // Stagger the animation
            }}
          >
            <motion.h3
              className="text-2xl font-semibold text-blue-700 uppercase text-center mb-4"
              whileHover={{
                color: "#1e3a8a", // Dark blue color on hover
                scale: 1.1, // Slight increase in size
              }}
              transition={{
                duration: 0.3,
              }}
            >
              {theme.title}
            </motion.h3>
            <motion.p
              className="text-blue-600 text-justify"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5, // Delay to animate text after card
              }}
            >
              {theme.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThemeCardsContainer;
