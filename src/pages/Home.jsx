import Nav from '../components/nav'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer'
import { ArrowLeftIcon, ArrowRightIcon,  } from '@heroicons/react/outline'
import Loading from '../components/loading'
import getGames from '../utils/getGames'
import getFreeGames from '../utils/getFreeGames'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import Chimp from '../components/Chimp'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import {motion } from 'framer-motion'

const Home = ({wishlist, addToWishlist}) => {
    const [game, setGame] = useState([])
    const [page, setPage] = useState(1)
    const [minus, setMinus] = useState(0)
    const [plus, setPlus] = useState(0)
    const [generating, setGenerating] = useState(true)
    const [shorts, setShorts] = useState([])

    useEffect(() => {
      getGames({page}).then(
        data => {
          console.log(data)
          setGame(data)
          setGenerating(false)
        }
      )
    },[])

    useEffect(() => {
      getGames({page}).then(
        data => {
          console.log(data)
          setGame(data)
          setGenerating(false)
        }
      )
    },[page])

  
    return (
      <motion.div className='overflow-x-scroll scrollbar-hide'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <Nav />
  
        <div className="w-full flex justify-between ">
          <div className='w-[17%] hidden lg:flex'>
            <Sidebar />
          </div> 
          
          {generating? 
          <Loading />
              :  
            <div className='lg:w-[80%] w-[95%] mx-auto lg:m-0'>
              <Feed game={game} wishlist={wishlist} addToWishlist={addToWishlist}/>
            </div>
          }

        </div>
        <div className='flex flex-col items-center p-2 space-x-4'>
          <div className='flex'>
          {page > 1 && <button onClick={() => setPage(page - 1)} className="bg-[#292945] hover:bg-white hover:text-[#292945] rounded-full p-3 ml-8 text-white  animate-zipper  cursor-pointer hover:bg-opacity-100
           transition text-[30px]">{<FaArrowLeft/>}
          </button>}
          <button onClick={() => setPage(page + 1)} className="bg-[#292945] delay-100 hover:bg-white hover:text-[#292945] rounded-full p-3 ml-8 text-white  animate-zipper  cursor-pointer hover:bg-opacity-100
           transition text-[30px]">{<FaArrowRight/>}
          </button>
          </div>
            <h1 className='mt-2 font-bold text-[16px]'>Page Number: {page} </h1>
        </div>
          <Footer />

      </motion.div>
    );
}

export default Home;