import React, { useEffect, useState } from 'react'
import useProducts from '../Hooks/useProducts'
import ProductCard from '../Components/ProductCard'
import AppErrorPage from './AppErrorPage'
import { FaSearch } from 'react-icons/fa'
import LoadingSpinner from '../Components/LoadingSpinner'


const Apps = () => {
  const {products,loading} =useProducts()
  const [search,setSearch] = useState('')
   const [searchLoading, setSearchLoading] = useState(false)
  const [searchedProduct, setSearchedProduct] = useState([])

  // const term = search.trim().toLocaleLowerCase()
  // const searchedProduct = term? products.filter(product=>product.title.toLocaleLowerCase().includes(term)) : products
  
  // if (loading) {
  //     return <LoadingSpinner /> 
  //   }

    useEffect(() => {
    setSearchLoading(true)

    const delayApp = setTimeout(() => {
      const term = search.trim().toLowerCase()
      const filteredApp = term
        ? products.filter((product) =>
            product.title.toLowerCase().includes(term)
          )
        : products
      setSearchedProduct(filteredApp)
      setSearchLoading(false)
    }, 200) // 400ms debounce App (natural feel)

    return () => clearTimeout(delayApp)
  }, [search, products])

  if (loading || searchLoading) {
    return <LoadingSpinner />
  }

  if(searchedProduct.length===0 && search){
    return <AppErrorPage onGoBack={()=>setSearch('')}></AppErrorPage>
  }
  return (
    <div>
         <div className='py-10 bg-base-200'>
             <div className='text-center py-5 w-11/12 mx-auto'>
               <h1 className='font-bold text-4xl'>Our All Applications</h1><br />
             <p>Explore All Apps on the Market developed by us. We code for Millions</p>
             <div className='flex flex-col lg:flex-row justify-between items-center '>
              <p className='font-semibold text-xl text-gray-700'>({searchedProduct.length}) Apps Found</p>
              <label className='input'>
                <FaSearch />
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search"placeholder='search Apps' />
              </label>
             </div>
             </div>
             <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {
               searchedProduct.map(product=>(
               <ProductCard key={product.id} product={product}></ProductCard>
             ))
             }
             
           </div>
              
           </div>
    </div>
  )
}

export default Apps


