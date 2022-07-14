import React, { useState, useEffect } from "react";
import { PlusCircleIcon, StarIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function GameDisplay({ result }) {
  const params = useParams();
  let navigate = useNavigate();

  function toWishList() {
    navigate('/Wishlist')
  }

  
  return (
  <Link className="group m-3 cursor-pointer p-3 transition duration-200
  ease-in transform sm:hover:scale-105 hover:z-50 lg:w-1/3 xl:w-1/4 border-t-2 border-b-2
   border-t-cyan-900 border-b-blue-900 rounded-lg group shadow-xl z-1 justify-center overflow-hidden" to={{
    pathname: `/GameInfo/${result.id}` 
  }}>
    <button
      className=""
    >
      <img loading="lazy"
      className="rounded-lg max-w-[500px] w-full max-h-full h-[360px] object-cover " src= {result.background_image}
      />
      <h1 className="text-center font-bold text-gray-200 truncate
      group-hover:h-auto text-[24px] w-3/4 mx-auto">{result.name}</h1>
      <div className="flex">
        <p className="space-x-1 text-center tracking-wider w-full ">
           {result.added}{<PlusCircleIcon className="w-4 h-4 inline text-yellow-500"/>} | {result.rating}{<StarIcon className="text-yellow-400 w-4 h-4 inline"/>}</p>
      </div>
      <div className="w-full flex justify-center">
        <div onClick = {toWishList} className="text-purple-400 font-bold hidden hover:scale-105 transition duration-100 
        animate-pulse group-hover:inline border-l color:red border-r border-violet-500 rounded-md pr-2 pl-2 mt-1 z-50">
          Add to Wishlist
        </div>
      </div>
    </button>
    </Link>
    
  );
}