import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { ACHIEVEMENTS_DATA } from '../constants';

const cardVariants = {
  hidden: { opacity: 0, rotateY: 180 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        style={{ perspective: '1000px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {ACHIEVEMENTS_DATA.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glassmorphism p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 h-full"
          >
            <div className="mb-4">{cert.icon}</div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2 flex-grow">{cert.title}</h3>
            <p className="text-sm text-gray-400">{cert.event}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
