import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CalendarSection = () => {
  const events = [
    {
      title: 'Registration',
      date: 'till 21st Sep 2024',
    },
    {
      title: 'Regional Exhibition',
      date: 'Oct 2024 - Nov 2024',
    },
    {
      title: 'National Exhibition',
      date: 'Nov 2024 - Dec 2024',
    },
  ];

  return (
    <section
      id="calendar"
      className="py-16 bg-blue-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Calendar
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0], // Bouncing effect
              }}
              viewport={{ once: true }} // Trigger animation only once when the element comes into view
              whileHover={{
                scale: 1.05, // Slight scale on hover
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)', // Shadow on hover
                transition: { duration: 0.3 },
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: index * 0.3, // Staggered entrance
              }}
            >
              <motion.div
                className="mb-4 text-blue-500"
                initial={{ y: -30 }}
                animate={{
                  y: 0,
                  rotate: [0, 10, -10, 0], // Slight bounce and rotation for the icon
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.2,
                }}
              >
                <FaCalendarAlt className="text-5xl" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold mb-2 text-blue-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3.5, delay: index * 0.3 }}
              >
                {event.title}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {event.date}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
