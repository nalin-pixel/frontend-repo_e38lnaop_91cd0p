import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient tint for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-sm text-slate-200">AI-powered portfolio</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-6xl">
          Building intelligent experiences with code and creativity
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          I craft modern web apps, integrate AI models, and design playful interactive
          interfaces. Explore selected work, skills, and ways to connect.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Rocket className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
