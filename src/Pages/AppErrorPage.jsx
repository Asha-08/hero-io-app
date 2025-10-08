import React from 'react'
import appError from "../assets/App-Error.png";
import { NavLink } from 'react-router';

const AppErrorPage = ({onGoBack}) => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center text-center  mx-auto bg-base-200">

          <div className='mt-12'>
            <img src={appError} alt="" />
          </div>
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-700 ">OPPS!! APP NOT FOUND</h1>
      <p className="py-4 text-gray-700">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <button onClick={onGoBack} className="btn my-6 text-white" style={{
        background:
          "linear-gradient(90deg, #632EE3 0% , #9F62F2 100%)",
      }}>Go Back !</button>
      </div>
          
        </div>
    </div>
  )
}

export default AppErrorPage
