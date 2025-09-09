import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomLinks = () => {
  return (
    <div className='flex items-center justify-center gap-2 font-[font2]'>
      <div className='h-24 flex items-center px-8 border-3 border-white rounded-full uppercase hover:border-[#d3fd50] hover:text-[#d3fd50]'>
        <Link className='text-[6vw] mt-6' to='/projects'>Projets</Link>
      </div>

       <div className='h-24 flex items-center px-8 border-3 border-white rounded-full uppercase hover:border-[#d3fd50] hover:text-[#d3fd50]'>
        <Link className='text-[6vw] mt-6' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomLinks
