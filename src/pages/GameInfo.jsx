import React, {useState, useEffect} from "react";
import Recommended from "../components/Recommended";
import { Navigate, useParams } from "react-router-dom";
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import Loading from "../components/recLoading";
import getGames from "../utils/getGames";
import GameForGenre from "../components/GamesForGenre";
import { PlusIcon } from "@heroicons/react/outline";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Markup } from "interweave";
import convertDate from "../utils/convertDate";
import changePlatformToImage from "../utils/changePlatformToImage";

const GameInfo = (props) => {
  const [info, setInfo] = useState();
  const [games, setGames] = useState([])
  const [generating, setGenerating] = useState(true)
  const [list, setList] = useState([])
  const [x, setX] = useState(0)
  const [pictures, setPictures] = useState([])
  const [trailer, setTrailer] = useState('')
  const [preview, setPreview] = useState('')
  const [para, setPara] = useState('')

  let {id} = useParams();
  const [userId, setuserID] = useState(id)
  let navigate = useNavigate();
  let a = [];

   async function fetchGameInfo() {
    const {data} = await axios.get(`https://api.rawg.io/api/games/${userId}?key=b856ad245b7a4d40affdcba24da8dc7b`)
    setInfo(data)
    console.log(info)
    let page = randomNumber()
    getGames( {page} ).then((data) => {
      setGames(data)
      setGenerating(false)
    })
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setuserID(id)
  }, [x])

  useEffect(() => {
    fetchGameInfo()
  },[userId])

   function randomNumber() {
    return Math.floor(Math.random() * 150) + 1
  }


  async function getPictures() {
    const query = info?.slug
    const {data} = await axios.get(`https://api.rawg.io/api/games/${query}/screenshots?key=b856ad245b7a4d40affdcba24da8dc7b`)
    a = data?.results?.map((picture) => {
      return picture?.image
    })
    setPictures(a)
     //https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=10&page=1&key=93c589388c5f4142a0afda5bbf82bd99 works
    //https://rawg.io/api/collections/must-play/feed?page=1&page_size=10&ordering=-added&key=93c589388c5f4142a0afda5bbf82bd99  works
  }

  // async function getAPI() {
  //   // const {data} = await axios.get(`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=100&page=1&key=93c589388c5f4142a0afda5bbf82bd99`) WORKS
  //   const {data} = await axios.get(``)
  //   console.log(data)
  // }

  useEffect(() => {
    getPictures();
    // getAPI();
    let tempParagraph = info?.description?.split('</p>')
    if(tempParagraph) {
      setPara(tempParagraph[0] + tempParagraph[1])
    }
  }, [info])

  useEffect(() => {
    fetchGameInfo({id})
  }, [])

 const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className="h-full grid grid-cols-12">
      <div className="col-start-2 col-end-12">
        <Nav />
      </div>
      <div className="col-start-1 col-end-3">
        <Sidebar />
      </div>
      <div className="col-start-[4] col-end-10 flex flex-col scroll-smooth">
        <div className="col-span-2">
          <h1 className="text-[64px] font-bold text-black border-4 border-black shadow-cool2 bg-white p-3">{info?.name}</h1>
            {/* <img src={info?.background_image_additional} alt="" />
            {pictures.map((picture) => {
              return <img src={picture} alt="" />
            })} */}
            <Carousel
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={1000}
              className="w-[500px] h-[500px]"
              >
             <div className="w-[80%] h-[80%]">
                <img src={info?.background_image} alt="" />
             </div>
             <div className="w-[80%] h-[80%]">
                <img src={info?.background_image_additional} alt="" />
             </div>
             {pictures[0] ? <div>
              <img src={pictures[0]} alt="" />
             </div> : null}
             {pictures[1] ? <div>
              <img src={pictures[1]} alt="" />
             </div> : null}
             {pictures[2] ? <div>
              <img src={pictures[2]} alt="" />
             </div> : null}
             {pictures[3] ? <div>
              <img src={pictures[3]} alt="" />
             </div> : null}
             {pictures[4] ? <div>
              <img src={pictures[4]} alt="" />
             </div> : null}
             {pictures[5] ? <div>
              <img src={pictures[5]} alt="" />
             </div> : null}
            </Carousel>
          <Markup className="" content={para || ''} />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="underline underline-offset-2">Release Date </h2>
              <h2>{convertDate(info?.released)}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="underline underline-offset-2">Platforms </h2>
              <h2>{info?.parent_platforms?.map((platform) => (
                changePlatformToImage(platform?.platform?.slug))
                )}
                </h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <h2 className="underline underline-offset-2 ">Genres: </h2>
              <h2 className="space-x-1 flex">
                  {info?.genres.map((genre) => (
                    <p> 
                       {genre.name}
                    </p>
              ))}</h2>
            </div>
            <div className="flex flex-col text-left">
              <h2 className="underline underline-offset-2 ">ESRB Rating </h2>
              <h2>{info?.esrb_rating?.name || "Not Rated"}</h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="underline underline-offset-2">Website</h2>
              <a className="" href={info?.website}>{info?.website}</a>
            </div>
            <div className="flex flex-col">
              <h2 className="underline underline-offset-2">About the Developers</h2>
              <h2>{info?.developers?.map((developer) => (
                <div>
                  <div className="flex space-x-2 items-center">
                    <img className="w-12 h-12 borderborder-black rounded-full object-cover" src={developer?.image_background} alt="" />
                    <p>{developer?.name}</p>
                  </div>
                  <p>Games count: {developer?.games_count}</p>
                </div>
              ))}</h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="underline underline-offset-2">Stores: </h2>
              <h2 className="flex flex-col">{info?.stores?.map((res) => (
                <a href={res?.store?.domain}>{res?.store?.name}</a>
              ))}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="underline underline-offset-2">Reviews </h2>
              <h2>{info?.released}</h2>
            </div>
          </div>
        </div>
      </div>
      <footer className="col-span-12">
         <Footer />
      </footer>
    </div>
  );
};

export default GameInfo;