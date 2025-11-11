
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="about" title="About Me">
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 neon-glow-purple flex-shrink-0" variants={itemVariants}>
          <img src="assests\profile.jpg" alt="Vinay Kumar Chelimi" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I am a motivated and dedicated Electronics and Communication Engineering graduate with a strong foundation in programming and web development. Passionate about solving complex problems and building innovative solutions, I am eager to contribute my skills to a challenging and dynamic work environment.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-cyan-400 font-orbitron tracking-wider">
            <span>Continuous Learner</span>
            <span>|</span>
            <span>Innovator</span>
            <span>|</span>
            <span>Problem Solver</span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
