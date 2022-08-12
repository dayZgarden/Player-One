import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import tothemoon from '../assets/tothemoon.svg'
import featured from '../assets/Rectangle 19.png'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const navigate = useNavigate()

  return (
    <div className='h-full w-full'>
        <div className='bg-gradient-to-t from-slate-900 to-sky-900'>
            <nav className='h-[170px] flex justify-between items-center max-w-[1280px] mx-auto w-full'>
                <div className="flex items-center">
                    <img className="object-contain p-2 mr-2" src='https://day-ztracker.vercel.app/assets/icons8-flat-60.png'/>
                    <h1 className="font-bold text-4xl tracking-widest">dayZgamer</h1>
                 </div>
                 <div className=''>
                    <ul className='flex justify-evenly'>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            <button className=''>
                                Discover
                            </button>
                        </li>
                    </ul>
                 </div>
            </nav>
            <section className='h-[calc(100vh-170px)] max-w-[1280px] mx-auto w-full flex items-center space-x-8'> 
                <div className='w-1/2 space-y-4 h-full flex flex-col justify-center translate-y-[-20%]'>
                    <div className='text-[64px] font-extrabold  text-white'>
                        Discover amazing games and people
                    </div>
                    <div className='text-[16px] text-white w-[65%]'>
                        The world's largest database of video games to discover new games and connect with other players.
                    </div>
                    <button onClick={() => navigate('/')} className='p-5 active:shadow-md hover:scale-105 active:scale-100 transition-all duration-500 
                     text-[20px] font-bold tracking-wider rounded-[30%] border-white border-4 shadow-cool3 w-[45%]'>
                        Start Discovering
                    </button>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center translate-y-[-20%]'>
                    <figure className='border-none'>
                        <img src={tothemoon} alt="" className=''/>
                    </figure>
                </div>
                <div className='absolute bottom-3 left-1/2 max-w-[1280px] w-full translate-x-[-50%]'>
                    <img src={featured} className='' alt="" />
                </div>
            </section>
        </div>
        <section className='h-[50vh] '>
            Collect Games
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
