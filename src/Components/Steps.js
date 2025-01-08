import React, { useState } from "react";
import { motion } from "framer-motion";

const StepsForParticipation = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      title: "Step 1",
      details: [
        "Fill up participant details online.",
        "Pay registration fee (Indian schools).",
        "Receive login credentials via school email."
      ]
    },
    {
      title: "Step 2",
      details: [
        "Brainstorm project ideas with your mentor.",
        "Develop your project using eco-friendly materials.",
        "Submit project details and video evidence online."
      ]
    },
    {
      title: "Step 3",
      details: [
        "Attend Regional Level Exhibition.",
        "Selected projects proceed to the National Level.",
        "Results and certificates awarded at National Exhibition."
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Animation: Bounce Effect */}
        <motion.h2
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1.2,
          }}
        >
          Steps for Participation
        </motion.h2>

        {/* Step Headers */}
        <div className="relative flex justify-center gap-4 mb-10">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index + 1)}
              className={`flex-1 text-center px-6 py-4 text-xl font-semibold rounded-tl-3xl rounded-br-3xl transition-all duration-300 transform hover:scale-105
                ${
                  activeStep === index + 1
                    ? "bg-yellow-400 text-black shadow-xl"
                    : "bg-blue-700 hover:bg-blue-600 text-white"
                }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1 * index,
                duration: 0.8,
              }}
            >
              {step.title}
            </motion.button>
          ))}

          {/* Sliding Line */}
          <div
            className={`absolute left-0 top-20 sm:top-22 w-full h-2 bg-yellow-400 transition-all duration-300 rounded-full`}
            style={{
              width: `${100 / steps.length * 1.0}%`,
              left: `${(activeStep - 1) * (100 / steps.length)}%`,
            }}
          ></div>
        </div>

        {/* Step Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps[activeStep - 1]?.details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-tl-lg rounded-br-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                delay: index * 0.2,
                duration: 0.6,
              }}
            >
              <p className="text-lg">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsForParticipation;
