import React, { useState, useEffect } from "react";
import Recommended from "../components/Recommended";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import getGames from "../utils/getGames";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Markup } from "interweave";
import convertDate from "../utils/convertDate";
import changePlatformToImage from "../utils/changePlatformToImage";
import { motion } from "framer-motion";

const GameInfo = () => {
  const [info, setInfo] = useState();
  const [games, setGames] = useState([]);
  const [generating, setGenerating] = useState(true);
  const [x, setX] = useState(0);
  const [pictures, setPictures] = useState([]);
  // const [trailer, setTrailer] = useState('')
  // const [preview, setPreview] = useState('')
  const [para, setPara] = useState("");
  const [read, setRead] = useState(false)
  const [format, setFormat] = useState(true);

  let { id } = useParams();
  const [userId, setuserID] = useState(id);
  let navigate = useNavigate();
  let a = [];

  async function fetchGameInfo() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${userId}?key=86d224c0e8ce481aaf1756921701687d`
    );
    setInfo(data);
    console.log(info);
    let page = randomNumber();
    getGames({ page }).then((data) => {
      setGames(data);
      setGenerating(false);
    });
  }

  useEffect(() => {
    setuserID(id);
  }, [x]);

  useEffect(() => {
    fetchGameInfo();
    console.log(info);
  }, [userId]);

  function randomNumber() {
    return Math.floor(Math.random() * 150) + 1;
  }

  async function getPictures() {
    const query = info?.slug;
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${query}/screenshots?key=86d224c0e8ce481aaf1756921701687d`
    );
    a = data?.results?.map((picture) => {
      return picture?.image;
    });
    setPictures(a);
    //https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=10&page=1&key=86d224c0e8ce481aaf1756921701687d works
    //https://rawg.io/api/collections/must-play/feed?page=1&page_size=10&ordering=-added&key=86d224c0e8ce481aaf1756921701687d  works
  }

  // async function getAPI() {
  //   // const {data} = await axios.get(`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=100&page=1&key=86d224c0e8ce481aaf1756921701687d`) WORKS
  //   const {data} = await axios.get(``)
  //   console.log(data)
  // }

  useEffect(() => {
    getPictures();
    // getAPI();
    let tempParagraph = info?.description?.split("<br />")
    console.log(tempParagraph)
    if (tempParagraph?.length > 2) {
      setPara(tempParagraph[0]);
      setFormat(true)
    }
    // API is bad so I have to play around with it to get the right data
    else{
        setPara(info?.description?.split("</p>")[0])
        setFormat(false);
    }
  }, [info]);

  function changePara() {
    let temp = info?.description;
    if(!read){
      setPara(temp);
    }
    if(read){
      if(format) {
        setPara(temp.split("<br />")[0]);
      }
      else{
        setPara(temp.split("</p>")[0])
      }
    }
    setRead(!read);
  }

  useEffect(() => {
    fetchGameInfo({ id });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.div className="h-full"
    initial={{width: 0}}
    animate={{width: "100%", transition: {duration: 1}}}
    exit={{x: window.innerWidth,  transition: {duration: 1}}}>
      <div className="">
        <Nav />
      </div>
      <div className="col-start-1 col-end-3"></div>
      <div className=" flex flex-col scroll-smooth mt-4">
        <div className="max-w-[1350px] w-full mx-auto">
          <h1 className="text-[50px] w-[65%] translate-x-[6%] border-[#282838] border-4 bg-gradient-to-t from-[#1c1c28] to-gray-900 font-bold text-white rotate-[-1deg]  text-center break-words  p-2">
            {info?.name}
          </h1>
          <div className="flex justify-between">
          <figure className="rotate-[-1deg] w-[60%] h-full max-h-[500px] mt-10 overflow-hidden mx-auto border-4 border-black shadow-cool2">
            <img className="w-full h-full object-cover object-center " src={info?.background_image} alt="" />
          </figure>
            {/* <Carousel
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={5000}
              autoPlay={true}
              className="rotate-[-1deg] w-[60%] h-full max-h-[500px] mt-10 overflow-hidden mx-auto border-4 border-black shadow-cool2"
            >
              <div className="h-full w-full">
                <img
                  className="w-full h-full object-cover object-center  "
                  src={info?.background_image}
                  alt=""
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover object-center  "
                  src={info?.background_image_additional}
                  alt=""
                />
              </div>
              {pictures[0] ? (
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={pictures[0]}
                    alt=""
                  />
                </div>
              ) : null}
              {pictures[1] ? (
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={pictures[1]}
                    alt=""
                  />
                </div>
              ) : null}
              {pictures[2] ? (
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={pictures[2]}
                    alt=""
                  />
                </div>
              ) : null}
              {pictures[3] ? (
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={pictures[3]}
                    alt=""
                  />
                </div>
              ) : null}
              {pictures[4] ? (
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={pictures[4]}
                    alt=""
                  />
                </div>
              ) : null}
              {pictures[5] ? (
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={pictures[5]}
                    alt=""
                  />
                </div>
              ) : null}
            </Carousel> */}
            <div className="flex flex-col justify-evenly w-[25%] break-words rotate-[-1deg] transition-all  duration-[.65s] bg-gradient-to-t from-[#1c1c28] to-gray-900 p-2 border-8 border-[#282838] ">
              <div>Title: {info?.name}</div>
              <div className="flex">
                <h2 className="">
                  Release Date: {convertDate(info?.released)}
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className=" space-x-1">
                  Platforms:{" "}
                  {info?.parent_platforms?.map((platform) =>
                    changePlatformToImage(platform?.platform?.slug)
                  )}{" "}
                </h2>
              </div>
                <div className="flex">
                  <h2 className="flex">
                    Genres:{" "}
                    {info?.genres?.map((genre) => (
                      genre?.name + ", "
                    ))}
                  </h2>
                </div>
                <div className="flex">
                  <h2 className="flex">
                    Stores:{" "}
                    {info?.stores?.map((res) => (
                      res?.store.name + ", "
                    ))}
                  </h2>
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="">
                    ESRB Rating: {info?.esrb_rating?.name || "Not Rated"}
                  </h2>
                </div>
                <div className="flex space-x-1">
                  <h2 className="">Website:</h2>
                  <a className="" href={info?.website}>
                    {info?.website}
                  </a>
                </div>
                <div className="flex flex-col space-y-1">
                  <h2>
                    Developers: {info?.developers?.map((developer) => (
                      <div>
                        <div className="flex space-x-2 items-center">
                          <img
                            className="w-8 h-8 borderborder-black rounded-full object-cover"
                            src={developer?.image_background}
                            alt=""
                          />
                          <p>{developer?.name}</p>
                        </div>
                      </div>
                    ))}
                  </h2>
                </div>
            </div>
          </div>

          <div className="mt-16 text-[20px] w-[65%] translate-x-[6%]">
            <Markup content={para || ""} />
            {
            !read ? <button onClick={changePara} className="opacity-80 uppercase">read more...</button>
            :
            <button onClick={changePara} className="opacity-80 uppercase ">read less...</button>
            }

          </div>
        </div>
      </div>
      <footer className="col-span-12">
        <Footer />
      </footer>
    </motion.div>
  );
};

export default GameInfo;
