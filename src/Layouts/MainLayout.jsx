import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet, useNavigation } from 'react-router'
import { ToastContainer } from 'react-toastify'
import LoadingSpinner from '../Components/LoadingSpinner'

const MainLayout = () => {
  const navigation = useNavigation()
  console.log(navigation.state)
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        {
          navigation?.state === 'loading'?(<LoadingSpinner />) : (<div className='flex-1'>
          <Outlet></Outlet>
        </div>)
        }
        
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default MainLayout