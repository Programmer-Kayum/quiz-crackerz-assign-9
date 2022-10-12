import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Option = ({option,question}) => {
    const notify = (props) =>{
        const ans=question.question.correctAnswer;
            if(props===ans){
             toast('answer correct');
                }
            else{
                 toast('Incorrect ');
                }
      } 
    return (
           
            <div onClick={()=>notify(option)} className='border-1 rounded-md hover:bg-blue-400 p-3 m-3  bg-white text-black'>
                    <p>{option} </p>
                    <ToastContainer />
           </div>
          
    );
};

export default Option;