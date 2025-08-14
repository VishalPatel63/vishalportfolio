import React from 'react'
import vishalIm  from "../userAsset/visha.png"
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';
import data from "../data"
import { useState } from 'react';
import Footer from '../common/Footer';
import { Projectss } from '../common/Projectss';
import { Contacts } from '../common/Contacts';
import { Skill } from '../common/Skill';
import { Abouts } from '../common/Abouts';
import { motion } from 'framer-motion';
export const Home = () => {
  const [skill1, setSkill] = useState(data);
  const navigate = useNavigate();
  return (
    <div>

    <div className='flex flex-col mx-auto w-11/12 max-w-maxContent mt-14'>
    <motion.div 
       className='flex flex-col  lg:flex-row w-11/12 mx-auto justify-between items-center lg:items-start'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      {/* Content Section */}
      <div className='mt-10 lg:mt-20 w-full lg:w-1/2 flex flex-col gap-y-6 text-center lg:text-left'>
<h1 className="text-lg text-pure-greys-300 tracking-wide">Hello, It's Me</h1>
<h1 className="text-4xl sm:text-5xl font-extrabold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
  Vishal Patel
</h1>

        <div className='text-xl sm:text-2xl font-bold mt-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>I'm a
          <span> </span>
          <TypeAnimation
             sequence={['Full Stack Developer', 1000, 'Web Developer', 1000, 'Backend Developer', 1000]}
             repeat={Infinity}
         omitDeletionAnimation={true}
     style={{ display: 'inline-block', color: '#14F1D9', fontSize: '1.5rem' }}

          />
        </div>
 <p className='mt-1 text-base sm:text-lg font-medium text-richblack-50 px-4 lg:px-0 leading-relaxed'>
  I’m a passionate <span className="text-blue-400 font-semibold">Full Stack Web Developer</span> 
   , and <span className="text-purple-400 font-semibold">Computer Science student</span>, skilled in 
  <span className="text-blue-300"> React.js</span>, <span className="text-blue-300">Node.js</span>, 
  <span className="text-blue-300"> Express</span>, <span className="text-blue-300">MongoDB</span>, 
  and <span className="text-blue-300">Tailwind CSS</span>. I enjoy creating modern, responsive web 
  applications and solving challenging problems in 
  <span className="text-purple-300"> Data Structures & Algorithms</span>.
</p>


        {/* Social Media Icons */}
       <div className='flex justify-center lg:justify-start gap-6 mt-6'>
  {[FaTwitter, FaFacebook, FaInstagramSquare, FaWhatsappSquare].map((Icon, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className='relative group cursor-pointer'
    >
      {/* Glow Effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-0 
                      group-hover:opacity-100 transition duration-300'></div>

      {/* Icon Background */}
      <div className='w-[50px] h-[50px] bg-richblack-800 border border-gray-600 rounded-full flex items-center justify-center
                      shadow-md group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300'>
        <Icon
          size={26}
          className='text-white group-hover:text-blue-300 transition-colors duration-300'
        />
      </div>
    </motion.div>
  ))}
</div>

        {/* Download Button */}
        <div className='flex justify-center lg:justify-start mt-1 pb-2'>
       <motion.a
  whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(90, 24, 154, 0.7)" }}
  transition={{ duration: 0.3 }}
  href="/Vishalpatelresume.pdf"
  download = "Vishalpatelresume.pdf"
  className="w-[160px] text-center font-semibold  border border-gray-400 px-4 py-3 text-[13px] cursor-pointer rounded-lg shadow-lg 
             bg-gradient-to-r from-[#5A189A] to-[#1E3A8A] text-white hover:shadow-purple-900/50"
>
  Download Resume
</motion.a>
        </div>
      </div>
      {/* Image Section */}
      < motion.div 
       className='h-[250px] sm:h-[350px] lg:h-[400px] w-[250px] sm:w-[350px] lg:w-[400px]  rounded-full relative  shadow-[0px_0px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_0px_30px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out
       bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  
      '
            //  initial={{ opacity: 0, scale: 0.95 }}
            //  animate={{ opacity: 1, scale: 1 }}
            //  transition={{ duration: 1 , ease:"easeOut" }}
      >
        <img src={vishalIm} alt='Vishal Patel' className='w-full h-full rounded-full absolute ' />
      </motion.div>

</motion.div>
    <div className='mt-10'>
      <Contacts />
    </div>


  </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
