import React, { useState } from 'react'
import vishalIm  from "../userAsset/visha.png"
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion';
export const Abouts = () => {
  // const [seemore, setSeeMore] = useState(false);
  return (
    <motion.div 
    className='flex flex-col mx-auto w-11/12 max-w-maxContent mt-14 pb-6'
          initial={{ opacity: 0, scale: 0.95 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 1 , ease:"easeOut" }}
    >
    <div className='flex flex-col lg:flex-row items-center lg:justify-between'>
      {/* Image Section */}
      <div 
        className='h-[250px] sm:h-[350px] lg:h-[400px] w-[250px] sm:w-[350px] lg:w-[400px]  rounded-full relative  shadow-[0px_0px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_0px_30px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out
        bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  
       '>
        <img src={vishalIm} alt='' className='w-full h-full rounded-full absolute' />
      </div>
      
      {/* About Content */}
      <div className='w-full lg:w-[54%] flex flex-col mt-10 gap-y-6 text-center lg:text-left'>
      <h1 className='text-4xl sm:text-5xl font-extrabold  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>About Me</h1>
      <h2 className='text-2xl sm:text-3xl mt-2 font-semibold text-white'>Full Stack Developer</h2>
      <p className='mt-4 text-base sm:text-lg font-medium text-richblack-50 px-4 lg:px-0 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod amet, quo quaerat repellendus
          voluptates dolorum maiores ullam expedita iusto dolorem deserunt facere suscipit labore, quasi
        </p>
        {/* Learn More Button */}

         <div className='flex justify-center lg:justify-start' >
          <Link  to='/About'>
          <motion.button  
               whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(90, 24, 154, 0.7)" }}
               transition={{ duration: 0.3 }}
               className="w-[160px] text-center font-semibold border border-gray-400 px-4 py-3 text-[16px] cursor-pointer rounded-lg shadow-lg 
               bg-gradient-to-r from-[#5A189A] to-[#1E3A8A] text-white hover:shadow-purple-900/50"
           >
            See More
            </motion.button>
          </Link>
        </div> 
        
      </div>
    </div>

    </motion.div>
  )
}
