import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {
          const{question}= props.question;
          const options=  props.question.options;
         const ans=props.question.id;
        const notify = () =>{
         toast(props.question.correctAnswer);
  } 
    return (
        <div className='border-4 lg:w-2/4  lg:mx-auto mb-5 my-10'>
            <div className='flex justify-between'>
            <h1 className='text-2xl py-4 mr-5'>{question}</h1>
            <h2 className='mt-5 mr-5'>
            <button onClick={()=>notify(ans)}>View!</button>
        <ToastContainer /></h2>
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