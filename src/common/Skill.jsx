import React from 'react'
import tailwind from "../stack/Tailwind.png"
import html from "../stack/HTML.png"
import css from "../stack/CSS.png"
import nodejs from "../stack/NodeJs.svg"
import javascript from "../stack/Javascript.svg"
import expressjs from "../stack/Express.png"
import mongodb from "../stack/MongoDB.svg"
import react from "../stack/React.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const skill1 = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "TailwindCSS", logo: tailwind },
  { name: "JavaScript", logo: javascript },
  { name: "ReactJs", logo: react },
  { name: "NodeJs", logo: nodejs },
  { name: "Expressjs", logo: expressjs },
  { name: "MongoDb", logo: mongodb },
]

const skill2 = [
  "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215185252/DSA.png"
]

const codingProfiles = [
  {
    name: "LeetCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/u/vishalpatel45/"
  },
  {
    name: "GeeksforGeeks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    link: "https://www.geeksforgeeks.org/user/vp10893jm/"
  },
  {
    name: "CodeChef",
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
    link: "https://www.codechef.com/users/vishalpatel15"
  },
  {
    name: "Codeforces",
    logo: "https://sta.codeforces.com/s/66382/images/codeforces-sponsored-by-ton.png",
    link: "https://codeforces.com/profile/VishalPatel63"
  },
  {
    name: "HackerRank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    link: "https://www.hackerrank.com/profile/vp1088124"
  }
]

const cardClasses =
  "flex flex-col justify-center items-center bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-500/40 hover:border-blue-400/50 hover:shadow-blue-500/50 transition-all h-[120px] w-full"

const gridClasses =
  "grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-6 justify-items-center"

export const Skill = () => {
  return (
    <motion.div
      className="mx-auto w-11/12 max-w-[1000px] mt-14 pb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Skills
      </h1>

      {/* Development Skills */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 font-semibold text-center">
          Development Skills
        </h2>
        <div className={gridClasses}>
          {skill1.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className={cardClasses}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-white text-sm font-medium mt-2">
                {skill.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coding Skills */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 font-semibold text-center">
          Coding Skills
        </h2>
        <div className={gridClasses}>
          {skill2.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className={cardClasses}
            >
              <img
                src={skill}
                alt="DSA"
                className="w-12 h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coding Profiles */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 font-semibold text-center">
          My Coding Profiles
        </h2>
        <div className={gridClasses}>
          {codingProfiles.map((coding, index) => (
            <Link
              key={index}
              to={coding.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className={cardClasses}
              >
                <img
                  src={coding.logo}
                  alt={coding.name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <h2 className="text-white text-sm font-medium">
                  {coding.name}
                </h2>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
