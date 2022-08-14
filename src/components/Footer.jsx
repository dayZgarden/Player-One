import React from 'react'

export default function Footer() {
  return (
    <div className='mt-12 text-white p-[70px] bg-slate-900'>
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <div className='tracking-widest font-medium flex justify-evenly mb-8 text-[24px]'>
          <a className='hover:animate-pulse hover:scale-105 transistion-all duration-100' href="mailto:zyad.alkurdi22@gmail.com">Contact</a>
          <a className='hover:animate-pulse hover:scale-105 transistion-all duration-100' href="/">About</a>
          <a className='hover:animate-pulse hover:scale-105 transistion-all duration-100' href="/">Reviews</a>
        </div>
        <div className='border-b-2 border-white mb-8'>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex'>
            <img className="object-contain p-2 mb-2" src='https://day-ztracker.vercel.app/assets/icons8-flat-60.png'/>
            <h1 className='text-[40px] font-bold tracking-widest mb-2'>dayZgamer</h1>
          </div>
          <p className='text-[12px]'>Copyright &copy; 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
