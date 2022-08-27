import React, { useEffect, useRef } from "react";
import Nav from "../components/nav";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import GameForGenre from "../components/GamesForGenre";
import GameDisplay from "../components/GameDisplay";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import empty from "../assets/empty.json";
import lottie from "lottie-web";
import { motion } from "framer-motion";

export default function WishList({
  wishlist,
  handleRemoveGame,
  addToWishlist,
}) {
  let navigate = useNavigate();

  useEffect(() => {
    lottie.loadAnimation({
      container: emptyRef?.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json",
      animationData: empty,
    });
  });

  const emptyRef = useRef(null);

  return (
    <motion.div className="h-screen flex flex-col"
    initial={{opacity: 0,  scale: .5}}
    animate={{opacity: 1,  scale: 1, transition: {duration: 0.7} }}
    exit={{opacity: 0, rotate: 0, scale: .5, transition: {duration: 0.7}}}>
      <Nav />
      <Sidebar />
      <div className="flex mt-8 justify-center ">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-black tracking-wide text-[28px] text-white">
              Your wishlist is currently empty
            </h1>
            <figure
              ref={emptyRef}
              className="max-w-[700px] max-h-[700px] aspect-square w-full h-full"
            ></figure>
          </div>
        ) : (
          <div className="p-6">
            {wishlist.map((game) => (
              <motion.div
              initial={{opacity: 0,  scale: .5}}
              animate={{opacity: 1,  scale: 1, transition: {duration: 1} }}
              exit={{opacity: 0, rotate: 0, scale: .5, transition: {duration: 0.7}}} 
              className="p-6 mb-2 " key={game.id}>
                {<GameDisplay result={game} key={game.id} />}
                <div className="flex space-x-4">
                  <div className="group relative ">
                    <button
                      onClick={() => handleRemoveGame(game)}
                      className="text-white mt-4 font-bold"
                    >
                      Leave A Review
                    </button>
                    <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] -bottom-1 w-full border-b-2 border-white height-[10px] z-50"></span>
                  </div>
                  <div className="group relative">
                    <button
                      onClick={() => handleRemoveGame(game)}
                      className="text-red-600 mt-4 font-bold"
                    >
                      Remove From Wishlist
                    </button>
                    <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] -bottom-1 w-full border-b-2 border-red-600 height-[10px] z-50"></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
}
