import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {EyeIcon} from '@heroicons/react/24/solid'

const Question = (props) => {
          const{question}= props.question;
          const options=  props.question.options;
         const ans=props.question.id;
        const notify = () =>{
         toast(props.question.correctAnswer);
  } 
    return (
       
         <div className='border-2 lg:w-2/4 p-5 lg:mx-auto mb-5 my-10 bg-gray-400'>
                <div className='flex justify-between'>
                 <h1 className='text-2xl py-4 mr-5'>
                  <span className='font-bold '>Quiz:</span> {question}
                 </h1>


            <h2 className='mt-5 mr-5'>

            <EyeIcon onClick={()=>notify(ans)} className="h-10 w-10 text-orange-500"/> <ToastContainer />
      </h2>

            </div>
            <div className='lg:grid-cols-2 sm:grid grid-cols-1  py-4'>
                {
                    options.map(option=> <Option option={option}
                        question={props}
                    ></Option>)
                }
            </div>
        </div>
   
    );
};

export default Question;