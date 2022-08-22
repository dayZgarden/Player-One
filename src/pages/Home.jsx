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
      <div className='overflow-x-scroll scrollbar-hide'>
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
        <div className='flex justify-center p-2 space-x-4'>
          {page > 1 && <button onClick={() => setPage(page - 1)} className='bg-[#292945] hover:bg-white hover:text-[#292945] rounded-lg px-6 py-2 ml-8 text-white  animate-zipper  cursor-pointer hover:bg-opacity-100
           transition text-[30px]'>
            <AiOutlineVerticalRight className='font-black'/>
          </button>}
          <button onClick={() => setPage(page + 1)} className='bg-[#292945] hover:bg-white hover:text-[#292945] rounded-lg px-6 py-2 ml-8 text-white  animate-zipper  cursor-pointer hover:bg-opacity-100
           transition text-[30px]'>
            <AiOutlineVerticalLeft className='font-extrabold'/>
          </button>
        </div>
        <h1 className='mt-2 tracking-widest font-bold text-[16px] flex justify-center'>Page Number: {page} </h1>
          <Footer />

      </div>
    );
}

export default Home;