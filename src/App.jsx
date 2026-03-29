import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Hero from './components/Hero';
import Skills from './components/Skills';
import StudyAccounts from './components/StudyAccounts';
import Certificates from './components/Certificates';
import Projects from './components/Projects';

function App() {
  const [init, setInit] = useState(false);

  // Initialize Particle Engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 150, links: { opacity: 0.5 } }
      },
    },
    particles: {
      color: { value: ["#ff007f", "#00d2ff", "#7000ff"] },
      links: {
        color: "#000000",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 2,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.6 },
      shape: { type: ["circle", "triangle", "square"] },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  };

  return (
    <AnimatePresence>
      {init && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Particles id="tsparticles" options={particlesOptions} />
        </motion.div>
      )}

      <div className="portfolio-app">
        <main>
          <Hero />
          <StudyAccounts />
          <Skills />
          <Certificates />
          <Projects />
        </main>
        
        <footer style={{ borderTop: '2px solid rgba(0,0,0,0.05)', marginTop: '4rem', padding: '2rem 0', background: 'var(--surface-color)', backdropFilter: 'blur(10px)' }}>
          <div className="container text-center" style={{ color: 'var(--text-secondary)' }}>
            <motion.p whileHover={{ color: 'var(--accent-primary)', scale: 1.05 }} style={{ fontWeight: 800 }}>
              © {new Date().getFullYear()} Sandeep Kumar. Built with React & Framer Motion.
            </motion.p>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
