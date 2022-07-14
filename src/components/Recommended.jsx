import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Recommended = ({result}) => {
    let navigate = useNavigate();

    function handleClick() {
        navigate(`/GameInfo/${result.id}`)
    }

    return (
        <Link to={{
            pathname: `/GameInfo/${result.id}` 
          }} className='p-5 h-full w-1/2 md:w-1/4'>
                <img src={result.background_image}
                alt="" 
                className="rounded-lg shadow-2xl h-full object-cover
                 hover:scale-105 transition-all duration-350 border-b-2
                  border-violet-500"/>
        </Link >
    );
}

export default Recommended;