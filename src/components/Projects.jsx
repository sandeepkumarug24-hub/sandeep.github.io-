import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section className="section container animate-fade-in animate-delay-3">
      <div className="text-center mb-8">
        <h2>Projects Showcase</h2>
        <p style={{ margin: '0 auto' }}>Some things I've built</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="mb-2">{project.title}</h3>
            <p className="mb-4" style={{ fontSize: '1rem', flexGrow: 1 }}>{project.description}</p>
            
            <div className="tag-container mb-8">
              {project.techStack.map((tech, id) => (
                <span key={id} className="tag" style={{ background: 'transparent', borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4" style={{ marginTop: 'auto' }}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1 }}>
                Live Demo
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
