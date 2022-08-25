import React, { useState } from "react";
import Home from "../pages/Home";
import WishList from "../pages/WishList";
import GameInfo from "../pages/GameInfo";
import Landing from "../pages/Landing";
import Genre from "../pages/Genre";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (game) => {
    const gameExists = wishlist.find((item) => item.id === game.id);
    if (gameExists) {
      setWishlist(
        wishlist.map((item) =>
          item.id === game.id
            ? { ...gameExists, quantity: gameExists.quantity + 1 }
            : item
        )
      );
    } else {
      setWishlist([...wishlist, { ...game, quantity: 1 }]);
    }
    const refreshToast = toast.loading("Adding...");
    setTimeout(() => {
      toast.success("Added to Wishlist", {
        id: refreshToast,
      });
    }, 1000);
  };

  const handleRemoveGame = (game) => {
    const gameExists = wishlist.find((item) => item.id === game.id);
    if (gameExists.quantity === 1) {
      setWishlist(wishlist.filter((item) => item.id !== game.id));
    } else {
      setWishlist(
        wishlist.map((item) =>
          item.id === game.id
            ? { ...gameExists, quantity: gameExists.quantity - 1 }
            : item
        )
      );
    }
  };

  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/games"
            element={<Home wishlist={wishlist} addToWishlist={addToWishlist} />}
          />

          <Route path="GameInfo/:id" element={<GameInfo />} />

          <Route path="/" element={<Landing />} />

          <Route
            path="/Wishlist"
            element={
              <WishList
                wishlist={wishlist}
                addToWishlist={addToWishlist}
                handleRemoveGame={handleRemoveGame}
              />
            }
          />

          <Route
            path="/genre"
            element={
              <Genre wishlist={wishlist} addToWishlist={addToWishlist} />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
