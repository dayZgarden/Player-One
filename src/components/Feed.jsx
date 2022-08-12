import React from 'react'
import GameDisplay from './GameDisplay';
import axios from 'axios';
import GameForGenre from './GamesForGenre';
import { PlusIcon } from '@heroicons/react/outline';


export default function Feed( { game } ) {

  return (
    <div className='ml-12 w-full mb-2 flex flex-wrap  scrollbar-hide'>
      {
        game.slice(0,18).map((result) => (
          <div className='scrollbar-hide w-[28%] mb-16 odd:mb- mx-8 mt-4 flex flex-col md:flex-row scroll-smooth'>
          <div className="group  hover:scale-[103%] transition-all  duration-[.65s] perspective  h-[50%]
          flex relative">
          <div className="bg-slate-400 cursor-pointer  duration-1000  
           border-black border-4 shadow-cool2 ">
          <div className='scrollbar-hide relative '>
            <div>
              <span className="z-50"><button className="z-50"><PlusIcon className=" z-50 rounded-full hover:bg-yellow-400 text-black border-4 bg-white border-black -top-8 -right-8 h-16 w-16 absolute hover:scale-[107%] transition-all duration-500"/></button></span>
              <GameForGenre result={result} key={result.id} />
              
            </div>
          </div>
          </div>
          </div>
          </div>
        ))
      }

    </div>

  )
}
