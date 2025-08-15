import React, { useState } from 'react';
import { Projectss } from './Projectss';
import  data from '../data';
import Footer from './Footer';

export const AllProjects = () => {
   const [skill1, setSkill] = useState(data);
  return (
    <div className="min-h-screen bg-richblack-900">
      <Projectss skill={skill1} showAll={true} />
       <Footer/>
    </div>
  );

};

