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
    <div className="p-6">
      <div
        className="flex flex-col lg:flex-row m-5 justify-between
        items-center h-auto "
      >
        <div className="flex items-center">
            <img className="object-contain p-2 mr-2" src='https://day-ztracker.vercel.app/assets/icons8-flat-60.png'/>
          <h1 className="font-bold text-4xl tracking-widest">dayZgamer</h1>
        </div>
        <div className="bg-slate-900  border-b-2 border-b-blue-900 rounded-md p-1 pt-4 border-l-2 border-l-cyan-900 flex flex-grow justify-evenly max-w-2xl">
          <button onClick={() => navigate('/')}>
            <NavItem  Icon={HomeIcon} title="Home" />
          </button>
          <button  onClick={refresh}>
            <NavItem Icon={RefreshIcon} title={'Refresh'}/>
          </button>
          <button onClick={loadBar} className="">
            {
              !bar && <NavItem Icon={SearchIcon} title="Search" />
            }
            {
              bar && <NavItem Icon={XIcon} title="Close" />
            }
          </button>
          {
            bar && <SearchBar />
          }
           <NavItem Icon={UserIcon} title='Login'/>
          <button onClick={() => navigate('/wishlist')}>
              <NavItem Icon={StarIcon} title="Wishlist" />
          </button>
        </div>
      </div>
    </div>
  );
}
