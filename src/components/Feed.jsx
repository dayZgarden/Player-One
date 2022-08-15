import React from 'react'
import GameDisplay from './GameDisplay';
import axios from 'axios';
import GameForGenre from './GamesForGenre';
import { PlusIcon } from '@heroicons/react/outline';
import Chimp from './Chimp';


export default function Feed( { game, wishlist, addToWishlist } ) {

  return (
    <div className='w-full flex flex-wrap mb-2 mr-4 scrollbar-hide mt-4'>
      <div className='p-2 ml-8 mb-4 w-full'>
        <h1 className=' font-bold text-[76px] tracking-wider'>Top Rated Games</h1>
        <p className='opacity-90 text-[20px]'>Based on ratings and player counts</p>
      </div>
      <button></button>
      <Chimp />
      {
        game.slice(0,18).map((result) => (
              <GameForGenre result={result} key={result.id} addToWishlist={addToWishlist} wishlist={wishlist}  />
        ))
      }
    </div>

  )
}
