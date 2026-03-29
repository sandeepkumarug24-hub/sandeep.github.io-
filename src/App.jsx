import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import StudyAccounts from './components/StudyAccounts';
import Projects from './components/Projects';

function App() {
  return (
    <div className="portfolio-app">
      <main>
        <Hero />
        <StudyAccounts />
        <Skills />
        <Projects />
      </main>
      <footer>
        <div className="container text-center mb-8">
          <p>© {new Date().getFullYear()} Sandeep Kumar. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
