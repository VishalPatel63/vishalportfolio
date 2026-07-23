import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#projects", label: "Projects" },
    { path: "#skills", label: "Skills" },
    { path: "#experiences", label: "Experiences" },
    { path: "#achivement", label: "Achievements" },
    { path: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-800 bg-[#030712]/90 backdrop-blur-md px-6 md:px-12 transition-all duration-300">
        
        {/* Modern & Perfect Logo */}
        <a href="#home" className="flex items-center gap-1.5 group cursor-pointer">
          <span className="text-cyan-400 font-mono text-xl font-bold transition-transform duration-300 group-hover:-translate-x-0.5">
            &lt;
          </span>
          <h1 className="text-xl sm:text-2xl font-black tracking-wider text-[#00D9FF] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.3)] group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.5)] transition-all duration-300">
            Vishal
          </h1>
          <span className="text-[#00D9FF] font-mono text-xl font-bold transition-transform duration-300 group-hover:translate-x-0.5">
            /&gt;
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8 text-sm text-pure-greys-5 font-medium">
          {navItems.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className="relative py-1 transition-colors duration-300 hover:text-cyan-400 group"
            >
              {label}
              {/* Subtle Animated Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200 text-2xl p-2 rounded-lg bg-slate-900 border border-pure-greys-5 focus:outline-none hover:text-cyan-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* Mobile Side Drawer Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#070c1e] text-pure-greys-5 border-l border-slate-800 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden flex flex-col`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-pure-greys-5/80">
          <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
            Navigation
          </span>
     <button
  onClick={() => setIsOpen(false)}
  className="text-white hover:text-cyan-400 text-2xl p-1 rounded-md transition-colors"
  aria-label="Close menu"
>
  <FiX className="w-7 h-7 text-white hover:text-cyan-400" />
</button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 text-base font-medium mt-6 px-6">
          {navItems.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400 border border-transparent hover:border-cyan-500/20"
            >
              {label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};
