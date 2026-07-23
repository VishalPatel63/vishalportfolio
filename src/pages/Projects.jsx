import React from 'react'

import Footer from '../common/Footer'
import { Projectss } from '../common/Projectss'
export const Projects = ({skill}) => {
  return (
    <div>
    <Projectss skill={skill}/>
     <Footer/>
    </div>
        
 
  )
}
