import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p className="text-lg md:text-xl text-cyan-400 mb-2" variants={itemVariants}>
          Hi, I’m
        </motion.p>
        <motion.h1 className="text-4xl md:text-7xl font-bold font-orbitron mb-4 text-glow-purple" variants={itemVariants}>
          Vinay Kumar Chelimi
        </motion.h1>
        <motion.div className="text-lg md:text-2xl font-light mb-8 text-gray-300 h-16 md:h-8" variants={itemVariants}>
          <TypeAnimation
            sequence={[
              'Electronics & Communication Engineer',
              2000,
              'Full Stack Java Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div className="space-x-4" variants={itemVariants}>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <button className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-md transition-all duration-300 hover:bg-purple-500 hover:text-white hover:neon-glow-purple">
              View My Work
            </button>
          </ScrollLink>
          <a href="https://drive.google.com/file/d/1ntUZ2VXA782ib4SWE1C9t575INjmT-lA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-md transition-all duration-300 hover:bg-cyan-400 hover:neon-glow-blue">
               view Resume
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
