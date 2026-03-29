import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } }
  };

  return (
    <section className="section container">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gradient">Tech Arsenal</h2>
        <p style={{ margin: '0 auto' }}>Weapons of choice for building modern web applications</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            className="glass-card"
            variants={itemVariants}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <h3 style={{ 
              marginBottom: '1rem', 
              borderBottom: '1px solid rgba(0, 240, 255, 0.2)', 
              paddingBottom: '0.8rem',
              color: 'var(--accent-primary)'
            }}>
              {skillGroup.category}
            </h3>
            <div className="tag-container">
              {skillGroup.items.map((item, id) => (
                <span key={id} className="tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
