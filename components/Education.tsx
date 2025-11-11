
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { EDUCATION_DATA } from '../constants';

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent"></div>
        
        <motion.div 
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineVariants}
        >
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full mt-1.5 border-2 border-black neon-glow-blue"></div>
              
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-full md:w-5/12 p-6 glassmorphism rounded-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="text-cyan-400 text-sm mb-1">{item.period}</p>
                  <h3 className="text-xl font-bold font-orbitron text-purple-400">{item.institution}</h3>
                  <p className="text-gray-300 mt-2">{item.degree}</p>
                  <p className="text-gray-400 text-sm">Percentage: {item.percentage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
