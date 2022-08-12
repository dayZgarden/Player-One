import React from 'react'
import SearchBar from './SearchBar'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
  return (
    <div className='hidden mt-2 sticky sidebar top-0 bottom-0 lg:left-0 p-2
    text-center flex-col bg-slate-900 h-screen lg:flex border-t-2 border-t-blue-900 
    border-r-cyan-900 rounded-lg border-r-2 mb-4 items-center'>
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