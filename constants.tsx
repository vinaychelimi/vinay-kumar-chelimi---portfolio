import React from 'react';
import type { EducationItem, ProjectItem, SkillItem, CertificationItem, AchievementItem } from './types';
import { FaPython, FaCode, FaJava, FaTrophy, FaMicrochip, FaUsers, FaCertificate } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';

export const NAV_LINKS = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Anantha Lakshmi Institute of Technology & Science, Anantapur',
    degree: 'B.TECH – Electronics and Communication Engineering',
    period: '2022 - 2025',
    percentage: '75%',
  },
  {
    institution: 'PVKK Institute of Technology, Anantapur',
    degree: 'DIPLOMA in Electronics and Communication Engineering',
    period: '2019 - 2022',
    percentage: '87%',
  },
  {
    institution: 'Good Children English Medium High School, Anantapur',
    degree: 'Secondary School of Education',
    period: '2018 - 2019',
    percentage: '98%',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
    {
    title: 'Futuristic Personal Portfolio',
    description: 'A responsive, interactive personal portfolio featuring a futuristic UI with glassmorphism, neon glows, and smooth animations.',
    tech: 'React, TypeScript, Tailwind CSS, Framer Motion',
    image: '/assets/portfolio.png',
    details: [
        'Built from scratch using a modern frontend stack.',
        'Fully responsive design for desktop, tablet, and mobile.',
        'Interactive particle background using tsparticles.',
        'Smooth page scrolling and section-reveal animations with Framer Motion.',
        'Includes a mock admin panel with charts for a complete full-stack feel.'
    ],
    link: 'https://vinay-kumar-portfolio-xi.vercel.app/',
  },
  {
    title: 'The Memories Photography Website',
    description: 'A fully responsive photography website for a real client, designed to showcase their work and attract new customers.',
    tech: 'WordPress, CSS, Plugins',
    image: '/assets/memories.png',
     details: [
        'Customized a WordPress theme to align with the client\'s brand identity.',
        'Integrated essential plugins for contact forms, photo galleries, and SEO.',
        'Implemented basic CSS animations to create an engaging user experience.',
        'Ensured the website is optimized for performance and fast loading times.'
    ],
    link: 'https://thememoriesstudio.in/',
  },
  {
    title: 'Vehicle Tracking Subsystem',
    description: 'A real-time vehicle location tracking system using Arduino and GPS modules with user notifications for geofencing.',
    tech: 'Arduino, GPS, C',
    image: '/assets/vehicle.png',
    details: [
        'Developed C code for the Arduino microcontroller to process GPS data.',
        'Utilized a GPS module to accurately capture vehicle coordinates.',
        'Designed a system to send instant alerts if the vehicle moves outside a predefined boundary.',
        'Wrote and optimized code to transmit location information efficiently.'
    ],
    link: 'https://github.com/vinay1527/vinay_kumar_portfolio',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'Java', level: 80 },
  { name: 'C', level: 85 },
  { name: 'MySQL', level: 75 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  { name: 'Introduction to Networking for Cyber professionals', issuer: 'Cisco', icon: <SiCisco size={40} className="text-cyan-400" /> },
  { name: 'CCNAv7: Introduction to Networks', issuer: 'Cisco', icon: <SiCisco size={40} className="text-cyan-400" /> },
  { name: 'Java Full Stack Internship', issuer: 'Tap Academy', icon: <FaJava size={40} className="text-red-400" /> },
  { name: 'Python Full Stack Development', issuer: 'Blackbucks', icon: <FaPython size={40} className="text-yellow-400" /> },
  { name: 'VLSI Internship', issuer: 'SkillDzire', icon: <FaCode size={40} className="text-purple-400" /> },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
    { title: '1st Prize, Poster Presentation', event: '"Flexible Electronics" at JNTUA ECE Fest', icon: <FaTrophy size={40} className="text-yellow-400" /> },
    { title: 'Winner, Circuit Hunt', event: 'Technical competition conducted at JNTUA', icon: <FaMicrochip size={40} className="text-cyan-400" /> },
    { title: 'Workshop Attendee', event: '"Electric Grid and Power Systems" at JNTUP', icon: <FaCertificate size={40} className="text-green-400" /> },
    { title: 'Cultural Committee Member', event: 'Successfully organized college fest activities', icon: <FaUsers size={40} className="text-purple-400" /> },
];


export const CONTACT_DETAILS = {
    email: "chelimivinaykumar.15@gmail.com",
    phone: "8688296166",
}

export const SOCIAL_LINKS = {
    linkedin: "http://www.linkedin.com/in/chelimi-vinay-kumar",
    github: "https://github.com/vinaychelimi",
    email: CONTACT_DETAILS.email,
    phone: CONTACT_DETAILS.phone,
}