import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({title, url, Icon}) => {
    return (
        <Link to = {{
            pathname: `${url}`
        }} className=' cursor-pointer group flex items-center w-full rounded-lg px-6 p-2 space-x-3'>
            <Icon className=' h-10 w-10 '/>
            <p className='pl-0 text-white text-[28px] group-hover:scale-105 transistion-all duration-100  font-[600]'>{title}</p>
        </Link>
    );
}

export default SidebarItem;
