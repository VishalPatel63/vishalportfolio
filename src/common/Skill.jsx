// import React from 'react'
// import tailwind from "../stack/Tailwind.png"
// import html from "../stack/HTML.png"
// import css from "../stack/CSS.png"
// import nodejs from "../stack/NodeJs.svg"
// import javascript from "../stack/Javascript.svg"
// import expressjs from "../stack/Express.png"
// import mongodb from "../stack/MongoDB.svg"
// import react from "../stack/React.png"
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

// const skill1 = [
//   { name: "HTML", logo: html },
//   { name: "CSS", logo: css },
//   { name: "TailwindCSS", logo: tailwind },
//   { name: "JavaScript", logo: javascript },
//   { name: "ReactJs", logo: react },
//   { name: "NodeJs", logo: nodejs },
//   { name: "Expressjs", logo: expressjs },
//   { name: "MongoDb", logo: mongodb },
// ]

// const skill2 = [
//   "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
//   "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
//   "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215185252/DSA.png",
//   "https://www.python.org/static/community_logos/python-logo.png"
// ]

// const codingProfiles = [
//   {
//     name: "LeetCode",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
//     link: "https://leetcode.com/u/vishalpatel45/"
//   },
//   {
//     name: "GeeksforGeeks",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
//     link: "https://www.geeksforgeeks.org/user/vp10893jm/"
//   },
//   {
//     name: "CodeChef",
//     logo: "https://cdn.codechef.com/images/cc-logo.svg",
//     link: "https://www.codechef.com/users/vishalpatel15"
//   },
//   {
//     name: "Codeforces",
//     logo: "https://sta.codeforces.com/s/66382/images/codeforces-sponsored-by-ton.png",
//     link: "https://codeforces.com/profile/VishalPatel63"
//   },
//   {
//     name: "HackerRank",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
//     link: "https://www.hackerrank.com/profile/vp1088124"
//   }
// ]

// const cardClasses =
//   "flex flex-col justify-center items-center bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-500/40 hover:border-blue-400/50 hover:shadow-blue-500/50 transition-all h-[120px] w-full"

// const gridClasses =
//   "grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-6 justify-items-center"

// export const Skill = () => {
//   return (
//     <motion.div
//       className="mx-auto w-11/12 max-w-[1000px] mt-14 pb-10"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//     >
//       {/* Title */}
//       <h1 className="text-center text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//         Skills
//       </h1>

