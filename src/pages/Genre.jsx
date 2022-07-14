import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GameForGenre from "../components/GamesForGenre";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Genre({ x }) {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(Math.floor(Math.random() * 20) + 1);

  let navigate = useNavigate();

  async function genreGames() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=3bc6f0eacb5a456197a9a9862988f1c0&page=${page}`
    );
    console.log(data.results);
    setGames(data.results);
  }

  function handleClick() {
    navigate('/')
  }

  useEffect(() => {
    genreGames();
  }, []);

  return (
    <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide h-screen flex items-center justify-center flex-col">
        <button onClick={handleClick} className='group'>
          <ArrowLeftIcon className="w-8 md:w-12 hover:scale-110 transition-all duration-350 cursor-pointer h-8 md:h-12 absolute top-3 left-3"/> 
          <p className="tracking-widest top-6 text-[24px] hidden group-hover:inline absolute left-20 font-bold">Back to Home</p>
        </button>
        <div className="flex items-center top-3 right-5 md:absolute">
            <img className="object-contain p-2 mr-2" src='https://day-ztracker.vercel.app/assets/icons8-flat-60.png'/>
          <h1 className="font-bold text-4xl hidden sm:inline tracking-widest">dayZgamer</h1>
        </div>
        <h1 className="text-[64px] px-2 mb-4 tracking-widest font-bold border-t-4 border-cyan-900 rounded-lg">Results</h1>
        <p className="">(15 games)</p>
      <div className="w-full p-4 mt-[6100px] md:mt-0 items-center flex relative flex-col md:flex-row">
        {
        games
          .map((result) => <GameForGenre key={result.id} result={result} />)
          .splice(0, 15)
          }
      </div>
    </div>
  );
}
