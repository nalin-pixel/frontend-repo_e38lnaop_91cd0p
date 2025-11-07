import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // Mouse spotlight for project cards
  React.useEffect(() => {
    const handler = (e) => {
      const targets = document.querySelectorAll('[data-spotlight]');
      targets.forEach((el) => {
        el.style.setProperty('--x', e.clientX + 'px');
        el.style.setProperty('--y', e.clientY + 'px');
      });
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <Hero />
      <div data-spotlight>
        <Projects />
      </div>
      <About />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} — Built with React, Tailwind and a playful 3D touch.
      </footer>
    </div>
  );
}

export default App;
