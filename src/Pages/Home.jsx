import React from 'react'
import Banner from '../Components/Banner'
import { NavLink  } from 'react-router'
import ProductCard from '../Components/ProductCard'
import useProducts from '../Hooks/useProducts'

const Home = () => {
 
  const {products,loading,error} = useProducts()
  
  const featuredProducts = products.slice(0,8)
  // console.log(products)
  
  
  return (
    
  <div >  
  <Banner></Banner>
  <div className='py-10 bg-base-200'>
    <div className='text-center py-5'>
      <h1 className='font-bold text-4xl'>Trending Apps</h1><br />
    <p>Explore All Trending Apps on the Market developed by us</p>
    </div>
    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {
      featuredProducts.map(product=>(
      <ProductCard key={product.id} product={product}></ProductCard>
    ))
    }
    
  </div>
     <div className='text-center'>
      <NavLink to="/apps" className="btn my-6 text-white" style={{
        background:
          "linear-gradient(90deg, #632EE3 0% , #9F62F2 100%)",
      }}>Show all</NavLink>
     </div>
  </div>
  </div>

  

    
  )
}

export default Home