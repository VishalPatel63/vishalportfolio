import React, { useState } from 'react'
import vishalIm from "../userAsset/visha.png"
import { motion } from 'framer-motion'
import Footer from '../common/Footer'

export const About = () => {
  const [seemore, setSeeMore] = useState(false);

  return (
    <div className="flex flex-col min-h-screen"> {/* Full height flex layout */}

      {/* Main Content */}
      <div className="flex-1">
        <div className='flex flex-col mx-auto w-11/12 max-w-maxContent mt-14 pb-6'>

          {/* Image + About Content */}
          <div className='flex flex-col lg:flex-row items-center lg:justify-between'>
            {/* Image Section */}
            <motion.div
              className='h-[250px] sm:h-[350px] lg:h-[400px] w-[250px] sm:w-[350px] lg:w-[400px]  
              rounded-full relative shadow-[0px_0px_20px_rgba(255,255,255,0.2)] 
              hover:shadow-[0px_0px_30px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out
              bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
            >
              <img src={vishalIm} alt='' className='w-full h-full rounded-full absolute' />
            </motion.div>

            {/* About Content */}
            <motion.div
              className='w-full lg:w-[54%] flex flex-col mt-10 gap-y-6 text-center lg:text-left'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
             <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md'>
  About Me
</h1>

<h2 className='text-2xl sm:text-3xl mt-1 font-semibold text-white tracking-wide'>
  Full Stack Developer
</h2>

<p className='mt-1 text-base sm:text-lg font-medium text-pure-greys-300 leading-relaxed max-w-3xl px-4 lg:px-0'>
  I am a passionate <span className="text-blue-400 font-semibold">Full Stack Web Developer</span> 
  , and Computer Science student, skilled in <span className="text-purple-400">React.js</span>, 
  <span className="text-purple-400"> Node.js</span>, <span className="text-purple-400">Express</span>, 
  <span className="text-purple-400"> MongoDB</span>, and <span className="text-purple-400">Tailwind CSS</span>.  
  I love building modern, responsive web applications and solving challenging problems in 
  <span className="text-blue-400 font-semibold"> Data Structures</span> and 
  <span className="text-blue-400 font-semibold"> Algorithms</span>.
</p>


              {/* Learn More Button */}
              <div className='flex justify-center lg:justify-start'>
  <motion.button
    onClick={() => setSeeMore(!seemore)}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 4px 20px rgba(90, 24, 154, 0.8)"
    }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="w-[160px] text-center font-semibold border border-gray-400 px-4 py-3 text-[16px] cursor-pointer rounded-lg shadow-md 
    bg-gradient-to-r from-[#5A189A] to-[#1E3A8A] text-white hover:shadow-purple-900/50 hover:brightness-110 transition-all duration-300 ease-in-out"
  >
    {seemore ? "See Less" : "See More"}
  </motion.button>
</div>

            </motion.div>
          </div>

          {/* Expanded More About Me Section */}
          {seemore && (
            <motion.div
              className="mt-6 p-6 bg-white/10 backdrop-blur-lg text-white rounded-lg shadow-lg 
              border border-richblack-400 hover:border-blue-400/50 transition-all duration-300 hover:shadow-blue-500/50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 border-b border-gray-600 pb-2">
                More About Me
              </h3>

              {/* Name Section */}
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-blue-300">Name:</h4>
                <p className="text-gray-200">Vishal Patel</p>
              </div>

              {/* Academic Details */}
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-blue-300">Education:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold text-white">B.Tech in Computer Science & Engineering:</span>
                    Madan Mohan Malaviya University of Technology, Gorakhpur
                    <span className="text-gray-400"> (2022 – 2026)</span>
                    — <span className="text-green-400">CGPA: 8.33</span>
                  </li>
                  <li>
                    <span className="font-semibold text-white">12th Grade (Science):</span>
                    Baderi Inter College, Jaunpur
                    <span className="text-gray-400"> (2021)</span>
                    — <span className="text-green-400">76.2%</span>
                  </li>
                  <li>
                    <span className="font-semibold text-white">10th Grade:</span>
                    Krishak Inter Mediate College, Mangari, Jaunpur
                    <span className="text-gray-400"> (2019)</span>
                    — <span className="text-green-400">83.33%</span>
                  </li>
                </ul>
              </div>

              {/* Skills & Interests */}
              <div>
                <h4 className="text-xl font-semibold text-blue-300">Skills & Interests:</h4>
                <p className="text-gray-300">
                  Passionate about <span className="text-purple-300">Full-Stack Development, Machine Learning</span>, 
                  and <span className="text-purple-300">Problem Solving</span>. Enthusiastic about coding competitions 
                  and open-source contributions.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
