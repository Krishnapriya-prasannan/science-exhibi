import React from "react";
import { motion } from "framer-motion";

const Objectives = () => {
  return (
    <section id="objectives" className="py-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Objectives
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Inspire Creativity", description: "Encourage innovative ideas and confident presentations." },
            { title: "Foster Collaboration", description: "Promote teamwork among students, teachers, and experts." },
            { title: "Showcase Talent", description: "Provide a platform for students to display their skills." },
            { title: "Encourage Innovation", description: "Stimulate thinking and problem-solving for scientific challenges." },
            { title: "Promote Research", description: "Advocate for scientific research to advance the community." },
            { title: "Enhance Knowledge", description: "Expand knowledge through practical scientific applications." },
          ].map((obj, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                rotate: [0, 5, -5, 0],
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f5f5f5",
                transition: { duration: 0.3, type: "spring", stiffness: 100, damping: 10 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: 5,
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-blue-700 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  color: "#f39c12",
                  transition: { type: "spring", stiffness: 200, damping: 20 },
                }}
                transition={{ delay: 0.2 }}
              >
                {obj.title}
              </motion.h3>
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {obj.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
