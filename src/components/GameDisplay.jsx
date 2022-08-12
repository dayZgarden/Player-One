import React, { useState, useEffect } from "react";
import { PlusCircleIcon, StarIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function GameDisplay({ result }) {
  const params = useParams();
  let navigate = useNavigate();


  console.log(result)

  
  return (
  <Link className="group cursor-pointer transition duration-200
  ease-in transform sm:hover:scale-105 hover:z-50 w-full
  rounded-lg group shadow-xl z-1 justify-center overflow-hidden" to={{
    pathname: `/GameInfo/${result.id}` 
  }}>
    <button
      className=""
    >
      <img loading="lazy"
      className="rounded-lg w-full max-h-full h-[360px] object-cover " src= {result?.background_image}
      />
      <h1 className="text-center font-bold text-gray-200 truncate
      group-hover:h-auto text-[24px] w-3/4 mx-auto">{result?.name}</h1>
      <div className="flex">
        <p className="space-x-1 text-center tracking-wider w-full ">
           {result?.added}{<PlusCircleIcon className="w-4 h-4 inline text-yellow-500"/>} | {result?.rating}{<StarIcon className="text-yellow-400 w-4 h-4 inline"/>}
        </p>
      </div>
    </button>
    </Link>
    
  );
}