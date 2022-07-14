import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({title}) => {
    return (
        <Link to = {{
            pathname: '/genre'
        }} className=' hover:bg-indigo-900 cursor-pointer group flex flex-1 w-full opacity-90 rounded-lg overflow-hidden'>
            <p className='p-4 pl-0 before:m-5 text-[32px] group-hover:scale-110 transistion duration-100 
            tracking-widest'>{title}</p>
        </Link>
    );
}

export default SidebarItem;
