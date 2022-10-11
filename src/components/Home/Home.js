import React from 'react'
import { useLoaderData } from 'react-router-dom'
import img1 from '../image/Quiz.png'
import Quiz from '../Quiz/Quiz';



const Home = () => {
  const quizTopics= useLoaderData().data;
  return (

<div>
              <div className='px-4 py-8 mx-auto bg-gray-300 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
              <div className='flex flex-col items-center justify-between lg:flex-row'>

              <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
              <div className='max-w-xl lg:mb-6  mt-5 '>
                
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                    Test <br className='hidden md:block' /><span className='text-orange-400'>Your</span> <span className='inline-block text-blue-400'>Talent</span>
                    </h2>
                    <h3 className='md:text-lg lg:text-3xl font-bold'>
                    The happiest feeling in the world is when you set a goal and accomplish it!.
                    </h3>
               </div>
               </div>
                <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:mt-5 sm:mt-0 lg:ml-auto h-56'>
                    <img className='h-60' src={img1} alt="" />
                </div>
                </div>
              </div>
               </div>


              <div className=' lg:grid-cols-2  lg:w-[900px] sm:grid grid-cols-1  my-5 lg:mx-80 gap-4 lg:px-20  sm:max-w-xl sm:ml-5 md:max-w-full  md:px-24 '>
              {
              quizTopics.map(quiz=> <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
              }
              </div>

</div>

  )
}

export default Home