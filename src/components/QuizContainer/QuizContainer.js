import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizContainer = () => {
   const quizeIteams= useLoaderData();
   const quizs= quizeIteams.data.questions;

    return (
        <div className='bg-gray-600 py-20'>
       <h1 className='text-4xl text-white'>Quiz of : {quizeIteams.data.name}</h1>
          {
            quizs.map(quiz=> <Question
            key={quiz.id}
            question={quiz}
            ></Question>)
          }
        </div>
    );
};

export default QuizContainer;