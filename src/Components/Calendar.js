import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

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
    <section id="calendar" className="py-16 bg-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Calendar</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 text-blue-500">
                <FaCalendarAlt className="text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">{event.title}</h3>
              <p className="text-lg text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
