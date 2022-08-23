import React, { useState, useEffect, useRef  } from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import getGames from '../utils/getGames'
// import { useSpring, animated } from 'react-spring'
// import { useGesture } from 'react-with-gesture'
// import { useDrag } from 'react-use-gesture'
import consoles from '../assets/consoles.svg'
import { GiAnarchy, GiAngularSpider, GiRocket } from 'react-icons/gi'
import { FaXbox, FaPlaystation, FaWindows, FaStar, FaArrowDown } from 'react-icons/fa'
import vrdude from '../assets/vrdude.svg'
import vrgirl from '../assets/vrgirl.svg'
import wave1 from '../assets/wave1.svg'
import { ArrowDownIcon, ChatAlt2Icon } from '@heroicons/react/solid'
import lottie from 'lottie-web'
import axios from 'axios'
import videogames from '../assets/lottie-videogame.json'
import friendsx from '../assets/friends.json'
import futurex from '../assets/future.json'
import spacedude from '../assets/spacedude.json'
import { Gi3DMeeple } from 'react-icons/gi'

export default function Landing() {
    const navigate = useNavigate()
    const [infoModal, setInfoModal] = useState(false)
    const [game, setGame] = useState([])
    const [loading, setLoading] = useState(true)
    const [X, setX] = useState(0)

    useEffect(() => {
        let page = 15;
        setX(X + 1)
        getGames({page}).then(
            data => {
              console.log(data)
              setGame(data)
              setLoading(false)
            }
          )
          console.log(game)
        //   if(X === 0) {
        //       lottie.loadAnimation({
        //         container: container?.current, // the dom element that will contain the animation
        //         renderer: 'svg',
        //         loop: true,
        //         autoplay: true,
        //         path: 'https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json',
        //         animationData: videogames
        //       }) 
        //       lottie.loadAnimation({
        //         container: spaceman?.current, // the dom element that will contain the animation
        //         renderer: 'svg',
        //         loop: true,
        //         autoplay: true,
        //         path: 'https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json',
        //         animationData: spacedude
        //       }) 
        //       lottie.loadAnimation({
        //         container: future?.current, // the dom element that will contain the animation
        //         renderer: 'svg',
        //         loop: true,
        //         autoplay: true,
        //         path: 'https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json',
        //         animationData: futurex
        //       }) 
        //       lottie.loadAnimation({
        //         container: friends?.current, // the dom element that will contain the animation
        //         renderer: 'svg',
        //         loop: true,
        //         autoplay: true,
        //         path: 'https://assets7.lottiefiles.com/packages/lf20_0qQqQq.json',
        //         animationData: friendsx
        //       }) 
        // } 
    }, [])

    const container = useRef(null)
    const spaceman = useRef(null)
    const future = useRef(null)
    const friends = useRef(null)
    

  return (
    <div className='h-full w-full relative scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-x-hidden'>
        <button className='fixed cursor-pointer hover:scale-110 duration-300 transition-all bottom-6 right-6 z-[100]'><ChatAlt2Icon className='w-20 h-20 p-2 text-white bg-gradient-to-r from-[#a881ff] to-[#5969Fe] rounded-full' /></button>
        <div className='bg-space2 bg-cover bg-center bg-no-repeat'>
            <div className='h-full w-full backdrop-blur-lg backdrop-opacity-70 bg-[#1c1c28] bg-opacity-80'>
            <nav className='h-[170px] sticky flex justify-between items-center w-[95%] mx-auto'>
                <div className="flex items-center">
                    <h1 className="font-bold text-4xl  uppercase">Player one</h1>
                 </div>
                 <div className=''>
                    <ul className='flex justify-evenly'>
                        <li className='px-6 text-[20px] group relative'>
                            <a className='' href="/">Home</a>
                            <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                        </li>
                        <li className='px-6 text-[20px] group relative'>
                            <a href="#about">About</a>
                            <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                        </li>
                        <li className='px-6 text-[20px] group relative'>
                            <a href="#contact">Contact</a>
                            <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                        </li>
                        <li className='px-6 text-[20px] group relative'>
                            <a target="_blank" href="https://rawg.io">Database</a>
                            <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                        </li>
                        <li className='px-6 text-[20px] group relative'>
                            <a target="_blank" href="https://rawg.io">Discover</a>
                            <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-5 transition-all duration-[300ms] -bottom-1 w-[60%] border-b-2 border-white height-[10px] z-50"></span>
                        </li>
                    </ul>
                 </div>
                 <div className='text-[20px]'>
                    <button className='' onClick={() => navigate('/games')}> 
                        Log in
                    </button>

                 </div>
            </nav>
            <section className='h-[calc(100vh-170px)] max-w-[1350px] mx-auto w-full flex '> 
                <div className='max-w-[1350px] h-full flex flex-col'>
                    <div className='mt-8'>
                        <h1 className=' flex-1 text-[110px] text-center font-black uppercase h-full  text-white leading-[110px] tracking-[1px]'>
                             Discover amazing games & explore with friends
                        </h1>
                    </div>
                    <div className='text-[24px] text-center mt-12 text-white w-[60%] mx-auto'>
                        The world's largest database of video games to discover new games and connect with other players.
                    </div>
                    <button onClick={() => navigate('/games')} className='p-6 hover:w-[30%] hover:tracking-widest transition-all duration-500 
                     text-[24px] text-white font-bold tracking-wide mt-12 w-[25%] mx-auto bg-gradient-to-r from-[#a881ff] to-[#5969Fe] rounded-md shadow-md active:w-[25%] active:tracking-wide
                      active:scale-90'>
                        Start Discovering
                    </button>
                </div>
                <div className='absolute bottom-3 justify-center max-w-[1350px] w-full items-center flex'>
                    <FaArrowDown className='w-16 h-16 animate-bounce transition-all duration-300' />
                </div>
            </section>
            </div>
        </div>
        
        <span className='flex justify-center w-full p-20 bg-gradient-to-t from-[#1c1c28] to-gray-900'>
            <img src={consoles} alt="" />
        </span>


        <section className='p-20 h-full pt-40'>

            <div className='max-w-[1350px] w-full mx-auto h-full text-center'>
               
                <div className='flex flex-col'>
                    <h1 className='text-[#FFBF66] font-bold uppercase text-[24px]'>—— PLAYER ONE ——</h1>
                    <h2 className='text-white font-bold  text-[50px] text-center w-[75%] mx-auto leading-snug'>Crossing the boundary between the void of games & players</h2>
                </div>
                <div className='flex flex-wrap w-[1350px] mx-auto mt-20 justify-evenly relative'>
                    <span className='max-w-[300px] max-h-[300px] h-full w-full aspect-square rounded-full animation-delay-2s bg-[#fc61ff] blur-[50px] opacity-70 absolute
                     animate-blob left-40 bottom-20 z-[-2]'></span>
                    <span className='max-w-[340px] max-h-[340px] h-full w-full aspect-square rounded-full animation-delay-4s bg-[#7b61ff] blur-[50px] opacity-70 absolute 
                       animate-blob z-[-2]'></span>
                    <span className='max-w-[300px] max-h-[300px] h-full w-full aspect-square rounded-full bg-[#61ffda] blur-[50px] opacity-70 absolute
                       right-40 animate-blob z-[-2]'></span>
                    <div className='w-[25%] bg-[#20202e] relative flex items-center justify-center h-[380px] flex-col border-b-2 py-4 border-[#fc61ff]'>
                        <h1 className='bg-[#57576a] font-bold w-[70%] absolute text-[20px] -top-4 -left-8 border-4 border-[#282838] rotate-[-8deg]  p-2'>Endless Games</h1>
                        <h2 className="font-bold  text-[20px] text-center mb-36 w-[90%] mx-auto">Our database has over 800,000 games to discover on any platform from any time. </h2>
                        <figure ref={spaceman} className='w-[50%] h-[50%] z-[100] mt-4 absolute bottom-5'></figure>
                    </div>
                    <div className='w-[25%] bg-[#20202e] items-center justify-center h-[380px] flex flex-col border-b-2 border-[#7b61ff] relative'>
                        <h1 className='bg-[#57576a] font-bold w-[70%] absolute text-[20px] -top-4 -left-8 border-4 border-[#282838] rotate-[-8deg]  p-2'>Match With Players</h1>
                        <h2 className="font-bold text-[20px] text-center mb-36 w-[90%] mx-auto">Find other players who are interested in the same games as you. Connect and start playing.</h2>
                        <figure ref={future} className='w-[80%] h-[80%] z-[100] absolute -bottom-8 '></figure>
                    </div>
                    <div className='w-[25%]  bg-[#20202e] items-center justify-center h-[380px] flex flex-col border-b-2 border-[#61ffda] relative'>
                        <h1 className='bg-[#57576a] font-bold w-[70%] absolute text-[20px] -top-4 -left-8 border-4 border-[#282838] rotate-[-8deg]  p-2'>Future Releases</h1>
                        <h2 className="font-bold text-[20px] text-center mb-32 w-[90%] mx-auto">We bring the latest games to you and provide information exclusively on our platform.</h2>
                        <figure ref={friends} className='w-[100%] h-[100%] z-[100] absolute -bottom-20'></figure>
                    </div>
                </div>
            </div>
        </section>

        <section className='h-full relative bg-[#282838] my-32'>
            {/* <span className='max-w-[420px] max-h-[420px] h-full w-full aspect-square rounded-full bg-[#352e53] blur-[50px] opacity-90 absolute top-1/2 translate-y-[-50%] -left-36'></span>
            <span className='max-w-[420px] max-h-[420px] h-full w-full aspect-square rounded-full bg-[#352e53] blur-[50px] opacity-90 absolute top-1/2 translate-y-[-70%] -right-36'></span> */}
            <div className='h-full w-full  p-20'>
            {!infoModal ? <div className='flex flex-col  w-full'>
                <div className='flex flex-col  max-w-[1350px]  mx-auto  text-center'>
                    <h1 className='text-[24px] font-bold uppercase text-[#FFBF66]'>——  Discover Games  ——</h1>
                    <h1 className=' text-white font-bold  text-[50px] w-[75%] mx-auto leading-snug'>
                        Endless games to be found from any platform
                    </h1>
                    <div className='w-full max-w-[1000px] mx-auto flex flex-wrap justify-evenly mt-20 '>
                        <button className='w-[30%]  relative hover:scale-[120%] group transition-all duration-500 hover:aspect-square bg-[#20202e] h-[380px]'>
                            <div className='h-full w-full border-[#282838] border-t-[#fc61ff] border-2'>
                                <img className='w-full h-full object-cover object-center p-3' src={game[4]?.background_image} alt="" />
                            </div>
                        </button>
                        <button className='w-[30%]  bg-[#20202e] max-h-[100%] h-[380px]'>
                            <div className='h-full w-full border-[#282838] border-t-[#7b61ff] border-2'>
                                <img className='w-full h-full object-cover object-center p-3 ' src={game[5]?.background_image} alt="" />
                            </div>
                        </button>
                        <button className='w-[30%]  bg-[#20202e] max-h-[100%] h-[380px]'>
                            <div className='h-full w-full border-[#282838] border-t-[#61ffda] border-2'>
                                <img className='w-full h-full object-cover object-center p-3 ' src={game[6]?.background_image} alt="" />
                            </div>
                        </button>
                    </div>
                </div>

            </div> 
            : 
            ( 
                <div className='bg-neutral-900 w-full h-full p-0'>
                    <button onClick={() => setInfoModal(!infoModal)}>close modal</button>
                </div>
            )}

            </div>
            <span className='absolute top-[-12rem] z-[-2] w-full'><img src={wave1} className="w-full " alt="" /></span>
            <span className='absolute bottom-[-12rem] rotate-180 z-[-2] w-full'><img src={wave1} className="w-full " alt="" /></span>

        </section>

        <section className='p-20'>
            <div className='max-w-[1350px] w-full mx-auto h-full'>
                <h1 className='text-[24px] uppercase font-bold text-[#FFBF66] text-center'>——  How it works  ——</h1>
                <div className='flex justify-center mt-16'>
                    <figure ref={container} className='w-[48%] max-h-[520px] h-full '>
                    </figure>
                    <div className='flex flex-col w-[48%] relative p-6'>
                        <h1 className='font-bold text-[40px] w-[70%] leading-tighter'>Never finding the right game to play? </h1>
                        <span className='text-[20px] font-bold rotate-[8deg] absolute -top-6 right-40 p-1 w-[25%] bg-[#282838] text-center mt-6'>We can help.</span> 
                        <ul className='flex flex-col mt-6 space-y-6'>
                            <li className='flex space-x-4 items-center  border-[#fc61ff]'>
                                <GiAnarchy className='w-10 h-10 bg-[#fc61ff] rounded-full p-1 px-1  bg-opacity-70'/>
                                <div className='flex flex-col '>
                                    <h2 className='font-bold text-[20px] '>Start by</h2>
                                    <p className='text-[#a1a3bb] w-[65%]'>Find the right game for you & your friends in our supply of video game recommendations</p>
                                </div>
                            </li>
                            <li className='flex space-x-4 items-center'>
                                <Gi3DMeeple className='w-10 h-10 bg-[#7b61ff] rounded-full p-1 px-1'/>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-[20px]'>Title of this</h2>
                                    <p className='text-[#a1a3bb] w-[65%]'>Find the right game for you & your friends in our supply of video game recommendations</p>
                                </div>
                            </li>
                            <li className='flex space-x-4 items-center'>
                                <GiAngularSpider className='w-10 h-10 bg-[#61ffda] bg-opacity-70 rounded-full p-1 px-1'/>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-[20px]'>Title of this</h2>
                                    <p className='text-[#a1a3bb] w-[65%]'>Find the right game for you & your friends in our supply of video game recommendations</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className='p-20 h-full'>
            <div className='max-w-[1350px] w-full mx-auto'>
                <div className='flex flex-col w-full text-black items-center justify-center h-full'>
                    <h1 className='text-[24px] uppercase font-bold text-[#FFBF66] text-center'>—— Testimonials ——</h1>
                    <h2 className='text-white font-bold text-center text-[50px] w-[40%] mx-auto leading-snug mt-4'>Read What Others Have To Say</h2>
                    <div className='flex justify-center space-x-6 mt-20 w-full'>
                        <div className='w-[40%] bg-[#292945] rounded-lg p-4 relative'>
                            <div className='w-full flex'>
                                <div className='w-[50%] flex flex-col'>
                                    <div className='flex'>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                    </div>
                                    <p className='text-[#a1a1ad] mt-1'>My neighbor has one of these. She works as a gardener and she says its really awesome.</p>
                                    <h2 className='font-bold text-white mt-2'>Donald Trump</h2>
                                    <h3 className='text-[#7e86cf] font-bold text-[14px]'>Chief President</h3>
                                </div>
                                <img className='w-[48%] absolute h-[250px] right-0 -top-16' src={vrdude} alt="" />
                            </div>
                        </div>
                        <div className='w-[40%] bg-[#292945] rounded-lg p-4 relative'>
                            <div className='w-full flex justify-between'>
                                <div className='w-[50%] flex flex-col'>
                                    <div className='flex'>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                        <FaStar className='w-6 h-6 text-[#f3d85f] rounded-full '/>
                                    </div>
                                    <p className='text-[#a1a1ad] mt-1'>My neighbor has one of these. She works as a gardener and she says its really awesome.</p>
                                    <h2 className='font-bold text-white mt-2'>Donald Trump</h2>
                                    <h3 className='text-[#7e86cf] font-bold text-[14px]'>Chief President</h3>
                                </div>
                                <img className='w-[48%] absolute h-[250px] right-0 -top-16' src={vrdude} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id='ready' className='p-20 my-10 relative'>
            <div className='bg-[#20202e] animate-zipper border-[#282838] border-4 p-6 rounded-[3rem] h-[320px] max-w-[1350px] mx-auto relative'>
                <div className='w-full flex items-center justify-center flex-col'>
                    <h1 className='text-[24px] uppercase font-bold text-[#FFBF66] text-center'>—— Are you ready ——</h1>  
                    <h2 className='font-extrabold text-white  text-[44px] leading-tight mt-2 w-[55%] text-center'>Gain insight on upcoming games and where to get them</h2>      
                </div>
                <div className='flex justify-center items-center'>
                    <button className='p-3 hover:w-[24%] hover:tracking-widest transition-all duration-500 
                     text-[24px]  font-bold tracking-wide mt-8 w-[20%] mx-auto bg-gradient-to-r from-[#a881ff] to-[#5969Fe] text-white rounded-md  active:w-[18%] active:tracking-wide'>
                        Ready Player One
                    </button>
                </div>        
            </div>
        </section>

        <Footer />
    </div>
  )
}