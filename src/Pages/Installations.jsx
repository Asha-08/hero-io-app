import React, { useEffect, useState } from 'react'
import iconDownload from "../assets/icon-downloads.png"
import iconRating from "../assets/icon-ratings.png"
import { parseDownloads } from '../Hooks/utils'
import { toast } from 'react-toastify'
import LoadingSpinner from '../Components/LoadingSpinner'

const Installations = () => {
  const [install,setInstall]=useState([])

  const [sortOrder,setSortOrder] = useState('none')
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
     const savedList = JSON.parse(localStorage.getItem('install'))
     if (savedList) setInstall(savedList)
      
  },[])
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
      return <LoadingSpinner /> 
    }

  const sortedItem = ()=>{
    if(sortOrder === 'download-asc'){
      return[...install].sort((a,b)=>parseDownloads(a.downloads) - parseDownloads(b.downloads))
    }else if(sortOrder === 'download-desc'){
      return[...install].sort((a,b)=>parseDownloads(b.downloads) - parseDownloads(a.downloads))
    }else{
     return install
    }
  }


  const handleUninstall = id=>{
    const existingList = JSON.parse(localStorage.getItem('install')) || []
    let updateList = existingList.filter(p=> p.id !==id)
    setInstall(updateList)
    localStorage.setItem('install',JSON.stringify(updateList))
    toast.info('App UnInstall successfully')

  }

  
  return (
    <div className='space-y-6 bg-white'>
      <div className='text-center py-5 w-11/12 mx-auto '>
        <h1 className='font-bold text-4xl'>My Installation</h1><br />
             <p>Explore All Trending Apps on the Market developed by us</p>
        <div className='flex flex-col lg:flex-row justify-between items-center '>
              <p className='font-semibold text-xl text-gray-700'>({install.length}) Apps Found</p>
              
                <label className='form-control w-full max-w-xs'>
                  <select
                  className='select select-borderd'
                   value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                  <option value="none">Sort By Size</option>
                  <option value="download-asc">Low to High</option>
                  <option value="download-desc">High to Low</option>
                </select>
                </label>
              
             </div>
      </div>

      <div className='space-y-3  w-11/12 mx-auto'>
        {sortedItem().map(p=>(
          <div key={p.id} className="flex flex-wrap justify-between items-center p-4 bg-base-300 mt-4 rounded-xl shadow-sm">

            <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center">
          <img
            className="w-28 h-28 rounded-lg object-cover"
            src={p.image}
            alt="image"
          />
        </div>
        <div className=''>
          <div>
            <h2 className="text-2xl font-semibold">{p.title}</h2>
          <div className='flex gap-5'>
            <p className='text-green-400 font-semibold flex items-center'><img className='h-4' src={iconDownload} alt="" /><span>{p.downloads}</span></p>
                    <p className='text-purple-400 font-semibold flex items-center'><img className='h-4' src={iconRating} alt="" />{p.ratingAvg}</p>
                    <p>{p.size}MB</p>
          </div>
          </div>
                
        </div>
        <div className=''>
            <button onClick={()=>handleUninstall(p.id)}  className="btn bg-[#00D390] text-white">
              Uninstall
            </button>
          </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Installations