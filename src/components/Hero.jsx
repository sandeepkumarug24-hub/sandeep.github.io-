import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const Hero = () => {
  const { name, title, bio, resumeLink, contactText, contactEmail } = PORTFOLIO_DATA.hero;

  return (
    <section className="section container text-center animate-fade-in">
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', border: 'none', background: 'transparent', boxShadow: 'none' }}>
        <h1 className="mb-4">
          Hi, I'm <span style={{ color: 'var(--accent-primary)' }}>{name}</span>
        </h1>
        <h2 className="mb-8" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
          {title}
        </h2>
        <p className="mb-8" style={{ margin: '0 auto 2rem auto' }}>
          {bio}
        </p>
        <div className="flex justify-center gap-4">
          <a href={contactEmail} className="btn btn-primary">{contactText}</a>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Resume / Documents</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
