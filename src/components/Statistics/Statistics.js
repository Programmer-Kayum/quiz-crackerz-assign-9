import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [quizData, setQuizData] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const loadedData = data.data.data;
                const singleData = loadedData.map(data => {
                const parts = {
                        total:data.total,
                        name:data.name
                    }
                return parts;
                });
                setQuizData(singleData); 
            })
    }, []);
    return (
        <div className='bg-gray-400 py-20'>
          <div className=' lg:w-2/4 lg:mx-auto bg-orange-400'>
            <ResponsiveContainer width="90%" height={400}>
            <BarChart width={200} height={400} data={quizData}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
            </BarChart>
            </ResponsiveContainer>
         </div>
       </div>
    );
};

export default Statistics;