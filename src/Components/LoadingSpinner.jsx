import React from 'react'
import logo from "../assets/logo.png";


const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-285px)]'>
         <div className='flex
            items-center'>
             <img className='w-10 animate-spin' src={logo} alt="" />
            <p className="font-bold text-4xl">
                  Loading....
            </p>
           </div>

    </div>
  )
}

export default LoadingSpinner