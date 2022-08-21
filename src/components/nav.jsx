import React, { useState } from "react";
import {
  SearchIcon,
  UserIcon,
  HomeIcon, RefreshIcon, StarIcon, XIcon
} from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import axios from "axios";
import toast from 'react-hot-toast'

export default function nav() {


  const refresh =  () => {
    const refreshToast = toast.loading('Refreshing...')
    

    toast.success('Feed Updated!', {
      id: refreshToast
    })
  }

  let navigate = useNavigate();

  const [bar, setBar] = useState(false);


  function loadBar() {
    setBar(!bar)
  }

  return (
    <div className="p-6 ">
      <div
        className="flex flex-col lg:flex-row m-5 justify-between
        items-center h-auto "
      >
        <div className="flex items-center">
          <h1 className="font-bold text-4xl uppercase fixed ">PLAYER ONE</h1>
        </div>
        <div className=" rounded-md p-1 pt-4  flex flex-grow justify-evenly max-w-2xl">
          <button className="border-b-2 border-[#fc61ff]" onClick={() => navigate('/games')}>
            <NavItem  Icon={HomeIcon} title="Home" />
          </button>
          <button  className="border-b-2 border-[#7b61ff]" onClick={refresh}>
            <NavItem Icon={RefreshIcon} title={'Refresh'}/>
          </button>
          <button className="border-b-2 border-[#61ffda]" onClick={loadBar}>
            {
              !bar && <div> <NavItem Icon={SearchIcon} title="Search" /> </div>
            }
            {
              bar && <NavItem Icon={XIcon} title="Close" />
            }
          </button>
          {
            bar && <SearchBar />
          }
          <div className="border-b-2 border-[#fc61ff]">
           <NavItem Icon={UserIcon} title='Login'/>
          </div>
          <button className="border-b-2 border-[#7b61ff]" onClick={() => navigate('/wishlist')}>
              <NavItem Icon={StarIcon} title="Wishlist" />
          </button>
        </div>
      </div>
    </div>
  );
}
