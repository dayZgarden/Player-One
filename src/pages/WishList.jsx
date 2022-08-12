import React from "react";
import Nav from "../components/nav";
import {  ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

export default function WishList(ref) {
  let navigate = useNavigate();



  return (
    <div className="h-screen flex flex-col">
      <Nav  />
      <div className="flex mt-16 justify-center">
        <h1 className=" text-[96px] tracking-widest animate-pulse p-24 border rounded-md">
          Under Construction
        </h1>
      </div>
    </div>
  );
}
