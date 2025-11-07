import React from 'react';
import { Code2, Sparkles, Wand2, Server, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ChatGPT-like Assistant',
    description:
      'Conversational UI powered by FastAPI and OpenAI, featuring streaming responses and memory.',
    icon: <Sparkles className="h-5 w-5 text-cyan-400" />,
    tags: ['FastAPI', 'React', 'OpenAI', 'Streaming'],
    link: '#',
  },
  {
    title: '3D Product Explorer',
    description:
      'WebGL + Spline experience for exploring products in 3D with hotspots and animations.',
    icon: <Wand2 className="h-5 w-5 text-cyan-400" />,
    tags: ['Spline', 'Three.js', 'Animations'],
    link: '#',
  },
  {
    title: 'Realtime Analytics Dashboard',
    description:
      'Socket-driven metrics panel with anomaly detection and server-side aggregation.',
    icon: <Server className="h-5 w-5 text-cyan-400" />,
    tags: ['WebSockets', 'Python', 'Tailwind'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Code2 className="h-6 w-6 text-cyan-400" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900/50 px-3 py-1 ring-1 ring-white/10">
                {p.icon}
                <span className="text-xs text-slate-300">Case Study</span>
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-slate-900/60 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-cyan-300">
                <span className="text-sm">View</span>
                <ExternalLink className="h-4 w-4" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition group-hover:opacity-100" style={{
                background:
                  'radial-gradient(600px circle at var(--x) var(--y), rgba(34,211,238,0.15), transparent 40%)',
              }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
