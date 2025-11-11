import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './Section';
import { PROJECTS_DATA } from '../constants';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectModal } from './ProjectModal';
import type { ProjectItem } from '../types';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <Section id="projects" title="Projects">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="group relative glassmorphism rounded-lg overflow-hidden p-6 h-full flex flex-col transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105" />
                <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <p className="text-purple-400 font-semibold text-sm">Tech: {project.tech}</p>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-md transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                    View Details <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
};