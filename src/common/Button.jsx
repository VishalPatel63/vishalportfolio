import React from 'react'

export const Button = ({text}) => {

  return (
    <div>
      <button className=' bg-white w-[200px] text-center font-bold inline-block border-b-2 border-r-2 px-3 py-3 mx-auto text-[16px] cursor-pointer
      rounded-md shadow-lg shadow-cyan-900 hover:scale-95 hover:transition-all duration-200 hover:border-b-2 hover:border-r-2   '>
        {text}
     </button>
    </div>
  )
}
