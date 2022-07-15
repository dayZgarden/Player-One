import Nav from '../components/nav'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer'
import { ArrowLeftIcon, ArrowRightIcon,  } from '@heroicons/react/outline'
import Loading from '../components/loading'
import scrollbarHide from 'tailwind-scrollbar-hide'

const Home = (props) => {
    const [game, setGame] = useState([])
    const [page, setPage] = useState(0)
    const [minus, setMinus] = useState(0)
    const [plus, setPlus] = useState(0)
    const [generating, setGenerating] = useState(true)

    function nextPage() {
      let y = plus + 1;
      setPlus(y)
    }

    function previousPage() {
      let y = minus - 1;
      setMinus(y)
    }

    useEffect(() => {
      let x = page - 1
      setPage(x)
    }, [minus])

    useEffect(() => {
      let x = page + 1
      setPage(x)
    }, [plus])

    useEffect(() => {
      getGames()
    },[page])

    async function getGames() {
      const {data} = await axios.get(`https://api.rawg.io/api/games?key=3bc6f0eacb5a456197a9a9862988f1c0&page=${page}`)
  
      console.log(data.results)
      setGame(data.results)
      setGenerating(false)
    }
  
    useEffect(() => {
      getGames()
    }, [])

    console.log(game)
  
    return (
      <div className='overflow-x-scroll scrollbar-hide'>
        <Nav />
  
        <div className="flex">
          <Sidebar />
          
          {generating? 
          <Loading />
              :  
            <Feed game={game} />
          }

        </div>
        <div className='flex justify-center p-2 '>
          {page > 1 && <button onClick={previousPage} className='active:scale-90 hover:scale-105 hover:animate-pulse transition-all duration-200'>
            <ArrowLeftIcon className='p-1 w-16 h-16 mr-4 cursor-pointer rounded-[9999px] border-2'/>
          </button>}
          <button onClick={nextPage} className='active:scale-90 hover:scale-105 hover:animate-pulse transition-all duration-200'>
            <ArrowRightIcon className='p-1 w-16 h-16 ml-4 cursor-pointer rounded-[9999px] border-2'/>
          </button>
        </div>
        <h1 className='mt-2 tracking-widest font-bold text-[16px] flex justify-center'>Page Number: {page} </h1>

          <Footer />
      </div>
    );
}

export default Home;