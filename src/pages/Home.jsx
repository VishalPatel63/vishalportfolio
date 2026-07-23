import React from 'react'
import vishalIm from "../userAsset/visha.png"
import { TypeAnimation } from 'react-type-animation';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import Footer from '../common/Footer';
import { Contacts } from '../common/Contacts';
import { Projectss } from '../common/Projectss';
import { Skill } from '../common/Skill';
import { About } from './About';
import data from '../data';
import { motion } from 'framer-motion';
import Achivements from './Achivements';
import Experiences from './Experiences';



export const Home = () => {
  return (
    <div id='home' className='min-h-screen'>
      <div className='flex flex-col mx-auto w-11/12 max-w-maxContent mt-14'>
        
        <motion.div 
          className='flex flex-col lg:flex-row w-11/12 mx-auto justify-between items-center lg:items-start'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Image Section (mobile first) */}
          <motion.div
            className='order-1 lg:order-2 h-[250px] sm:h-[350px] lg:h-[400px] 
                       w-[250px] sm:w-[350px] lg:w-[400px]  
                       rounded-full relative shadow-[0px_0px_20px_rgba(255,255,255,0.2)] 
                       hover:shadow-[0px_0px_30px_rgba(255,255,255,0.3)] 
                       transition-all duration-300 ease-in-out
                       bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
          >
            <img src={vishalIm} alt='' className='w-full h-full rounded-full absolute' />
          </motion.div>

          {/* Content Section */}
          <div className='order-2 lg:order-1 mt-10 lg:mt-20 w-full lg:w-1/2 flex flex-col gap-y-6 text-center lg:text-left'>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-2">
  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
  <h1 className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-cyan-300">
    Hello, I'm
  </h1>
</div>
<h1
  className="text-4xl sm:text-5xl font-extrabold 
             bg-gradient-to-r from-white via-purple-200 to-pink-500 
             bg-clip-text text-transparent 
             [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]
             "
>
  Vishal Patel
</h1>


<div className="text-xl sm:text-2xl font-bold mt-1 flex items-center">
  {/* Fixed part */}
<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
  I'm a&nbsp;
</span>


  {/* Moving/typing part */}
  <TypeAnimation
    sequence={[
      'Full Stack Developer', 1000,
      'Web Developer', 1000,
      'Backend Developer', 1000,
    ]}
    repeat={Infinity}
    wrapper="span"
    style={{
      display: 'inline-block',
      color: '#E879F9',
      fontSize: '1.5rem',
    }}
  />
</div>


<p className="mt-2 text-base sm:text-lg font-medium text-pure-greys-5 px-4 lg:px-0 leading-relaxed max-w-2xl">
  I’m a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> and <span className="text-pink-300 font-semibold">Computer Science student</span>
   passionate about building scalable web applications with the <span className="text-cyan-300 font-semibold">MERN Stack</span> and solving complex problems in <span className="text-pink-300 font-semibold">Data Structures & Algorithms</span> using 
   <span className="text-cyan-300 font-semibold"> C++ & Python</span>.
</p>

            {/* Social Media Icons */}
            <div className='flex justify-center lg:justify-start gap-6 mt-6'>
              {[
                { icon: FaGithub, link: "https://github.com/VishalPatel63" },
                { icon: CiLinkedin, link: "https://www.linkedin.com/in/vishal-patel-03569925a/" },
                { icon: FaInstagramSquare, link: "https://instagram.com" },
              ].map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className='relative group w-[50px] h-[50px] cursor-pointer'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-0 
                                  group-hover:opacity-100 transition duration-300 pointer-events-none'></div>
                  <div className='w-full h-full bg-richblack-800 border border-gray-600 rounded-full flex items-center justify-center
                                  shadow-md group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300'>
                    <Icon size={26} className='text-white group-hover:text-blue-300 transition-colors duration-300' />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-1 pb-2'>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(90, 24, 154, 0.7)" }}
                transition={{ duration: 0.3 }}
                href="/Vishalpatelresume.pdf"
                download="Vishalpatelresume.pdf"
                className="w-[160px] text-center font-semibold border border-gray-400 px-4 py-3 text-[13px] cursor-pointer rounded-lg shadow-lg 
                           bg-gradient-to-r from-[#5A189A] to-[#1E3A8A] text-white hover:shadow-purple-900/50"
              >
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)" }}
                transition={{ duration: 0.3 }}
                href="#contact"
                className="w-[160px] text-center font-semibold border border-gray-400 px-4 py-3 text-[13px] rounded-lg shadow-lg 
                  bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white hover:shadow-blue-900/50 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </motion.div>

       {/* Achievement Stats */}

<section id='achivement'>

     <Achivements/>
</section>

        <section id='about' >
          <About hideFooter />
        </section>
        <section id='experiences'>
          <Experiences/>
        </section>

        <section id='projects'>
          <div className='mx-auto w-full max-w-maxContent'>
            <div className='mb-10 text-center'>
              <h2 className='text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Projects</h2>
              <p className='mt-3 text-richblack-300 max-w-2xl mx-auto'>All my featured web applications are shown here so you can explore the work I build end to end.</p>
            </div>
            <Projectss skill={data} showAll={true} />
          </div>
        </section>

        <section id='skills'>
          <Skill />
        </section>

        <section id='contact'>
          <Contacts />
        </section>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}
