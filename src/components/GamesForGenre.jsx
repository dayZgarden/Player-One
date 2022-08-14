import React, { useState, useEffect, useRef } from "react";
import {
  PlusCircleIcon,
  StarIcon,
  PlusIcon,
  CheckIcon,
  DotsCircleHorizontalIcon
} from "@heroicons/react/solid";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import changePlatformToImage from "../utils/changePlatformToImage";
import convertDate from "../utils/convertDate";
import { FaPlayCircle } from "react-icons/fa";
import {BiLoaderCircle} from "react-icons/bi";

export default function GameForGenre({ result, addToWishlist, wishlist }) {
  const params = useParams();
  let navigate = useNavigate();
  console.log(result);

  const [trailer, setTrailer] = useState("");
  const [preview, setPreview] = useState("");
  const [inWishlist, setInWishlist] = useState(false);
  const [star, setStar] = useState(false);

  async function getTrailers() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${result?.id}/movies?key=8824f695c027467587b877f1225217f2`
    );
    console.log(data);
    setTrailer(data?.results[0]?.data?.max);
    setPreview(data?.results[0]?.preview);
  }

  useEffect(() => {
    getTrailers();
    
  }, [result]);

  useEffect(() => {
    checkIfInWishlist(result?.id);
  }, [wishlist])

  useEffect(() => {
    if (trailer) {
      playVideo();
    }
  }, [trailer]);

  const videoRef = useRef();
  const playVideo = () => {
    videoRef.current.addEventListener("mouseover", () => {
      videoRef.current.play();
    });
    videoRef.current.addEventListener("mouseleave", () => {
      videoRef.current.pause();
    });
  };

  const checkIfInWishlist = (id) => { 
    wishlist?.forEach((item) => {
      if (item.id === id) {
        setInWishlist(true);
        setTimeout(() => {
          setStar(true);
        }, 250)
      }
    }
    );
  }
  

  return (
    <div className="scrollbar-hide hover:z-[100] md:w-[50%] relative w-full lg:w-[33.333%] flex justify-center scroll-smooth">
      <div
        className="group  hover:scale-[103%] transition-all  duration-[.65s] h-[60%]
          flex relative "
      >
        <div
          className="bg-slate-400  cursor-pointer  duration-1000  
           border-black border-4 shadow-cool2 "
        >
          <span className="z-50">
            {(inWishlist && !star) && 
            (<BiLoaderCircle className="animate-spin z-50 rounded-full p-1 text-green-400  bg-white  -top-4 -right-4 h-12 w-12  absolute hover:scale-[107%] transition-all duration-500" />)}
             {(inWishlist && star) && 
            (
            <div className="">
              <StarIcon className=" z-50 rounded-full  text-blue-400  -top-8 -right-8 h-16 w-16 absolute cursor-default transition-all duration-500" /> 
            </div>
            )}
            {!inWishlist && <button onClick={() => addToWishlist(result)} className="">
              <PlusIcon className=" z-50 rounded-full hover:bg-yellow-400 text-black border-4 bg-white border-black -top-8 -right-8 h-16 w-16 absolute hover:scale-[107%] transition-all duration-500" />
            </button>}
          </span>

          <Link
            className="cursor-pointer p-6 transition-all relative duration-200 ease-in w-full flex justify-center scrollbar-hide"
            to={{
              pathname: `/GameInfo/${result?.id}`,
            }}
          >
            <button className="w-full z-[1] flex flex-col items-center h-full justify-evenly space-y-4 group">
              <h1
                className="font-bold text-black bg-white border-black text-[24px] w-3/4 text-center break-words  py-1 px-2 shadow-cool2 border-4"
              >
                {result?.name}
              </h1>
              {trailer ? (
                <div className="group relative max-h-full md:h-[50%] h-full lg:h-[33.333%]">
                  
                  <img
                    src={result.background_image}
                    alt=""
                    className="border-4 max-w-[360px] max-h-[360px] aspect-square w-full h-full border-black shadow-cool2 group-hover:hidden  object-cover rounded-[1%]"
                  />
                  <video
                    ref={videoRef}
                    className="hidden border-4 max-w-[360px] max-h-[360px] aspect-square w-full h-full border-black shadow-cool2 group-hover:inline object-cover rounded-[1%]"
                    controls="fullscreen; gyroscope"
                    src={trailer}
                  >
                    {" "}
                  </video>
                  <span className="absolute bottom-4 group-hover:hidden right-4 opacity-70">
                    <FaPlayCircle className="w-12 text-white bg-black rounded-full h-12" />
                  </span>
                </div>
              ) : (
                <figure className="max-h-full md:h-[50%] h-full lg:h-[33.333%]">

                <img
                  className=" rounded-[1%] max-w-[360px] max-h-[360px] aspect-square w-full h-full flex object-cover border-4 border-black shadow-cool2"
                  src={result?.background_image}
                />
                </figure>

              )}
              <div className="flex relative z-[50] max-w-[360px] w-full  flex-col px-2 text-[12px] shadow-cool2 group-hover:border-b-0 group-hover:shadow-sm text-black font-extrabold border-4 bg-slate-400 border-black">
                <div className="py-2  text-center tracking-wider w-full text-[18px] flex justify-center space-x-2">
                  <p>
                    {result?.added}
                    {
                      <PlusIcon className="w-5  h-5 mb-1 inline rounded-full border bg-white border-black text-black" />
                    }
                  </p>
                  <span className="border-r border-2 border-black"></span>
                  <p>
                    {result?.rating}
                    {
                      <StarIcon className="text-yellow-400 w-5 mb-1 h-5 inline" />
                    }
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-[101%] absolute translate-x-[-3%] -bottom-[93px] z-[-50] bg-slate-400 group-hover:border-t-0  border-black border-4 shadow-cool w-[102%] max-w-[360px]">
                  <div className="flex justify-between p-1 border-t-2 border-black transition-all duration-1000">
                    <p>Release Date: </p>
                    <p>{convertDate(result?.released)}</p>
                  </div>
                  <div className="flex items-center justify-between p-1 border-t-2 border-black transition-all duration-1000">
                    <p>Platforms: </p>
                    <div className="flex space-x-1">
                      {result?.parent_platforms?.map((platform) => (
                        <p>
                          {" "}
                          {changePlatformToImage(platform?.platform?.slug)}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between p-1 border-t-2 border-black transition-all duration-1000">
                    <p>Genres: </p>
                    <div className="flex space-x-1">
                      {result?.genres?.map((genre) => (
                        <a href="" className="underline">
                          {genre?.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
