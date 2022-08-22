import React from 'react'
import GameDisplay from './GameDisplay';
import axios from 'axios';
import GameForGenre from './GamesForGenre';
import { PlusIcon } from '@heroicons/react/outline';
import Chimp from './Chimp';


export default function Feed( { game, wishlist, addToWishlist } ) {

  return (
    <div className='w-full flex flex-wrap mb-2 lg:mr-4 scrollbar-hide'>
      <div className='p-2 ml-8 mb-4 w-full'>
        <h1 className=' font-bold text-[76px] tracking-wider translate-x-[-1.5%]'>Top Rated Games</h1>
        <p className='opacity-90 text-[20px] translate-x-[-1%]'>Based on ratings and player counts</p>
      </div>
      <Chimp />
      <div className='flex flex-wrap'>
      {
        game.slice(0,18).map((result) => (
          <div className='lg:w-[30%] sm:w-[50%] w-[95%] mx-auto hover:scale-[103%] transition-all  duration-[.65s] bg-[#282838] odd:border-b-[#fc61ff] border-4 border-[#20202e] even:border-b-[#61ffda] sm:m-1 md:m-2 xl:m-4'>
              <GameForGenre result={result} key={result.id} addToWishlist={addToWishlist} wishlist={wishlist}  />
          </div>
        ))
      }
      </div>
    </div>

  )
}
