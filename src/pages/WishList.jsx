import React from "react";
import Nav from "../components/nav";
import {  ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

export default function WishList() {
  let navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <div className="h-screen flex flex-col">
      <Nav  />
      <button onClick={handleClick} className=' group'>
          <ArrowLeftIcon className="w-12 hover:scale-110 transition-all duration-350 cursor-pointer h-12 absolute bottom-3 left-3"/> 
          <p className="tracking-widest bottom-6 text-[24px] hidden group-hover:inline absolute left-20 font-bold">Back to Home</p>
      </button>
      <div className="flex mt-16 justify-center">
        <h1 className=" text-[96px] tracking-widest animate-pulse p-24 border rounded-md">
          Under Construction
        </h1>
      </div>
    </div>
  );
}
