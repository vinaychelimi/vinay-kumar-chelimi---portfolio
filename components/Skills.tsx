import React from 'react';
// FIX: Import `Variants` type from `framer-motion` to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { Section } from './Section';
import { SKILLS_DATA } from '../constants';

interface SkillBarProps {
  skill: { name: string; level: number };
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  // FIX: Explicitly type `barVariants` with `Variants` to resolve type incompatibility for the `ease` property.
  const barVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: `${skill.level}%`,
      transition: {
        duration: 1,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium text-gray-200">{skill.name}</span>
        <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 glassmorphism">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={barVariants}
        />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-2xl mx-auto">
        {SKILLS_DATA.map((skill, index) => (
          <SkillBar key={index} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  );
};
