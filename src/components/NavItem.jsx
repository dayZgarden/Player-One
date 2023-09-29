import React from 'react'

export default function NavItem({Icon, title}) {
  return (
    <div className=' w-12 sm:w-20 flex flex-col items-center
     hover:text-white group '>
        <Icon className='group-hover:animate-bounce transistion duration-200 h-8 mb-1 transition'/>
        <p className=' opacity-0 group-hover:opacity-100 '>{title}</p>
    </div>
  )
}
