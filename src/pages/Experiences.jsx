import React from 'react';

const experiences = [
  
{
  title: "Software Development Intern",
  subtitle: "Banaras Locomotive Works (BLW), Varanasi · MERN Stack Development",
  date: "Jun 2025 – Aug 2025",
  theme: "cyan",
  points: [
    "Developed a full-stack Inventory Management System using React.js, Node.js, Express.js, and MongoDB to streamline locomotive spare parts tracking.",
    "Designed responsive dashboards and RESTful APIs with JWT-based authentication, improving inventory management and user access control.",
    "Implemented CRUD operations, search, filtering, and reporting features, reducing manual inventory tracking and improving operational efficiency."
  ]
},

];

export default function ExperienceSection() {
  return (
    <div className="bg-[#030614] min-h-screen py-16 px-4 font-sans text-slate-300 relative overflow-hidden">
      
      {/* BACKGROUND NETWORK CONNECTING NODES (IMAGE 2 EFFECT) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-28 left-[12px] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
        <div className="absolute top-44 left-[38px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
        <div className="absolute top-64 left-[15px] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
        <div className="absolute bottom-36 left-[28px] w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
      </div>

      {/* SECTION HEADER */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
          Experience
        </h2>
        <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#64748b] uppercase mt-2">
          MY JOURNEY SO FAR
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="max-w-4xl mx-auto relative pl-10 md:pl-16">

        {/* VERTICAL CONNECTING LINE */}
        <div className="absolute left-3 md:left-5 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#38bdf8] via-[#a855f7] to-[#1e293b]" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isCyan = exp.theme === 'cyan';

            return (
              <div key={index} className="relative group">

                {/* GLOWING DOT */}
                <div className="absolute -left-[35px] md:-left-[51px] top-8 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                    isCyan 
                      ? 'bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] group-hover:shadow-[0_0_25px_#38bdf8]' 
                      : 'bg-[#c084fc] shadow-[0_0_15px_#c084fc] group-hover:shadow-[0_0_25px_#c084fc]'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* EXPERIENCE CARD CONTAINER WITH SIDE GLOW HIGHLIGHT */}
                <div 
                  className={`bg-[#070c1e] rounded-2xl p-6 md:p-8 relative transition-all duration-300 cursor-pointer overflow-hidden border ${
                    isCyan
                      ? 'border-[#1e293b] hover:border-[#38bdf8]/80 shadow-[0_4px_20px_rgba(56,189,248,0.08)] hover:shadow-[0_10px_35px_rgba(56,189,248,0.25)] hover:-translate-y-1.5'
                      : 'border-[#1e293b] hover:border-[#a855f7]/80 shadow-[0_4px_20px_rgba(168,85,247,0.08)] hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)] hover:-translate-y-1.5'
                  }`}
                >
                  
                  {/* LEFT BORDER NEON GLOW LINE (SCREENSHOT MATCH) */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-[3px] shadow-[0_0_12px_2px] ${
                      isCyan
                        ? 'bg-[#00f2fe] shadow-[#00f2fe]'
                        : 'bg-[#b92b27] bg-gradient-to-b from-[#c084fc] to-[#a855f7] shadow-[#c084fc]'
                    }`} 
                  />

                  {/* TOP-LEFT CORNER ACCENT GLOW */}
                  <div 
                    className={`absolute top-0 left-0 w-24 h-[3px] shadow-[0_0_10px_1px] ${
                      isCyan
                        ? 'bg-[#00f2fe] shadow-[#00f2fe]'
                        : 'bg-[#c084fc] shadow-[#c084fc]'
                    }`}
                  />

                  {/* HEADER CONTENT */}
                  <div className="flex flex-col items-center justify-center text-center relative mb-8">
                    
                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {exp.title}
                    </h3>
                    
                    {/* SUBTITLE */}
                    <p className={`text-sm font-semibold mt-1.5 transition-colors duration-300 ${
                      isCyan ? 'text-[#38bdf8]' : 'text-[#c084fc]'
                    }`}>
                      {exp.subtitle}
                    </p>

                    {/* DATE BADGE */}
                    <div className={`mt-4 md:mt-0 md:absolute md:right-0 md:top-0 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      isCyan
                        ? 'border-[#38bdf8]/50 bg-[#0284c7]/20 text-[#38bdf8] group-hover:bg-[#0284c7]/40'
                        : 'border-[#c084fc]/50 bg-[#7e22ce]/20 text-[#c084fc] group-hover:bg-[#7e22ce]/40'
                    }`}>
                      {exp.date}
                    </div>
                  </div>

                  {/* BULLET POINTS */}
                  <ul className="space-y-4 max-w-2xl mx-auto">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start justify-center text-center gap-3 text-sm md:text-base text-[#94a3b8] leading-relaxed">
                        <span className={`text-[10px] mt-1.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125 ${
                          isCyan ? 'text-[#38bdf8]' : 'text-[#c084fc]'
                        }`}>
                          ►
                        </span>
                        <span className="max-w-xl text-slate-300 transition-colors duration-300 group-hover:text-slate-100">{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
