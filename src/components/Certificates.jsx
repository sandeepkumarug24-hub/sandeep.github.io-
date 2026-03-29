import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const Certificates = () => {
  const { certificates } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="section container">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient">Certifications</h2>
        <p style={{ margin: '0 auto' }}>My professional achievements & milestones</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certificates.map((cert, index) => (
          <motion.a 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index} 
            className="glass-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{cert.title}</h3>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '0.25rem' }}>{cert.issuer}</p>
            <p style={{ fontSize: '0.875rem' }}>{cert.date}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;
