import React from 'react';
import { Link } from 'react-router-dom';


const Quiz = ({quiz}) => {

const {logo, name,total,id}= quiz;

    return (
        <div className='h-[355px] w-[320px] border-4 rounded-lg static bg-gray-400'>
            <img className='h-[300px] p-8  w-[300px]' src={logo} alt="" />
            <div className='flex justify-between bg-blue-400'>
                <div className='flex justify-between'>
                <h3 className=' mx-5 text-2xl font-bold'>{name}</h3>
                <p className=' text-2xl font-bold'>{total}</p>
                
                </div>
                <div>
                <Link to={`/quiz/${id}`}> <button className=' text-1xl font-semibold border-2 p-2 rounded-md bg-red-400 hover:bg-green-500' >Start Practice</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;