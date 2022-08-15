import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import tothemoon from '../assets/tothemoon.svg'
import featured from '../assets/Rectangle 19.png'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const navigate = useNavigate()

  return (
    <div className='h-full w-full relative scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <div className='bg-spacegame bg-cover bg-center bg-no-repeat  '>
            <div className='h-full w-full backdrop-blur-lg backdrop-opacity-70 '>
            <nav className='h-[170px] sticky flex justify-between items-center w-[95%] mx-auto'>
                <div className="flex items-center">
                    <h1 className="font-bold text-4xl tracking-widest uppercase">Player one</h1>
                 </div>
                 <div className=''>
                    <ul className='flex justify-evenly'>
                        <li className='px-6 text-[20px]'>
                            <a href="/">Home</a>
                        </li>
                        <li className='px-6 text-[20px]'>
                            <a href="#about">About</a>
                        </li>
                        <li className='px-6 text-[20px]'>
                            <a href="#contact">Contact</a>
                        </li>
                        <li className='px-6 text-[20px]'>
                            <a target="_blank" href="https://rawg.io">Database</a>
                        </li>
                        <li className='px-6 text-[20px]'>
                            <button className=''>
                                Discover
                            </button>
                        </li>
                    </ul>
                 </div>
                 <div className='text-[20px]'>
                    <button className='' onClick={() => navigate('/')}> 
                        Log in
                    </button>

                 </div>
            </nav>
            <section className='h-[calc(100vh-170px)] max-w-[1350px] mx-auto w-full flex'> 
                <div className='max-w-[1350px] h-full flex flex-col'>
                    <div className='mt-8'>
                        <h1 className='flex-1 text-[120px] text-center font-black uppercase h-full  text-white leading-[110px] tracking-[1px]'>
                             Discover amazing games & explore with friends
                        </h1>
                    </div>
                    <div className='text-[24px] text-center mt-12 text-white w-[60%] mx-auto'>
                        The world's largest database of video games to discover new games and connect with other players.
                    </div>
                    <button onClick={() => navigate('/')} className='p-5 hover:w-[24%] hover:tracking-widest transition-all duration-500 
                     text-[24px] text-[#0b134a] font-bold tracking-wide mt-12 w-[20%] mx-auto bg-[#b87acc]'>
                        Start Discovering
                    </button>
                </div>
                <div className='absolute bottom-3 left-1/2 max-w-[600px] w-full translate-x-[-50%]'>
                    <img src={featured} className='' alt="" />
                </div>
            </section>
            </div>
        </div>
        <section className='h-[100vh] bg-gray-100 '>
            <h1 className='uppercase leading-[110px] text-[#000] font-black tracking-[1px] text-[36px]'>
                Endless games to discover
            </h1>
        </section>
        <section className='h-[50vh]'>
            Play with friends
        </section>
        <section className='h-[50vh]'>
            Games of the day
        </section>
        <section className='h-[50vh]'>
            Are you ready? Get started
        </section>
        <Footer />
    </div>
  )
}
