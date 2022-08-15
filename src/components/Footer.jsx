import React from 'react'

export default function Footer() {
  return (
    <div className='mt-12 text-white bg-slate-900 h-[360px]'>
      <div className="flex justify-evenly h-full max-w-[1200px] mx-auto">
        <div className='flex flex-col h-full justify-evenly w-[30%]'>
          <img className='object-contain max-w-[76px] w-full h-full max-h-[76px] p-2 mr-2' src="https://day-ztracker.vercel.app/assets/icons8-flat-60.png" alt="" />
          <h1>dayZgamer</h1>
          <p className='text-[12px] text-gray-700'>
            The world's largest database of video games to discover new games and connect with other players.
          </p>
        </div>
        <div className='h-full w-[2%] border-r-4 border-black'>
        </div>
        <div className='flex w-[68%]'>
          <div className='flex  flex-col justify-evenly'>
            <h1>Games</h1>
            <ul>
              <li>
                Genres
              </li>
              <li>
                Years
              </li>
              <li>
                Platforms
              </li>
              <li>
                Developers
              </li>
              <li>
                Free games
              </li>
            </ul>
            <h2>Copyright &copy; 2021</h2>
          </div>
          <div className='flex flex-col justify-evenly'>
            <h1>General</h1>
            <ul>
              <li>
                Where to buy
              </li>
              <li>
                About
              </li>
              <li>
                Contact
              </li>
              <li>
                Careers
              </li>
              <li>
                API Documentation
              </li>
            </ul>
            <h2>Privacy & Cookie Policy</h2>
          </div>
          <div className='flex flex-col justify-evenly'>
            <h1>Social</h1>
            <ul>
              <li>
                LinkedIn
              </li>
              <li>
                GitHub
              </li>
              <li>
                Twitter
              </li>
              <li>
                Website
              </li>
            </ul>
            <div>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
