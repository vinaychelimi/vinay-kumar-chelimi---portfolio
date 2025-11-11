import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { CONTACT_DETAILS } from '../constants';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // 🔹 Replace these with your actual EmailJS IDs
    emailjs.sendForm(
      'service_ntzzvcv', // <-- your EmailJS service ID
      'template_suc4cil', // <-- your EmailJS template ID
      formRef.current,
      'tXT6SEQwsOqvaHihf' // <-- your EmailJS public key
    )
    .then(() => {
      console.log('✅ Message sent successfully!');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('❌ Email send failed:', error);
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <Section id="contact" title="Get In Touch">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
      >
        <p className="text-lg text-gray-300 mb-8">
          Have a question or want to work together? Feel free to reach out directly or use the form below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-center gap-3 text-cyan-400 hover:text-glow-blue transition-all">
            <FaEnvelope size={20} />
            <span>{CONTACT_DETAILS.email}</span>
          </a>
          <a href={`tel:${CONTACT_DETAILS.phone}`} className="flex items-center gap-3 text-cyan-400 hover:text-glow-blue transition-all">
            <FaPhone size={20} />
            <span>{CONTACT_DETAILS.phone}</span>
          </a>
        </div>

        {submitted ? (
          <div className="text-center p-8 glassmorphism rounded-lg border border-green-500">
            <h3 className="text-2xl font-bold text-green-400">Thank you!</h3>
            <p className="text-gray-300 mt-2">Your message has been sent. I'll get back to you soon.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <input 
                type="text" 
                name="from_name"
                placeholder="Your Name" 
                required 
                className="w-full p-4 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="from_email"
                placeholder="Your Email" 
                required 
                className="w-full p-4 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Your Message" 
                required 
                rows={5}
                className="w-full p-4 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="px-10 py-3 bg-cyan-500 text-black font-semibold rounded-md transition-all duration-300 hover:bg-cyan-400 hover:neon-glow-blue"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </Section>
  );
};
 