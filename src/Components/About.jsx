import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Science Exhibition
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Science is inexplicably linked with our lives and helps us to understand the world around us better. It, thus, becomes imperative to encourage our students to think, learn, solve problems, and make informed decisions. The organization of the Science Exhibition is one such initiative. The activity aims to provide a platform for students to demonstrate such learnings that encourage the construction of knowledge by connecting new ideas to existing concepts as well as enriching one’s understanding of others' experiences and perspectives.
        </motion.p>
        <motion.h3
          className="text-3xl font-semibold mb-4 text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Why should students participate?
        </motion.h3>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Participation in the Science exhibition is an opportunity to explore real-world challenges, learn more about science and technology, and apply scientific ideas to solve them. It would encourage you to acquire and use the methods and processes of science, such as observation, questioning, planning investigations, hypothesizing, collecting, analyzing, and interpreting data, etc. As you interact with co-participants, mentors, and leading experts in the field of science, you will also get an opportunity to learn about different facets of science.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
