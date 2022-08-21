import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({title, url}) => {
    return (
        <Link to = {{
            pathname: `${url}`
        }} className=' cursor-pointer group flex w-full rounded-lg px-6 p-2'>
            
            <p className='pl-0 text-white text-[32px] group-hover:scale-110 transistion duration-100  font-[600]'>{title}</p>
        </Link>
    );
}

export default SidebarItem;
