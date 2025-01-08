import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Box */}
          <motion.div
            className="flex-1 bg-blue-800 p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              About Science Exhibition
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Science is inexplicably linked with our lives and helps us to understand the world around us better. It, thus, becomes imperative to encourage our students to think, learn, solve problems, and make informed decisions. The organization of the Science Exhibition is one such initiative. The activity aims to provide a platform for students to demonstrate such learnings that encourage the construction of knowledge by connecting new ideas to existing concepts as well as enriching one’s understanding of others' experiences and perspectives.
            </p>
          </motion.div>

          {/* Right Box */}
          <motion.div
            className="flex-1 bg-blue-800 p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-blue-200">
              Why should students participate?
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Participation in the Science exhibition is an opportunity to explore real-world challenges, learn more about science and technology, and apply scientific ideas to solve them. It would encourage you to acquire and use the methods and processes of science, such as observation, questioning, planning investigations, hypothesizing, collecting, analyzing, and interpreting data, etc. As you interact with co-participants, mentors, and leading experts in the field of science, you will also get an opportunity to learn about different facets of science.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
