import React, { useState } from 'react';

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
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-12 text-center">
          Steps for Participation
        </h2>

        {/* Step headers in a row */}
        <div className="relative flex justify-center gap-4 mb-10">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index + 1)}
              className={`flex-1 text-center px-6 py-4 text-xl font-semibold rounded-tl-3xl rounded-br-3xl transition-all duration-300 transform hover:scale-105
                ${
                  activeStep === index + 1
                    ? 'bg-yellow-400 text-black shadow-xl'
                    : 'bg-blue-700 hover:bg-blue-600 text-white'
                }`}
            >
              {step.title}
            </button>
          ))}

          {/* Sliding line */}
          <div
            className={`absolute top-20 left-0 w-full h-2 bg-yellow-400 transition-all duration-300 rounded-full`}
            style={{
              width: `${100 / steps.length * 1.0}%`,  // Increased width for more space
              left: `${(activeStep - 1) * (100 / steps.length)}%`
            }}
          ></div>
        </div>

        {/* Step details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps[activeStep - 1]?.details.map((detail, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-tl-lg rounded-br-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-lg">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsForParticipation;
