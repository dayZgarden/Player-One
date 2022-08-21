import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className=' text-white z-[50]  mt-8 py-20  h-full relative'>
      <div className="h-full flex flex-col">
        <div className='flex justify-between items-center border-b-2 border-[#262633] px-20 pb-8'>
          <h1 className='font-bold text-[32px]  uppercase'>Player one</h1>
          <div className='flex justify-between bg-[#292945] py-4 px-8 w-[25%] rounded-full'>
            <input className='bg-transparent placeholder-white' placeholder='Email Address' type="email" />
            <FaArrowRight className='w-10 h-10 bg-gradient-to-r from-[#a881ff] to-[#5969Fe] rounded-full p-2' />
          </div>
        </div>
        <div className='flex justify-between px-20 mt-8'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-[32px] w-[65%] mb-8'>Get Updates on your Favorite Games</h1>
            <div className='flex justify-between w-[60%] p-2 text-[#c6c6c9] items-center'>
              <h1>Ready to explore?</h1>
              <button className='bg-gradient-to-r from-[#a881ff] hover:tracking-widest transition-all duration-500 to-[#5969Fe] active:tracking-wide rounded-full py-3 px-5 font-[600] tracking-wide text-white'>Get Started</button>
            </div>
            <div className='flex justify-between w-[55%] p-2 text-[#c6c6c9]'>
              <h1>Terms & Conditions</h1>
              <h2>Privacy Policy</h2>
            </div>
          </div>
          <div className='flex justify-evenly w-[40%]'>
            <div>
              <h1 className='text-[#bdc3ff] uppercase font-bold'>About</h1>
              <ul className='mt-4 space-y-2'>
                <li className='text-[14px] tracking-wide'>
                  Our Story
                </li>
                <li className='text-[14px] tracking-wide'>
                  Benefits
                </li>
                <li className='text-[14px] tracking-wide'>
                  Team
                </li>
                <li className='text-[14px] tracking-wide'>
                  Careers
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-[#bdc3ff] uppercase font-bold'>Games</h1>
              <ul className='mt-4 space-y-2'>
                <li className='text-[14px] tracking-wide'>
                  Free Games
                </li>
                <li className='text-[14px] tracking-wide'>
                  Top Rated
                </li>
                <li className='text-[14px] tracking-wide'>
                  Platforms
                </li>
                <li className='text-[14px] tracking-wide'>
                  Genres
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-[#bdc3ff] uppercase font-bold'>Help</h1>
              <ul className='mt-4 space-y-2'>
                <li className='text-[14px] tracking-wide'>
                  FAQs
                </li>
                <li className='text-[14px] tracking-wide'>
                  Contact us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className='text-[#494b63] absolute bottom-6 font-bold left-[50%] text-[20px] translate-x-[-50%] '>Copyright &copy; 2022. All Rights Reserved.</span>
      <div className='absolute bottom-12 right-24 text-[#494b63] flex space-x-5 px-20'>
        <FaLinkedin className='w-8 h-8' />
        <FaTwitter className='w-8 h-8' />
        <FaGithub className='w-8 h-8' />
      </div>
      <span className='absolute bottom-0 h-[5px] bg-gradient-to-r from-[#a881ff] to-[#5969Fe] w-full'></span>
    </div>
  )
}
