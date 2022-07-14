import React from 'react'
import GameDisplay from './GameDisplay';


export default function Feed( { game } ) {
  return (
    <div className='lg:w-4/5 w-full mb-2 flex-wrap justify-center flex'>
      {
        game.map((result) => (
          <GameDisplay key={result.id} result = {result} />
        )).splice(0,9)
      }

    </div>

  )
}
