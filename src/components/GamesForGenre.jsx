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
import Loading from '../assets/Loading.json'
import Star from '../assets/Star.json'
import lottie from 'lottie-web'

export default function GameForGenre({ result, addToWishlist, wishlist }) {
  const params = useParams();
  let navigate = useNavigate();

  const starRef = useRef(null);

  const [trailer, setTrailer] = useState("");
  const [preview, setPreview] = useState("");
  const [inWishlist, setInWishlist] = useState(false);
  const [star, setStar] = useState(false);
  const [X, setX] = useState(0);

  async function getTrailers() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${result?.id}/movies?key=950ecb52769e4a53b647742fff1a1226`
    );
    setTrailer(data?.results[0]?.data?.max);
    setPreview(data?.results[0]?.preview);
  }

  useEffect(() => {
        lottie.loadAnimation({
          container: starRef?.current, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json',
          animationData: Star,
        }) 
  },)

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
        }, 2000)
      }
    }
    );
  
  }
  

  return (
    <div className="scrollbar-hide hover:z-[100] group relative w-full h-full flex  scroll-smooth">
      <div
        className="h-[100%] flex w-full">
        <div
          className=" cursor-pointer  w-full">
            {(inWishlist && !star) && 
              (
                <figure ref={starRef} className="z-[100] p-1  w-[460px] h-[460px] absolute">
                </figure>
              )}
             {(inWishlist && star) && 
            (
            <div className="">
              <StarIcon className=" z-50 rounded-full bg-gradient-to-r from-[#a881ff] to-[#5969Fe]  -top-6 -right-6 h-12 w-12 absolute cursor-default transition-all duration-500" /> 
            </div>
            )}
            {!inWishlist && <button onClick={() => addToWishlist(result)} className="">
              <PlusIcon className=" z-[100] rounded-full hover:bg-yellow-400 text-white bg-gradient-to-r from-[#a881ff] to-[#5969Fe]  -top-6 -right-6 h-12 w-12 absolute hover:scale-[115%] transition-all duration-500" />
            </button>}

          <Link
            className="cursor-pointer p-4 relative w-full max-w-[420px] mx-auto flex justify-center scrollbar-hide"
            to={{
              pathname: `/GameInfo/${result?.id}`,
            }}
          >
            <button className="w-full z-[1] flex flex-col items-center h-full justify-evenly space-y-4 group">
              <h1
                className=" text-[24px] bg-gradient-to-t from-[#1c1c28] to-gray-900 font-bold text-white rotate-[-2deg]  w-[97%] text-center break-words  p-2 "
              >
                {result?.name} 
              </h1>
              {trailer ? (
                <div className="group relative max-h-full md:h-[50%] h-full lg:h-[33.333%]">
                  
                  <img
                    src={result.background_image}
                    alt=""
                    className="border-4 rotate-[-2deg] mt-2 aspect-square w-full h-full border-black shadow-cool2 group-hover:hidden  object-cover "
                  />
                  <video
                    ref={videoRef}
                    className="hidden border-4 rotate-[-2deg] mt-2 aspect-square w-full h-full border-black shadow-cool2 group-hover:inline object-cover "
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
                  className=" rotate-[-2deg] mt-2 aspect-square w-full h-full flex object-cover border-4 border-black shadow-cool2"
                  src={result?.background_image}
                />
                </figure>

              )}
              <div className="flex z-[50] w-[100%]  flex-col px-2 text-[16px]  font-bold text-white">
                <div className="py-2 bg-gradient-to-t from-[#1c1c28] to-gray-900 rotate-[-2deg] text-center tracking-wide w-[60%] mx-auto text-[18px] flex justify-center space-x-2">
                  <p className="">
                    {result?.added}
                    {
                      <PlusIcon className="w-5  h-5 mb-1 inline text-white" />
                    }
                  </p>
                  <span className="border-r border-2 border-white"></span>
                  <p>
                    {result?.rating}
                    {
                      <StarIcon className="text-yellow-400 w-5 mb-1 h-5 inline" />
                    }
                  </p>
                </div>
                <div className="opacity-0 mt-4 group-hover:opacity-100 transition-all duration-700 z-[-50] text-white ">
                  <div className="flex justify-between   ">
                    <p className="border-b-2 border-[#41415a] ">Release Date: </p>
                    <p className="border-b-2 border-[#41415a] ">{convertDate(result?.released)}</p>
                  </div>
                  <div className="flex items-center border-b-2  border-[#282838] justify-between ">
                    <p className="border-b-2 border-[#41415a] ">Platforms: </p>
                    <div className="flex space-x-1 border-b-2 border-[#41415a] ">
                      {result?.parent_platforms?.map((platform) => (
                        <p className="">
                          {" "}
                          {changePlatformToImage(platform?.platform?.slug)}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <p className="border-b-2 border-[#41415a] ">Genres: </p>
                    <div className="flex space-x-1 border-b-2 border-[#41415a] ">
                      {result?.genres?.map((genre) => (
                        <a href="" className="">
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
