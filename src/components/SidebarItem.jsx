import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({title}) => {
    return (
        <Link to = {{
            pathname: '/genre'
        }} className=' hover:bg-indigo-900 p-4 cursor-pointer group flex w-full opacity-90 rounded-lg '>
            <p className='p-4 pl-0  text-white text-[32px] group-hover:scale-110 transistion duration-100 
            tracking-widest'>{title}</p>
        </Link>
    );
}

export default SidebarItem;
