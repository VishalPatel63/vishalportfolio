import React from 'react';
import { Cards } from './Cards';
import { motion } from 'framer-motion';

export const Projectss = ({ skill, showAll = false }) => {
  const visibleProjects = showAll ? skill : skill.slice(0, 3);

  return (
    <motion.div
      className='w-11/12 mx-auto max-w-maxContent mt-14 pb-3 h-full'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 cclassName="text-center text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {showAll ? "Projects" : "Our Projects"}
      </h1>

      <div className='flex flex-wrap justify-center gap-10 w-full'>
        {visibleProjects.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};


