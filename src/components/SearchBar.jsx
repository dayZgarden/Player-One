import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [game, setGame] = useState([]);
    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        let slug = search.split(' ').join('-').toLowerCase()
        const {data} = await axios.get(`https://api.rawg.io/api/games?key=3bc6f0eacb5a456197a9a9862988f1c0&search=${slug}`)
        setGame(data?.results)
        let id = (data?.results[0].id)
        navigate(`/GameInfo/${id}`)
    }

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className='py-2 px-5 mb-2 rounded-full md:border flex items-center'>
            <input value={search} onChange={handleChange} placeholder ='Search Games...'type="text" className='hidden md:inline outline-none flex-1 bg-transparent 
            placeholder:text-gray'/>
            <button><SearchIcon className='hidden md:inline h-10 w-10'/></button>
        </form>
    );
}

export default SearchBar;