import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NAV_LINKS } from '../constants';
import { HiMenu, HiX } from 'react-icons/hi';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = () => (
    <>
      {NAV_LINKS.map((link) => (
        <ScrollLink
          key={link.name}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-medium tracking-wider cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:text-glow-blue px-3 py-2"
          activeClass="text-cyan-400 text-glow-blue"
          onClick={() => setIsMenuOpen(false)}
        >
          {link.name}
        </ScrollLink>
      ))}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ScrollLink to="hero" smooth={true} duration={500}>
            <div className="text-3xl font-bold font-orbitron text-purple-400 text-glow-purple tracking-widest transition-all duration-300 hover:text-cyan-400 hover:text-glow-blue cursor-pointer">
                cvk
            </div>
        </ScrollLink>
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden glassmorphism flex flex-col items-center py-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
};