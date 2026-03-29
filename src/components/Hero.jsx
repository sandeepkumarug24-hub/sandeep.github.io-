import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const Hero = () => {
  const { name, title, bio, resumeLink, contactText, contactEmail } = PORTFOLIO_DATA.hero;

  return (
    <section className="section container" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
      
      {/* Left Side: Text Description */}
      <motion.div 
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="hero-text-content" 
        style={{ flex: '1 1 500px', maxWidth: '600px' }}
      >
        <motion.h1 
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
        >
          Hi, I'm <span className="text-gradient">{name}</span>
        </motion.h1>
        
        <motion.h2 
          className="mb-8 text-gradient" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontWeight: 800, fontSize: 'clamp(2rem, 3vw, 3rem)' }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="mb-8" 
          style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 600, maxWidth: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {bio}
        </motion.p>
        
        <motion.div 
          className="flex"
          style={{ justifyContent: 'flex-start' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a 
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            href={contactEmail} 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}
          >
            {contactText}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Side: Profile Picture Frame */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 15, duration: 1.2, delay: 0.2 }}
        className="profile-container"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, margin: '0 auto' }}
      >
        <div className="crazy-border"></div>
        <img 
          src="./profile.jpg" 
          alt="Profile" 
          className="profile-img" 
          style={{ position: 'relative', zIndex: 10 }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/280x280?text=Public/profile.jpg' }} 
        />
      </motion.div>

    </section>
  );
};

export default Hero;
