import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default MainLayout