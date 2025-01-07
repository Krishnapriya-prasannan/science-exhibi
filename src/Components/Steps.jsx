import React, { useState } from 'react';

const StepsForParticipation = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      title: "Step 1 - Registration",
      details: [
        "Fill up participant details online.",
        "Pay registration fee (Indian schools).",
        "Receive login credentials via school email."
      ]
    },
    {
      title: "Step 2 - Project Development & Submission",
      details: [
        "Brainstorm project ideas with your mentor.",
        "Develop your project using eco-friendly materials.",
        "Submit project details and video evidence online."
      ]
    },
    {
      title: "Step 3 - Screening & Evaluation",
      details: [
        "Attend Regional Level Exhibition.",
        "Selected projects proceed to the National Level.",
        "Results and certificates awarded at National Exhibition."
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-12">
          Steps for Participation
        </h2>

        <div className="flex justify-center mb-10 space-x-6">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index + 1)}
              className={`px-8 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-110
                ${activeStep === index + 1 ? 'bg-yellow-400 text-black shadow-xl' : 'bg-blue-700 hover:bg-blue-600 text-white'}`}
            >
              {step.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps[activeStep - 1]?.details.map((detail, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
