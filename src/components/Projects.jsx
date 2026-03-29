import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.3 } }
  };

  return (
    <section className="section container">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-gradient">Featured Projects</h2>
        <p style={{ margin: '0 auto' }}>Building the future, one commit at a time</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="glass-card flex"
            style={{ flexDirection: 'column', height: '100%' }}
          >
            <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
            <p className="mb-4" style={{ fontSize: '1.05rem', flexGrow: 1 }}>{project.description}</p>
            
            <div className="tag-container" style={{ marginTop: 'auto' }}>
              {project.techStack.map((tech, id) => (
                <span key={id} className="tag" style={{ background: 'transparent', borderColor: 'rgba(0,0,0,0.1)', color: 'var(--text-secondary)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
