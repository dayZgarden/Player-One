import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { useParams, useNavigate, Link } from "react-router-dom";
import convertDate from "../utils/convertDate";
import changePlatformToImage from "../utils/changePlatformToImage";

export default function GameDisplay({ result }) {
  const params = useParams();
  let navigate = useNavigate();

  console.log(result);

  // convertRatingToStars(rating){
  //   let stars = [];
  //   for(let i = 0; i < rating; i++){
  //     stars.push(<BsStarFill key={i} className="first-letter:"/>)
  //   }

  //   return stars;
  // }

  const convertRatingToStars = (rating) => {
    let stars = [];
    let remainder = rating % 1;
    rating = Math.floor(rating);
    for (let i = 0; i < rating; i++) {
      stars.push(<BsStarFill className="w-12 h-12 text-amber-500" key={i} />);
    }

    while (stars.length < 5) {
      if (remainder >= 0.35) {
        stars.push(
          <BsStarHalf className="w-12 h-12 text-amber-500" key={stars.length} />
        );
        remainder = 0;
      } else {
        stars.push(
          <BsStar className="w-12 h-12 text-amber-500" key={stars.length} />
        );
      }
    }

    return (
      <div className="flex space-x-1 absolute -top-7 -right-6">{stars}</div>
    );
  };

  return (
    <div className="w-full max-w-[800px]">
    <Link
      className="group cursor-pointer transition duration-300
  ease-in hover:scale-[102%] hover:z-50 max-w-[800px] w-full 
  rounded-[5%] group z-1 h-[25%] bg-slate-400 border-4 p-2 relative border-black shadow-cool2 flex"
      to={{ pathname: `/GameInfo/${result.id}` }}
    >
      <figure className="h-full w-[25%]">
        <img
          className="border-4 rounded-[5%] border-black"
          src={result.background_image}
          alt=""
        />
      </figure>
      <div className="flex ml-4 justify-center flex-col h-full w-[50%] text-black">
        <h1 className="font-black text-[24px]">{result?.name}</h1>
        <p className="font-bold tracking-wide">{convertDate(result?.released)}</p>
        
        <h2 className="flex space-x-1">
          {result?.parent_platforms?.map((platform) => (
            <p> {changePlatformToImage(platform?.platform?.slug)}</p>
          ))}
        </h2>
        <h2 className="flex space-x-1">
          {result?.genres?.map((genre) => (
            <p className="font-bold">{genre?.name}</p>
          ))}
        </h2>
      </div>
      {convertRatingToStars(result?.rating)}
    </Link>

    <div className="flex w-full justify-evenly mt-4 p-2 bg-rose-900 border-4 border-black shadow-cool2">
        {result?.stores?.map((store) => (
          <div className="">
            <a className="cursor-pointer" href={`https://${store?.store?.domain}`}>{store?.store?.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
