import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {
    const{question}= props.question;
  const options=  props.question.options;



  
  const notify = () => toast("Wow so easy!");



    return (
        <div className='border-4 w-2/4 mx-auto mb-5 my-10'>
           
            <div className='flex justify-between'>

            <h1 className='text-2xl py-4 mr-5'> 
             {question}
             </h1>

            <h2 className='mt-5 mr-5'>
            <button onClick={notify}>View!</button>
        <ToastContainer /></h2>
            </div>

            <div className='grid grid-cols-2 py-4'>
                {
                    options.map(option=> <Option option={option}></Option>)
                }
            </div>





        </div>
    );
};

export default Question;