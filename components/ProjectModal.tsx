import React from 'react';
// FIX: Import `Variants` type from `framer-motion` to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import type { ProjectItem } from '../types';
import { HiX } from 'react-icons/hi';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// FIX: Explicitly type `modalVariants` with `Variants` to resolve type incompatibility for the transition `type` property.
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { opacity: 0, scale: 0.8, y: 50 },
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] glassmorphism rounded-lg p-6 md:p-8 overflow-y-auto"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label="Close project details"
        >
          <HiX />
        </button>

        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-glow-purple mb-4 pr-8">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">About the Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          
          {project.details && project.details.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Technologies Used</h3>
            <p className="text-purple-400 font-medium">{project.tech}</p>
          </div>
          
          {project.link && project.link !== '#' && (
            <div className="pt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md transition-all duration-300 hover:bg-cyan-400 hover:neon-glow-blue">
                View Live Demo <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
