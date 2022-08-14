import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import GameForGenre from "../components/GamesForGenre";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../components/nav";
import getGames from "../utils/getGames";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { StarIcon, PlusIcon, CheckIcon} from "@heroicons/react/solid";
import Footer from "../components/Footer";


export default function Genre() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(Math.floor(Math.random() * 40) + 1);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [added, setAdded] = useState(false);

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
  
  const changeIcon = () => {
    setAdded()
    setTimeout(() => {
      setAdded(false)
    }, 1000)
  }

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


  return (
    <div className=" scrollbar-hide h-full flex flex-col bg-gradient-to-b from-neutral-900 via-sky-900">
        <Nav/>
      {search?.length > 1 && <div className="flex justify-center sticky text-[24px] underline underline-offset-2">
        Search results for "<span className="first-letter:uppercase">{query?.replaceAll('-',' ')}</span>"
      </div>}
      <div ref={ref} className="overflow-x-scroll scrollbar-hide overflow-y-visible  w-full mt-4 h-[90vh] flex relative flex-col md:flex-row scroll-smooth">
        {loading? 'loading' : games?.map((result) => (
          <div>
              <GameForGenre result={result} key={result.id} />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full absolute bottom-6">
        <button onClick={() => scroll(-1500)} className="bg-white px-12 py-2 ml-8 text-black border-4 border-black shadow-cool2  bg-opacity-70 cursor-pointer hover:bg-opacity-100
           transition text-[30px]">{<AiOutlineVerticalRight/>}</button>
          <button onClick={() => scroll(1500)} className="bg-white px-12 py-2 mr-8 text-black border-4 border-black shadow-cool2  bg-opacity-70 cursor-pointer hover:bg-opacity-100
           transition text-[30px]"><AiOutlineVerticalLeft/></button>
        </div>
    </div>
  );
}
