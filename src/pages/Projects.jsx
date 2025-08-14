import React from 'react'
import { Card } from './Card'
import Footer from '../common/Footer'
import { Projectss } from '../common/Projectss'
export const Projects = ({skill}) => {
  return (
    <div>

    {/* <div className='w-11/12 mx-auto max-w-maxContent mt-14 pb-3 h-full'>
      <h1 className='text-center text-4xl font-extrabold mb-12 text-white'>Our Projects</h1>
 
      <div className='flex flex-wrap justify-center gap-10 w-full'>
        {
          skill.map((ski) => (
            <Card key={ski.id} {...ski} />
          ))
        }
      </div>
    </div> */}

    <Projectss skill={skill}/>
     <Footer/>
    </div>
        
 
  )
}
