import React from 'react';
const Option = ({option,correctAns}) => {
    return (
           <div className='border-2 rounded-lg p-3 m-3'>
            <form action="">
                    <p><input type="checkbox" name="" id="" /> {option}</p>
            </form>
           </div>     
       
    );
};

export default Option;