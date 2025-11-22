
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
          <img src="https://scontent.fblr23-1.fna.fbcdn.net/v/t39.30808-1/580807992_1551783059588680_8479079005409076210_n.jpg?stp=c0.160.864.864a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=aGFPgY1kbgUQ7kNvwFo6jtj&_nc_oc=AdkSV69gfoaFWdTwN_AS49BZluFnrkJGw_3DkQhfQgjjrylVhAuPSvE-IP593DNkkf8&_nc_zt=24&_nc_ht=scontent.fblr23-1.fna&_nc_gid=lZ5iiTlJLLWnPNO36rt_1A&oh=00_AfiqivCBkX_uHspz_GDhX_VyAVFJ-Qhbt4dBLvNaaHnPhg&oe=69276467" alt="Vinay Kumar Chelimi" className="w-full h-full object-cover"/>
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
