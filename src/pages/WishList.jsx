import React from "react";
import Nav from "../components/nav";
import {  ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import GameForGenre from "../components/GamesForGenre";
import GameDisplay from "../components/GameDisplay";
import Footer from "../components/Footer";

export default function WishList({wishlist, handleRemoveGame, addToWishlist}) {
  let navigate = useNavigate();



  return (
    <div className="h-screen flex flex-col">
      <Nav  />
      <div className="flex mt-16 justify-center ">
        {wishlist.length === 0 ? 
        <h1>No games in wishlist</h1> 
        :
      <div className="p-6">
        {wishlist.map((game) => (
          <div className="p-6 mb-2 " key={game.id}>
            {<GameDisplay result={game} key={game.id}/>}
            <button onClick={() => handleRemoveGame(game)} className="text-white mt-4 font-bold">Remove From Wishlist</button>
          </div>
        ))}
        </div>
      }
      </div>
      <Footer />
    </div>
  );
}
