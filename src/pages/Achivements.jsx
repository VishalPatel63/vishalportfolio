import React from 'react'
import { motion } from 'framer-motion';
function Achivements(){
    const achivement = [
 {
    value: "1000+",
    label: "DSA PROBLEMS",
  },
  {
    value: "2★",
    label: "CODECHEF",
  },
  {
    value: "5%",
    label: "LEETCODE KNIGHT",
  },
  {
    value: "Top 2%",
    label: "NPTEL ML",
  },
];
  return (
    <>
    {/* Achievement Stats */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 py-8  border-white/10"
>
  {achivement.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center group"
    >
      <h2
        className="text-2xl lg:text-3xl font-extrabold text-cyan-300 tracking-tighter
                   drop-shadow-[0_0_25px_#67e8f9] 
                   group-hover:drop-shadow-[0_0_35px_#22d3ee]
                   transition-all duration-300"
      >
        {item.value}
      </h2>

      {/* Smaller Label Text */}
     <p className="mt-2 text-xl sm:text-2xl font-extrabold text-[#00D9FF] tracking-[2px] text-center whitespace-nowrap">
  {item.label}
</p>
    </motion.div>
  ))}
</motion.div>
    </>
  )
}
export default Achivements;
