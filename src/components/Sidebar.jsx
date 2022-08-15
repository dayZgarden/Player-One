import React from 'react'
import SearchBar from './SearchBar'
import SidebarItem from './SidebarItem'

export default function Sidebar() {

  return (
    <div className='hidden mt-2 sticky  top-0 bottom-0 lg:left-0 p-6
    text-center flex-col text-white lg:flex  mb-4 items-center'>
        <SidebarItem title='Trending'/>
        <SidebarItem title='Top Rated'/>
        <SidebarItem title='Action'/>
        <SidebarItem title='Adventure'/>
        <SidebarItem title='Shooter'/>
        <SidebarItem title='Casual'/>
        <SidebarItem title='Indie'/>
        <SidebarItem title='Racing'/>
        <SidebarItem title='MMO'/>
        <SidebarItem title='Strategy'/>
        <SidebarItem title='Sports'/>
        <SidebarItem title='Puzzle'/>
    </div>
  )
}