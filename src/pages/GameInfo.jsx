import React, {useState, useEffect} from "react";
import GameDisplay from "../components/GameDisplay";
import Recommended from "../components/Recommended";
import { Navigate, useParams } from "react-router-dom";
import axios from 'axios'
import { GiftIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../components/recLoading";

const GameInfo = (props) => {
  const [info, setInfo] = useState();
  const [games, setGames] = useState([])
  const [generating, setGenerating] = useState(true)
  const [list, setList] = useState([])
  const [x, setX] = useState(0)

  let {id} = useParams();
  const [userId, setuserID] = useState(id)
  let navigate = useNavigate();

   async function fetchGameInfo() {
    const {data} = await axios.get(`https://api.rawg.io/api/games/${userId}?key=3bc6f0eacb5a456197a9a9862988f1c0`)
    setInfo(data)
    console.log(info)
    fetchGames();
  }

  function changeId() {
    let y = 1 + x;
    setX(y)
  }

  useEffect(() => {
    setuserID(id)
  }, [x])

  useEffect(() => {
    fetchGameInfo()
  },[userId])

   function randomNumber() {
    return Math.floor(Math.random() * 150) + 1
  }

  async function fetchGames() {
    let x = randomNumber()
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=3bc6f0eacb5a456197a9a9862988f1c0&page=${x}`)
    const url = data.next
    console.log(data.results)
    setGames(data.results)
    setGenerating(false)
  }

  console.log(games)
  function handleClick(){
    navigate('/')
  }

  function handleList() {
    setList(info)
  }

  useEffect(() => {
    fetchGameInfo({id})
  }, [])

  // console.log(props.name)

  return (
    <div className="h-screen flex-col flex md:flex-row">
      <div className="flex justify-center items-center h-screen w-full md:w-2/5 border-r-2 border-cyan-600 relative">
        <button onClick={handleClick} className='group'>
          <ArrowLeftIcon className="w-12 hover:scale-110 transition-all duration-350 cursor-pointer h-12 absolute top-3 left-3"/> 
          <p className="tracking-widest top-6 text-[24px] hidden group-hover:inline absolute left-20 font-bold">Back to Home</p>
        </button>
        <img
          src={info?.background_image_additional}
          className="mt-[100px] md:mt-0 h-5/6 w-5/6 md:w-full object-cover mx-auto p-4 border-t-2 border-b-2 
          border-t-cyan-600 border-b-indigo-600"
        />
        <button onClick={handleList} className="absolute bottom-6 text-[24px] font-bold text-center px-2 border-r-2 border-l-2 rounded-lg hover:animate-pulse 
        hover:scale-105 cursor-pointer tracking-widest hidden md:inline"> Add to Wishlist </button>
      </div>
      <div className="w-full md:w-3/5 h-screen flex flex-col">
        <div className="h-2/3 flex justify-evenly flex-col border-b-2 border-indigo-600 relative">
            <div className="mt-8 md:mt-0">
              <h1 className="text-[48px] text-center mt-1 w-1/2 mx-auto p-1 border-r-2  border-cyan-600 rounded-lg font-bold mb-4 tracking-widest">{info?.name}</h1>
              <div className="w-2/3 text-center mt-4 mx-auto p-1 rounded-lg border-l-2 border-indigo-600">

              <p>Released: {info?.released} </p>
              <p className="tracking-widest text-[32px] font-bold"> </p>
              <p className="text-[30px] tracking-wide ">{info?.achievements_count} Achievements</p>
                | {
                  info?.genres.map(g=> `${g.name} | `)
                } 

              </div>
            </div>
            <div className="overflow-hidden mb-5 md:mb-0">
              <p className="overflow-hidden m-5 text-[16px] text-center">{info?.description_raw}</p>
            </div>
        </div>
        <div  className="h-2/5">
            <h1 className="mt-5 md:mt-0 text-center font-bold tracking-widest text-[30px]">
                Recommended Games
            </h1>
            {
              generating? <Loading /> : (
                <button onClick={changeId} className="flex flex-wrap justify-evenly cursor-pointer h-5/6">
                {
                games?.map((result)=>(
                  <Recommended key={result.id} result = {result} />
                )).splice(0,4)
                } 
              </button>
              )
            }

        </div>
      </div>
    </div>
  );
};

export default GameInfo;