import React from 'react'
import iconDownload from "../assets/icon-downloads.png"
import iconRating from "../assets/icon-ratings.png"

const ProductCard = ({product}) => {
    const {title,ratingAvg,image,downloads
} =product
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-52 overflow-hidden'>
    <img className='w-52 object-cover'
      src={image}
      alt="image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  </div>
  <div className='flex justify-between px-10 py-5'>
        <p className='text-green-400 font-semibold flex items-center'><img className='h-4' src={iconDownload} alt="" />{downloads}</p>
        <p className='text-purple-400 font-semibold flex items-center'><img className='h-4' src={iconRating} alt="" />{ratingAvg}</p>
    </div>
</div>
  )
}

export default ProductCard