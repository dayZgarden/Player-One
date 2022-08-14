import React from 'react'
import GameDisplay from './GameDisplay';
import axios from 'axios';
import GameForGenre from './GamesForGenre';
import { PlusIcon } from '@heroicons/react/outline';


export default function Feed( { game, wishlist, addToWishlist } ) {

  return (
    <div className='w-full flex flex-wrap mb-2 mr-4 scrollbar-hide mt-4'>
      {
        game.slice(0,18).map((result) => (
              <GameForGenre result={result} key={result.id} addToWishlist={addToWishlist} wishlist={wishlist}  />
        ))
      }
    </div>

  )
}
