import React from 'react'
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import hero from "../assets/hero.png"

const Banner = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center text-center  mx-auto bg-base-200">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-gray-700 py-8 px-4">We Build <span className='text-purple-700'>Productive</span> Apps</h1>
      <p className="py-6 text-gray-700">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <a href='https://play.google.com/store/apps?hl=en_IN' className="btn mx-5 "><img src={googlePlay} className='w-8 ' alt="" />Google Play</a>
      <a href='https://www.apple.com/app-store/' className="btn "><img src={appStore} className='w-8' alt="" />App Store</a>
    </div>
    <div className='mt-12 '>
      <img src={hero} className='w-2xl' alt="" />
    </div>
  </div>

  <div className='min-h-[200px] py-10'style={{
        background:
          "linear-gradient(125.07deg, #632EE3  , #9F62F2 100%)",
      }}>
        <h6 className='text-white font-bold text-4xl text-center '>Trusted by Millions, Built for You</h6>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='text-center text-white py-4'>
            <h1>Total Downloads</h1>
            <p className='font-bold text-4xl'>29.6M</p>
            <p>21% more than last month</p>
          </div>
          <div className='text-center text-white py-4'>
            <h1>Total Reviews</h1>
            <p className='font-bold text-4xl'>906K</p>
            <p>46% more than last month</p>
          </div>
          <div className='text-center text-white py-4'>
            <h1>Active Apps</h1>
            <p className='font-bold text-4xl'>132+</p>
            <p>31 more will Launch</p>
          </div>
        </div>

  </div>
    </div>
  )
}

export default Banner