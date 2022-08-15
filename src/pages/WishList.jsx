import React from "react";
import Nav from "../components/nav";
import {  ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import GameForGenre from "../components/GamesForGenre";
import GameDisplay from "../components/GameDisplay";
import Footer from "../components/Footer";
import wishpic from '../assets/wishlist.svg';

export default function WishList({wishlist, handleRemoveGame, addToWishlist}) {
  let navigate = useNavigate();



  return (
    <div className="h-screen flex flex-col">
      <Nav  />
      <div className="flex mt-16 justify-center ">
        {wishlist.length === 0 ? 
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-black tracking-wide text-[28px] text-white border-b-2 p-4">Your wishlist is currently empty</h1>
          <img className="max-w-[800px] max-h-[800px] aspect-square w-full h-full" src={wishpic} alt="" />
        </div>
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
