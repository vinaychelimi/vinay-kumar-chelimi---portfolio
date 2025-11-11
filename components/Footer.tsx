import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
    onAdminClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="glassmorphism py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors duration-300 hover:text-glow-blue">
            <FaLinkedin />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors duration-300 hover:text-glow-blue">
            <FaGithub />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-2xl hover:text-cyan-400 transition-colors duration-300 hover:text-glow-blue">
            <FaEnvelope />
          </a>
          <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-2xl hover:text-cyan-400 transition-colors duration-300 hover:text-glow-blue">
            <FaPhone />
          </a>
        </div>
        <p>Designed & Built by Vinay Kumar Chelimi</p>
        <p className="text-sm mt-2">
            © {new Date().getFullYear()} Vinay Kumar Chelimi. All Rights Reserved.
        </p>
         <button onClick={onAdminClick} className="text-xs text-gray-700 mt-4 hover:text-gray-500 transition-colors">
            Admin Panel
        </button>
      </div>
    </footer>
  );
};