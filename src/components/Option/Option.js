import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Option = ({option,question}) => {

// console.log(question);

    

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
           <div className='border-2 rounded-lg p-3 m-3'>

                    <li onClick={()=>notify(option)}>
                        
                        {option}
                        
                        </li><ToastContainer />
           </div>     
       
    );
};

export default Option;