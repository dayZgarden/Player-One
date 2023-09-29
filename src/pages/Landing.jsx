import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDrag } from "react-use-gesture";
import consoles from "../assets/consoles.svg";
import { GiAnarchy, GiAngularSpider, GiRocket } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import vrdude from "../assets/vrdude.svg";
import wave1 from "../assets/wave1.svg";
import { ArrowDownIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import lottie from "lottie-web";
import videogames from "../assets/lottie-videogame.json";
import { Gi3DMeeple } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import reviews from "../utils/reviews.js";

export default function Landing() {
  const navigate = useNavigate();
  const [infoModal, setInfoModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [X, setX] = useState(0);
  const [burger, setBurger] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    console.log(X);
    if (X == 0) {
      lottie.loadAnimation({
        container: container?.current, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json",
        animationData: videogames,
      });
    }
    setX[X + 1];
  }, [loading]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    // Set triggerAnimation to true when the section is in view
    if (inView) {
      setTriggerAnimation(true);
    }
  }, [inView]);

  const [index, setIndex] = useState(0);
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], distance }) => {
      if (!down && distance > 100) {
        if (xDir < 0)
          setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
        if (xDir > 0)
          setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      }
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = Math.floor(prevPercentage + Math.random()*3.4);
        if (nextPercentage >= 101) {
          setLoading(false);
          clearInterval(interval);
        }
        return nextPercentage;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const container = useRef(null);

  return (
    <>
      {!loading ? (
        <div className="h-full w-full relative scrollbar-hide scrollbar-track-gray-100 overflow-x-hidden">

          {!burger ? (
            <div className="min-h-screen bg-space2 bg-cover ">
              <div className="h-full min-h-screen p-10 w-full backdrop-blur-lg backdrop-opacity-30 bg-[#1c1c28] bg-opacity-70">
                <nav className=" sticky flex justify-between items-center w-[95%] mx-auto">
                  <div className="flex items-center">
                    <h1 className="font-bold text-4xl  uppercase">
                      Player one
                    </h1>
                  </div>
                  <ul className="lg:flex hidden flex-col sm:flex-row justify-evenly sm:items-center">
                    <li className="px-6 text-sm group relative">
                      <a className="" href="/">
                        Home
                      </a>
                      <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                    </li>
                    <li className="px-6 text-sm group relative">
                      <a href="#about">About</a>
                      <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                    </li>
                    <li className="px-6 text-sm group relative">
                      <a href="#contact">Contact</a>
                      <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                    </li>
                    <li className="px-6 text-sm group relative">
                      <a target="_blank" href="https://rawg.io">
                        Database
                      </a>
                      <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                    </li>
                    <li className="px-6 text-sm group relative">
                      <a target="_blank" href="https://rawg.io">
                        Discover
                      </a>
                      <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                    </li>
                  </ul>
                  <div className="text-sm hidden md:inline">
                    <button className="" onClick={() => navigate("/games")}>
                      Log in
                    </button>
                  </div>

                  <AiOutlineMenu
                    onClick={() => setBurger(!burger)}
                    className="z-2 text-white inline md:hidden w-8 h-8"
                  />
                </nav>
                <section className="max-w-7xl mt-10 mx-auto w-full flex ">
                  <div className=" flex flex-col">
                    <div className="mt-8 ">
                      <h1 className="flex-1  text-center text-xl sm:text-3xl md:text-5xl lg:text-8xl w-[95%] mx-auto  font-bold sm:font-black uppercase text-white lg:leading-[110px] tracking-[1px]">
                        Discover amazing games & explore with friends
                      </h1>
                    </div>
                    <div className="text-[4vw] sm:text-[24px] text-center mt-4 md:mt-12 text-white w-[60%] mx-auto">
                      The world's largest database of video games to discover
                      new games and connect with other players.
                    </div>
                    <button
                      onClick={() => navigate("/games")}
                      className="p-6  hover:tracking-widest transition-all duration-500 text-[24px] text-white font-bold tracking-wide mt-12  mx-auto bg-gradient-to-r from-[#a881ff] to-[#5969Fe] rounded-md shadow-md active:w-[25%] active:tracking-wide active:scale-90"
                    >
                      Start Discovering
                    </button>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div className="h-screen block fixed top-0 left-0 right-0 overflow-hidden bg-black  animate-topToBottom">
              <AiOutlineMenu
                onClick={() => setBurger(!burger)}
                className="z-2 text-white inline md:hidden w-8 h-8"
              />
            </div>
          )}

          {!burger ? (
            <span className="flex justify-center mx-auto  sm:w-full p-10  sm:p-20 bg-gradient-to-t from-[#1c1c28] to-gray-900">
              <img src={consoles} alt="" />
            </span>
          ) : (
            "hidden"
          )}

          {!burger ? (
            <section
              ref={ref}
              className={`animate-leftToRight p-20 min-h-[100vh] pt-40 ${
                triggerAnimation ? "animate" : ""
              }`}
            >
              <div className="max-w-[1350px] w-full mx-auto h-full text-center">
                <div className="flex flex-col">
                  <h1 className="text-[#FFBF66] font-bold uppercase text-[24px]">
                    —— PLAYER ONE ——
                  </h1>
                  <h2 className="text-white font-bold  text-[50px] text-center w-[75%] mx-auto leading-snug">
                    Crossing the boundary between the void of games & players
                  </h2>
                </div>
                <div className="flex md:flex-row flex-col h-[40vh]  mx-auto mt-20 justify-evenly md:items-stretch items-center relative">
                  <div className="w-[25%] rounded-t-xl h-auto bg-[#20202e] relative flex items-center justify-center flex-col border-b-2 border-[#fc61ff]">
                    <h2 className="font-bold  text-[1rem] text-center mt-8  w-[80%] mx-auto">
                      Our database has over 800,000 games to discover on any
                      platform from any time.{" "}
                    </h2>
                  </div>
                  <div className="w-[25%]  rounded-t-xl h-auto bg-[#20202e] items-center justify-center flex flex-col border-b-2 border-[#7b61ff] relative">
                    <h2 className="font-bold text-[1rem] text-center mt-8  w-[80%] mx-auto">
                      Find other players who are interested in the same games as
                      you. Connect and start playing.
                    </h2>
                  </div>
                  <div className="w-[25%]  rounded-t-xl h-auto  bg-[#20202e] items-center justify-center  flex flex-col border-b-2 border-[#61ffda] relative">
                    <h2 className="font-bold text-[1rem] text-center mt-8  w-[80%] mx-auto">
                      We bring the latest games to you and provide information
                      exclusively on our platform.
                    </h2>
                  </div>
                  <span
                    className="max-w-[20rem] max-h-[20rem] h-full w-full aspect-square rounded-full animation-delay-2s bg-[#fc61ff] blur-[50px] opacity-30 absolute
                     animate-blob left-40 bottom-20 z-[-2]"
                  ></span>
                  <span
                    className="max-w-[21rem] max-h-[21rem] h-full w-full aspect-square rounded-full animation-delay-4s bg-[#7b61ff] blur-[50px] opacity-40 absolute 
                       animate-blob z-[-2]"
                  ></span>
                  <span
                    className="max-w-[20rem] max-h-[20rem] h-full w-full aspect-square rounded-full bg-[#61ffda] blur-[50px] opacity-20 absolute
                       right-40 animate-blob z-[-2]"
                  ></span>
                </div>
              </div>
            </section>
          ) : (
            "hidden"
          )}

          {/* {!burger ? (
            <section
              className={`animate-rightToLeft min-h-[80vh] relative bg-[#282838] mt-16 p-20 ${
                triggerAnimation ? "animate" : ""
              }`}
            >
             
                  <div className="flex flex-col md:flex-row  w-full">
                    <div className="flex flex-col  w-[50%] text-center items-center">
                      <h1 className="text-[24px]  max-w-[1350px]  mx-auto font-bold uppercase text-[#FFBF66]">
                        —— Discover Games ——
                      </h1>
                      <h1 className=" text-white  max-w-[1350px]  mx-auto font-bold  mt-6 text-[50px] w-[75%] ">
                        Endless games to be found from any platform
                      </h1>
                      <p className="text-[#a1a3bb] w-[55%] mt-4 text-[1.25rem]">
                        Find the right game for you & your friends in our supply
                        of video game recommendations Find the right game for
                        you & your friends in our supply of video game
                        recommendations Find the right game for you & your
                        friends in our supply of video game recommendations
                      </p>
                      <div className=" mx-auto flex flex-wrap justify-evenly mt-10 ">
                        <div className="lg:w-[18%] w-[30%]  hover:scale-[105%] group transition-all duration-500 hover:aspect-square bg-[#20202e] h-[380px]"></div>
                      </div>
                    </div>
                    <div>
                      <img src="" alt="" />
                    </div>
                  </div>
            </section>
          ) : (
            "hidden"
          )} */}
          {/* <span className=" w-full">
            <img src={wave1} className="w-full rotate-180" alt="" />
          </span> */}

          {!burger ? (
            <section className="p-20">
              <div className="max-w-[1350px] w-full mx-auto h-full">
                <h1 className="text-[24px] uppercase font-bold text-[#FFBF66] text-center">
                  —— How it works ——
                </h1>
                <div className="flex justify-center mt-16">
                  <figure
                    ref={container}
                    className="w-[48%] max-h-[520px] h-full "
                  ></figure>
                  <div className="flex flex-col w-[48%] relative p-6">
                    <h1 className="font-bold text-[40px] w-[70%] leading-tighter">
                      Never finding the right game to play?{" "}
                    </h1>
                    <ul className="flex flex-col mt-6 space-y-6">
                      <li className="flex space-x-4 items-center  border-[#fc61ff]">
                        <GiAnarchy className="w-10 h-10 bg-[#fc61ff] rounded-full p-1 px-1  bg-opacity-70" />
                        <div className="flex flex-col ">
                          <h2 className="font-bold text-sm ">Start by</h2>
                          <p className="text-[#a1a3bb] w-[65%]">
                            Find the right game for you & your friends in our
                            supply of video game recommendations
                          </p>
                        </div>
                      </li>
                      <li className="flex space-x-4 items-center">
                        <Gi3DMeeple className="w-10 h-10 bg-[#7b61ff] rounded-full p-1 px-1" />
                        <div className="flex flex-col">
                          <h2 className="font-bold text-sm">
                            Title of this
                          </h2>
                          <p className="text-[#a1a3bb] w-[65%]">
                            Find the right game for you & your friends in our
                            supply of video game recommendations
                          </p>
                        </div>
                      </li>
                      <li className="flex space-x-4 items-center">
                        <GiAngularSpider className="w-10 h-10 bg-[#61ffda] bg-opacity-70 rounded-full p-1 px-1" />
                        <div className="flex flex-col">
                          <h2 className="font-bold text-sm">
                            Title of this
                          </h2>
                          <p className="text-[#a1a3bb] w-[65%]">
                            Find the right game for you & your friends in our
                            supply of video game recommendations
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            "hidden"
          )}

          {!burger ? (
            <section className="p-20 h-full">
              <div className="max-w-[1350px] w-full mx-auto">
                <div className="flex flex-col w-full text-black items-center justify-center h-full">
                  <h1 className="text-[24px] uppercase font-bold text-[#FFBF66] text-center">
                    —— Testimonials ——
                  </h1>
                  <h2 className="text-white font-bold text-center text-[3rem]  mx-auto leading-snug mt-4">
                    Read What Others Have To Say
                  </h2>
                  <div
                    className="flex justify-center space-x-4 mt-20"
                    {...bind()}
                    style={{
                      transform: `translateX(-${index * 3}%)`,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {reviews.map((review, i) => (
                      <div
                        key={i}
                        className={` ${
                          i % 2 == 0 ? "translate-y-[10%]" : "0%"
                        } bg-[#292945] p-4 rounded-xl w-[25rem] h-[20rem] relative`}
                      >
                        <div className="w-full flex">
                          <div className=" flex flex-col ">
                            <div className="flex ">
                              {Array.from({ length: review.rating }).map(
                                (_, j) => (
                                  <FaStar
                                    key={j}
                                    className={`w-6 h-6 rounded-full text-[#f3d85f]`}
                                  />
                                )
                              )}
                            </div>
                            <p className="text-[#a1a1ad] mt-1">
                              {review.comment}
                            </p>
                            <h2 className="font-bold text-white mt-2">
                              {review.name}
                            </h2>
                            <h3 className="text-[#7e86cf] font-bold text-[14px]">
                              {review.position}
                            </h3>
                            <p className="text-white font-bold text-[14px]">
                              {review.review}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            "hidden"
          )}

          {!burger ? <Footer /> : "hidden"}
        </div>
      ) : (
        <div className="fixed top-0 left-0 right-0 bottom-0  flex justify-center items-center">
          <div className="text-white text-6xl font-black">{percentage}</div>
        </div>
      )}
    </>
  );
}
