import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Global Elements */}
      <CustomCursor />
      
      {/* Glassmorphism Ambient Animated Background */}
      <div className="glass-bubbles">
        <div className="bubble b1"></div>
        <div className="bubble b2"></div>
        <div className="bubble b3"></div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