//       {/* Development Skills */}
//       <div className="mb-12">
//         <h2 className="text-xl text-white mb-6 font-semibold text-center">
//           Development Skills
//         </h2>
//         <div className={gridClasses}>
//           {skill1.map((skill, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.08 }}
//               transition={{ duration: 0.3 }}
//               className={cardClasses}
//             >
//               <img
//                 src={skill.logo}
//                 alt={skill.name}
//                 className="w-12 h-12 object-contain"
//               />
//               <h2 className="text-white text-sm font-medium mt-2">
//                 {skill.name}
//               </h2>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Coding Skills */}
//       <div className="mb-12">
//         <h2 className="text-xl text-white mb-6 font-semibold text-center">
//           Coding Skills
//         </h2>
//         <div className={gridClasses}>
//           {skill2.map((skill, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.08 }}
//               transition={{ duration: 0.3 }}
//               className={cardClasses}
//             >
//               <img
//                 src={skill}
//                 alt="DSA"
//                 className="w-12 h-12 object-contain"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Coding Profiles */}
//       <div className="mb-12">
//         <h2 className="text-xl text-white mb-6 font-semibold text-center">
//           My Coding Profiles
//         </h2>
//         <div className={gridClasses}>
//           {codingProfiles.map((coding, index) => (
//             <Link
//               key={index}
//               to={coding.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.08 }}
//                 transition={{ duration: 0.3 }}
//                 className={cardClasses}
//               >
//                 <img
//                   src={coding.logo}
//                   alt={coding.name}
//                   className="w-12 h-12 object-contain mb-2"
//                 />
//                 <h2 className="text-white text-sm font-medium">
//                   {coding.name}
//                 </h2>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaRobot,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    accent: "cyan",
    skills: ["C++", "C", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    accent: "green",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: <FaServer />,
    accent: "purple",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JSON", "Web Services"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    accent: "yellow",
    skills: ["MongoDB", "MySQL", "SQL", "CTEs", "Window Functions", "Joins", "Aggregations"],
  },
  {
    title: "Core Computer Science",
    icon: <FaBrain />,
    accent: "pink",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Analytics",
    icon: <FaChartBar />,
    accent: "orange",
    skills: ["MS Excel", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "AI & GenAI",
    icon: <FaRobot />,
    accent: "blue",
    skills: ["Claude AI", "LLMs", "Prompt Engineering", "Generative AI", "RAG", "Vector Databases"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    accent: "indigo",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const colors = {
  cyan: {
  bg: "bg-blue-500",
    card: "border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    title: "text-blue-400",
    icon: "text-blue-400 bg-blue-500/10",
    badge: "text-blue-300 border-blue-500/40 hover:bg-blue-500/10",
    glow: "bg-blue-500/10",
  },
  green: {
    bg: "bg-pink-500",
    card: "border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    title: "text-pink-400",
    icon: "text-pink-400 bg-pink-500/10",
    badge: "text-pink-300 border-pink-500/40 hover:bg-pink-500/10",
    glow: "bg-pink-500/10",
  },
  purple: {
  bg: "bg-blue-500",
    card: "border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    title: "text-blue-400",
    icon: "text-blue-400 bg-blue-500/10",
    badge: "text-blue-300 border-blue-500/40 hover:bg-blue-500/10",
    glow: "bg-blue-500/10",
  },
  yellow: {
    bg: "bg-pink-500",
    card: "border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    title: "text-pink-400",
    icon: "text-pink-400 bg-pink-500/10",
    badge: "text-pink-300 border-pink-500/40 hover:bg-pink-500/10",
    glow: "bg-pink-500/10",
  },
  pink: {
  bg: "bg-blue-500",
    card: "border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    title: "text-blue-400",
    icon: "text-blue-400 bg-blue-500/10",
    badge: "text-blue-300 border-blue-500/40 hover:bg-blue-500/10",
    glow: "bg-blue-500/10",
  },
  orange: {
    bg: "bg-pink-500",
    card: "border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    title: "text-pink-400",
    icon: "text-pink-400 bg-pink-500/10",
    badge: "text-pink-300 border-pink-500/40 hover:bg-pink-500/10",
    glow: "bg-pink-500/10",
  },
  blue: {
    bg: "bg-blue-500",
    card: "border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    title: "text-blue-400",
    icon: "text-blue-400 bg-blue-500/10",
    badge: "text-blue-300 border-blue-500/40 hover:bg-blue-500/10",
    glow: "bg-blue-500/10",
  },
  indigo: {
    bg: "bg-pink-500",
    card: "border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    title: "text-pink-400",
    icon: "text-pink-400 bg-pink-500/10",
    badge: "text-pink-300 border-pink-500/40 hover:bg-pink-500/10",
    glow: "bg-pink-500/10",
  },
};

export const Skill = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
          Skills
        </h2>
        <p className="text-richblack-300 mt-4 max-w-3xl mx-auto">
          Technologies, programming languages and tools I use to build scalable web applications and AI-powered solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const c = colors[category.accent];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className={`
                relative overflow-hidden rounded-2xl 
                bg-transparent border ${c.card} p-6 
                min-h-[250px] transition-all duration-300
                ${c.glow}
              `}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 h-1 w-full ${c.bg}`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${c.icon}`}>
                  {category.icon}
                </div>
                <h2 className={`text-lg font-bold ${c.title}`}>
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${c.badge}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
