// import React from 'react';
// import { Cards } from './Cards';
// import { motion } from 'framer-motion';

// export const Projectss = ({ skill, showAll = false }) => {
//   const visibleProjects = showAll ? skill : skill.slice(0, 3);

//   return (
//     <motion.div
//       className='w-11/12 mx-auto max-w-maxContent mt-14 pb-3 h-full'
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//     >
   
//       <div className='flex flex-wrap justify-center gap-10 w-full'>
//         {visibleProjects.map((item, index) => (
//           <Cards key={index} {...item} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

import React from "react";
import { Cards } from "./Cards";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Projectss = ({ skill, showAll = false }) => {
  const visibleProjects = showAll ? skill : skill.slice(0, 3);

  return (
    <section className="relative w-full py-10">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-11/12 mx-auto max-w-7xl"
      >
        <motion.div
          variants={containerVariants}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {visibleProjects.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.25 },
              }}
            >
              <Cards {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
