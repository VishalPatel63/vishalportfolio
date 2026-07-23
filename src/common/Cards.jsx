import React from 'react';
import { motion } from 'framer-motion';

export const Cards = ({ id, name, info, image, goto }) => {
  const moveHandler = () => {
    window.open(goto, "_blank");
  };

  return (
<motion.div
      className="relative w-full sm:w-[350px] p-6 
                 bg-transparent backdrop-blur-xl 
                 border border-white/20 
                 shadow-lg rounded-2xl overflow-hidden 
                 transition-all duration-300 
                 hover:scale-[1.04] hover:shadow-2xl
                 hover:border-blue-500/50
                 group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Main Content */}
      <div className="relative">
        <h2 className="text-2xl font-bold text-center text-white mb-3 tracking-tight">
          {name}
        </h2>
        
        <p className="text-center text-richblack-50 mb-6 text-[15px] leading-relaxed px-2">
          {info}
        </p>

        {/* Image Container with Glow */}
        <div 
          onClick={moveHandler} 
          className="w-full h-[190px] overflow-hidden rounded-xl relative cursor-pointer border border-white/10 group/image"
        >
          <motion.img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-500 group-hover/image:scale-110" 
          />
          
          {/* Hover Overlay + Glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
          />

          {/* Inner Glow on Image Hover */}
          <div className="absolute inset-0 ring-1 ring-white/30 ring-offset-2 ring-offset-[#1A2332] opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};
