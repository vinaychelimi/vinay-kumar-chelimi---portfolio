import React from 'react';
// FIX: Import `Variants` type from `framer-motion` to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// FIX: Explicitly type `titleVariants` with `Variants` to resolve type incompatibility for the `ease` property.
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen container mx-auto px-6 py-20 flex flex-col justify-center">
      <motion.div 
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-orbitron mb-12 text-glow-purple uppercase tracking-widest"
          animate={{ y: [0, -8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          {title}
        </motion.h2>
      </motion.div>
      <div>{children}</div>
    </section>
  );
};
