import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import GameForGenre from "../components/GamesForGenre";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../components/nav";
import getGames from "../utils/getGames";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import Loading from '../assets/Loading.json'
import lottie from 'lottie-web'


export default function Genre({addToWishlist, wishlist}) {
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

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: loadingRef?.current, // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: 'https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json',
  //     animationData: Loading,
  //   }) 
  // },)

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

  const loadingRef = useRef(null);


  return (
    <div className="w-full scrollbar-hide h-full flex flex-col">
        <Nav/>
      {search?.length > 1 && <div className="flex justify-center sticky text-[24px] underline underline-offset-2">
        Search results for "<span className="first-letter:uppercase">{query?.replaceAll('-',' ')}</span>"
      </div>}
      <div ref={ref} className="overflow-x-scroll scrollbar-hide  w-full mt-1 h-[80vh] flex relative flex-col md:flex-row scroll-smooth">
        {loading && <div ref={loadingRef} className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-70%] w-[80%] h-[80%] flex justify-center items-center"></div>}
        {!loading && games?.map((result) => (
          <div className="min-w-[400px] py-2 h-full max-h-[680px] hover:scale-[103%] transition-all  duration-[.65s] bg-[#20202e] odd:border-b-[#fc61ff] border-4 border-[#20202e] even:border-b-[#61ffda] m-5">
              <GameForGenre result={result} key={result.id} addToWishlist={addToWishlist} wishlist={wishlist}/>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full absolute bottom-2">
        <button onClick={() => scroll(-1500)} className="bg-[#292945] hover:bg-white hover:text-[#292945] rounded-full p-3 ml-8 text-white  animate-zipper  cursor-pointer hover:bg-opacity-100
           transition text-[30px]">{<FaArrowLeft/>}</button>
          <button onClick={() => scroll(1500)} className="bg-[#292945] hover:bg-white hover:text-[#292945] rounded-full p-3 mr-8 text-white animate-zipper  cursor-pointer hover:bg-opacity-100
           transition text-[30px]"><FaArrowRight/></button>
        </div>
        <Footer />
    </div>
  );
}
