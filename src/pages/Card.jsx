import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = ({id,name,info,image,goto}) => {
 
  function moveHandler(){
    window.open(goto, "_blank");   //  if you want to open the link in a new tab.
    // window.location.href = goto   // if you want to navigate within the same tab
  }
  return (
    <div className='relative w-full sm:w-[350px] p-5 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50'>
    <h2 className='text-2xl font-bold text-center text-white mb-2'>{name}</h2>
    <p className='text-center text-richblack-50 mb-4'>{info}</p>
    <div onClick={moveHandler} className='w-full  h-[150px] overflow-hidden rounded-md relative group'>
      <img src={image} alt='img' className='w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110' />
      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md'></div>
    </div>
  </div>
  )
}
