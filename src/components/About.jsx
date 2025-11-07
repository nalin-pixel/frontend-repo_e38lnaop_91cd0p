import React from 'react';
import { User, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <User className="h-6 w-6 text-cyan-400" />
          <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
          <p className="text-slate-300">
            I’m a full‑stack developer focused on crafting delightful, intelligent interfaces.
            My sweet spot is blending modern web tech with AI to build helpful, playful
            experiences. I love rapid prototyping, clean design systems, and shipping
            production‑ready code.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10">
              <Cpu className="h-5 w-5 text-cyan-300" />
              <p className="mt-2 text-sm text-slate-300">AI: OpenAI, vector search, embeddings, LLM orchestration</p>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10">
              <Cpu className="h-5 w-5 text-cyan-300" />
              <p className="mt-2 text-sm text-slate-300">Web: React, Tailwind, Vite, Framer Motion</p>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10">
              <Cpu className="h-5 w-5 text-cyan-300" />
              <p className="mt-2 text-sm text-slate-300">Backend: FastAPI, Python, MongoDB, REST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
