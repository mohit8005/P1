import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
         <Link className='text-[6.5vw] leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-5 border-white rounded-full px-10 pt-3' to='/projects'>Work</Link>
         <Link className='text-[6.5vw] leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-5 border-white rounded-full px-10 pt-3' to='/agence'>Agency</Link>
    </div>
  )
}

export default HomeBottomText