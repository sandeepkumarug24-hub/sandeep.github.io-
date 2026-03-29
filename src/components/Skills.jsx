import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="section container animate-fade-in animate-delay-2">
      <div className="text-center mb-8">
        <h2>Technical Skills</h2>
        <p style={{ margin: '0 auto' }}>Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass-card">
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              {skillGroup.category}
            </h3>
            <div className="tag-container">
              {skillGroup.items.map((item, id) => (
                <span key={id} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
