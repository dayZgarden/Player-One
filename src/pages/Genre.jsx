import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import GameForGenre from "../components/GamesForGenre";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../components/nav";
import getGames from "../utils/getGames";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { StarIcon, PlusIcon} from "@heroicons/react/solid";


export default function Genre() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(Math.floor(Math.random() * 40) + 1);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const search = location?.state?.search || '';
  const query = location?.state?.word || '1';
  console.log(query)

  useEffect(() => {
    if(search?.length > 0) {
      setGames(search)
      setLoading(false)
      console.log('a')
    }
    else{
      console.log('b')
      getGames({ page }).then((data) => {
        setGames(data);
        console.log(games)
        setLoading(false);
       });
    }
  }, []);

    useEffect(() => {
      if(search?.length > 0){
        setGames(search)
        setLoading(false)
      }
  }, [query])


  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


  return (
    <div className=" scrollbar-hide h-screen flex flex-col bg-gradient-to-b from-neutral-900 via-sky-900">
        <Nav/>
      {search?.length > 1 && <div className="flex justify-center sticky text-[24px] underline underline-offset-2">
        Search results for "<span className="first-letter:uppercase">{query?.replaceAll('-',' ')}</span>"
      </div>}
      <div ref={ref} className=" overflow-x-scroll  overflow-y-visible scrollbar-hide w-full mt-4 h-[75%] flex relative flex-col md:flex-row scroll-smooth">
        {loading? 'loading' : games?.map((result) => (
          <div className="group hover:scale-[103%] transition-all duration-[.65s] perspective odd:translate-y-[3%] even:translate-y-[10%] h-[50%]
          flex relative  m-4 ">
          <div className="bg-slate-400 cursor-pointer w-full duration-1000  
          preserve-3d border-black border-4 shadow-cool2">
            <div className="backface-hidden">
              <span className="z-50"><button className="z-50"><PlusIcon className="z-50 rounded-full hover:bg-black hover:text-white hover:border-white text-black border-4 bg-white border-black -top-8 -right-8 h-16 w-16 absolute hover:scale-[107%] transition-all duration-300"/></button></span>
              <GameForGenre result={result} key={result.id} />
            </div>
            <div className="absolute h-1/2 w-full top-28 left-0 space-y-6  text-[32px] font-extrabold text-white  backface-hidden my-rotate-y-180 flex flex-col ">
              <button className="p-4 w-[80%] mx-auto border-4 brightness-0 shadow-cool">View Game</button>
              <button className="p-4 w-[80%] mx-auto border-4 brightness-0 shadow-cool">Add to Wishlist</button>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 absolute bottom-6 left-1/2 -translate-x-1/2">
        <button onClick={() => scroll(-1500)} className="bg-white px-8 py-2 text-black border-4 border-black shadow-cool2  bg-opacity-70 cursor-pointer hover:bg-opacity-100
           transition text-[30px]">{<AiOutlineVerticalRight/>}</button>
          <button onClick={() => scroll(1500)} className="bg-white px-8 py-2 text-black border-4 border-black shadow-cool2  bg-opacity-70 cursor-pointer hover:bg-opacity-100
           transition text-[30px]"><AiOutlineVerticalLeft/></button>
        </div>
    </div>
  );
}
