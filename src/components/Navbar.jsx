import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-base font-semibold tracking-tight">
          <span className="text-cyan-400">AI</span>folio
        </a>
        <div className="hidden items-center gap-6 text-sm sm:flex">
          <a href="#projects" className="text-slate-200 hover:text-white">Projects</a>
          <a href="#about" className="text-slate-200 hover:text-white">About</a>
          <a href="#contact" className="text-slate-200 hover:text-white">Contact</a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 sm:hidden">
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
