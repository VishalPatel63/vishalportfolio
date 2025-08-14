
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Navber } from './pages/Navber';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import data from './data';
import { useState } from 'react';

import ParticlesBackground from './common/ParticlesBackground';
import { AllProjects } from './common/AllProjects';
function App() {
  const [skill, setSkill] = useState(data);
  
  return (
   
   <div className='  bg-richblack-900 min-h-screen'>
   <ParticlesBackground/>
    <div className=' overlay'     
  
 >
     <Navber/> 
     <Routes>
      <Route path = '/' element = { <Home/>}/>
      <Route path = '/about' element = { <About/>}/>
    <Route path="/project" element={<AllProjects skill = {skill} />} />
      <Route path = '/skills' element = { <Skills/>}/>
      <Route path = '/contact' element = { <Contact/>}/>
     </Routes>
    </div>
   </div>
   
  );
}

export default App;
