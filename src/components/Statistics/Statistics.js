import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

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

                    console.log(parts);
                         return parts;
                });
                setQuizData(singleData);
                
            })

            // console.log(phones);
    }, [])
    return (
       <div className='bg-gray-500 py-20'>
         <div className='w-2/4 mx-auto py-20 bg-orange-400'>
            <BarChart width={500} height={400} data={quizData}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </BarChart>
        </div>
       </div>
    );
};

export default Statistics;