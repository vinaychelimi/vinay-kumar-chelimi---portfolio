
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { CERTIFICATIONS_DATA } from '../constants';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glassmorphism p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="mb-4">{cert.icon}</div>
            <h3 className="text-lg font-semibold text-purple-400 mb-1">{cert.name}</h3>
            <p className="text-sm text-gray-400">{cert.issuer}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
