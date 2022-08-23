import React from 'react'
import SearchBar from './SearchBar'
import SidebarItem from './SidebarItem'
import { FaFire, FaCalendar, FaTrophy, FaChartBar, FaAnchor, FaGamepad, FaLandmark, FaCrown, FaDna, FaDove, FaTags, FaFistRaised, FaFlagCheckered, FaWalking, FaChessRook,
FaQuidditch, FaShieldAlt, FaSpider, FaCarAlt, FaStarAndCrescent} from 'react-icons/fa'

export default function Sidebar() {

  const siderbarItems = [
    {
      title: 'Trending',
      url: '/genre',
      Icon: {FaFire},
    },
    {
      title: 'New Releases',
      url: '/genre',
      Icon: {FaCalendar},
    },
    {
      title: 'Top Rated',
      url: '/genre',
      Icon: {FaTrophy},
    },
    {
      title: 'Last Month',
      url: '/genre',
      Icon: {FaChartBar},
    },
    {
      title: 'All Time',
      url: '/genre',
      Icon: {FaAnchor},
    },
    {
      title: 'Platforms',
      url: '/genre',
      Icon: {FaGamepad},
    },
    {
      title: 'Stores',
      url: '/genre',
      Icon: {FaLandmark},
    },
    {
      title: 'Genres',
      url: '/genre',
      Icon: {FaCrown},
    },
    {
      title: 'Developers',
      url: '/genre',
      Icon: {FaDna},
    },
    {
      title: 'Publishers',
      url: '/genre',
      Icon: {FaDove},
    },
    {
      title: 'Tags',
      url: '/genre',
      Icon: {FaTags},
    },
    {
      title: 'Action',
      url: '/genre',
      Icon: {FaFistRaised},
    },
    {
      title: 'Adventure',
      url: '/genre',
      Icon: {FaFlagCheckered},
    },
    {
      title: 'Shooter',
      url: '/genre',
      Icon: {FaShieldAlt},
    },
    {
      title: 'Casual',
      url: '/genre',
      Icon: {FaWalking},
    },
    {
      title: 'Indie',
      url: '/genre',
      Icon: {FaSpider},
    },
    {
      title: 'Racing',
      url: '/genre',
      Icon: {FaCarAlt},
    },
    {
      title: 'Massively Multiplayer',
      url: '/genre',
      Icon: {FaStarAndCrescent},
    },
    {
      title: 'Strategy',
      url: '/genre',
      Icon: {FaChessRook},
    },
    {
      title: 'Sports',
      url: '/genre',
      Icon: {FaQuidditch},
    },
    
  ]

  return (
    <div className='hidden m-5 top-0 bottom-0 lg:left-0 
    text-center  flex-col flex-1 fixed text-white lg:flex max-h-[80vh] h-full translate-y-[20%] overflow-y-scroll scrollbar-hide'>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Trending" url={'/genre'} Icon={FaFire} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="New Releases" url={'/genre'} Icon={FaCalendar} />
      </div>
      <div className='border-l-2  mb-2 border-[#61ffda]'>
        <SidebarItem title="Top Rated" url={'/genre'} Icon={FaTrophy} />
      </div>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Last Month" url={'/genre'} Icon={FaChartBar} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="All Time" url={'/genre'} Icon={FaAnchor} />
      </div>
      <div className='border-l-2  mb-2 border-[#61ffda]'>
        <SidebarItem title="Platforms" url={'/genre'} Icon={FaGamepad} />
      </div>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Stores" url={'/genre'} Icon={FaLandmark} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="Genres" url={'/genre'} Icon={FaCrown} />
      </div>
      <div className='border-l-2  mb-2 border-[#61ffda]'>
        <SidebarItem title="Developers" url={'/genre'} Icon={FaDna} />
      </div>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Publishers" url={'/genre'} Icon={FaDove} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="Tags" url={'/genre'} Icon={FaTags} />
      </div>
      <div className='border-l-2  mb-2 border-[#61ffda]'>
        <SidebarItem title="Action" url={'/genre'} Icon={FaFistRaised} />
      </div>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Adventure" url={'/genre'} Icon={FaFlagCheckered} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="Shooter" url={'/genre'} Icon={FaShieldAlt} />
      </div>
      <div className='border-l-2  mb-2 border-[#61ffda]'>
        <SidebarItem title="Casual" url={'/genre'} Icon={FaWalking} />
      </div>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Indie" url={'/genre'} Icon={FaSpider} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="Racing" url={'/genre'} Icon={FaCarAlt} />
      </div>
      <div className='border-l-2  mb-2 border-[#61ffda]'>
        <SidebarItem title="MMO" url={'/genre'} Icon={FaStarAndCrescent} />
      </div>
      <div className='border-l-2  mb-2 border-[#fc61ff]'>
        <SidebarItem title="Strategy" url={'/genre'} Icon={FaChessRook} />
      </div>
      <div className='border-l-2  mb-2 border-[#7b61ff]'>
        <SidebarItem title="Sports" url={'/genre'} Icon={FaQuidditch} />
      </div>
    </div>
  )
}