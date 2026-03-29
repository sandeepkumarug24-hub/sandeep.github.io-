import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const StudyAccounts = () => {
  const { studyAccounts } = PORTFOLIO_DATA;

  const getIconUrl = (platform) => {
    const domainMap = {
      github: 'github.com',
      linkedin: 'linkedin.com',
      leetcode: 'leetcode.com',
      codeforces: 'codeforces.com',
      hackerrank: 'hackerrank.com'
    };
    const domain = domainMap[platform.toLowerCase()] || 'example.com';
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section className="section container">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-gradient">Study Profiles</h2>
        <p style={{ margin: '0 auto' }}>Find my code and problem-solving history online</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2" 
        style={{ gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {studyAccounts.map((account, index) => (
          <motion.a
            key={index}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-4"
            style={{ padding: '1.5rem', textDecoration: 'none' }}
            variants={itemVariants}
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
              <img 
                src={getIconUrl(account.platform)} 
                alt={`${account.platform} icon`} 
                style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div>
              <h3 style={{ marginBottom: '0', fontSize: '1.25rem' }}>{account.platform}</h3>
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600 }}>Explore Profile ↗</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default StudyAccounts;
