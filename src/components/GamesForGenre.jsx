import React, { useState, useEffect, useRef } from "react";
import { PlusCircleIcon, StarIcon, PlusIcon } from "@heroicons/react/solid";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import changePlatformToImage from "../utils/changePlatformToImage";
import convertDate from "../utils/convertDate";
import { FaPlayCircle} from "react-icons/fa"


export default function GameForGenre({ result }) {
  const params = useParams();
  let navigate = useNavigate();
  console.log(result)

  const [trailer, setTrailer] = useState('');
  const [preview, setPreview] = useState('');

  async function getTrailers() {
    const {data} = await axios.get(`https://api.rawg.io/api/games/${result?.id}/movies?key=93c589388c5f4142a0afda5bbf82bd99`)
    console.log(data) 
    setTrailer(data?.results[0]?.data?.max)
    setPreview(data?.results[0]?.preview)
  }

  useEffect(() => {
    getTrailers()
  },[result])

  useEffect(() => {
    if(trailer){
      playVideo()
    }
  },[trailer])

  const videoRef = useRef();

  const playVideo = () => {

    videoRef.current.addEventListener('mouseover', () => {
        videoRef.current.play();
    } );
    videoRef.current.addEventListener('mouseleave', () => {
        videoRef.current.pause();
    } );
  }

  
  
  return (
  <Link className="cursor-pointer p-6 transition-all duration-200
  ease-in  w-full  z-1 flex justify-center scrollbar-hide" to={{
    pathname: `/GameInfo/${result?.id}` 
  }}>
    <button
      className="w-full  flex flex-col items-center h-full justify-evenly space-y-4 group"
    >
      <h1 className="font-bold text-black bg-white border-black
     text-[24px] w-3/4 text-center break-words  py-1 px-2 shadow-cool2 border-4">{result?.name}</h1>
     {trailer ? (
        <div className="group relative">
            <img src={result.background_image} alt="" className="border-4 border-black shadow-cool2 group-hover:hidden aspect-video max-h-full max-w-[360px] h-[360px] object-cover rounded-[1%]" />
            <video ref={videoRef} className="hidden border-4 border-black shadow-cool2 group-hover:inline aspect-video max-h-full max-w-[360px] h-[360px] object-cover rounded-[1%]" controls="fullscreen; gyroscope" src={trailer}> </video> 
            <span className="absolute bottom-4 group-hover:hidden right-4 opacity-70"><FaPlayCircle className="w-12 text-white bg-black rounded-full h-12"/></span>
        </div> 
        ) : (
        <img 
        className=" rounded-[1%]  z-50 flex max-h-full max-w-[360px] h-[360px] object-cover border-4 border-black shadow-cool2" src= {result?.background_image}
        />)
        }
      <div className="flex relative max-w-[360px] w-full  flex-col px-2 text-[12px] shadow-cool2 group-hover:border-b-0 group-hover:shadow-sm text-black font-extrabold border-4 bg-slate-400 border-black">
        <div className="py-2  text-center tracking-wider w-full text-[18px] flex justify-center space-x-2">
          <p>
              {result?.added}{<PlusIcon className="w-5  h-5 mb-1 inline rounded-full border bg-white border-black text-black"/>}
          </p>
          <span className="border-r border-2 border-black"></span>
           <p>
              {result?.rating}{<StarIcon className="text-yellow-400 w-5 mb-1 h-5 inline"/>}
           </p>
        </div>
        <div className="hidden group-hover:inline-block absolute translate-x-[-3%] -bottom-[93px] z-[999] bg-slate-400 group-hover:border-t-0  border-black border-4 shadow-cool w-[102%] max-w-[360px]">
          <div className="flex justify-between p-1 border-t-2 border-black transition-all duration-1000">
              <p>Release Date: </p>
              <p>{convertDate(result?.released)}</p>
          </div>
          <div className="flex items-center justify-between p-1 border-t-2 border-black transition-all duration-1000">
              <p>Platforms: </p>
              <div className="flex space-x-1">{result?.parent_platforms?.map((platform) => (
                <p> {changePlatformToImage(platform?.platform?.slug)}</p>
            ))}</div>
          </div>
          <div className="flex justify-between p-1 border-t-2 border-black transition-all duration-1000">
              <p>Genres: </p>
              <div className="flex space-x-1">{result?.genres?.map((genre) => (
                <a href="" className="underline">{genre?.name}</a>
              ))}</div>
          </div>
        </div>
      </div>
    </button>
    </Link>
    
  );
}