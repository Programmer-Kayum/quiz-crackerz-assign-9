import React from 'react'
import Header from '../Header/Header'


const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-[700px] justify-center items-center bg-gray-500'>
        <h1 className='text-4xl'>Ops! An Error Ocurred! <br /> Please Back!! </h1>
      </div>
    </>
  )
}

export default ErrorPage;