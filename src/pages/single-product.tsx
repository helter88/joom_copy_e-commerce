import React from 'react'
import { useLocation } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Slider from '../components/product-slider/slider'
import ProductInfo from '../components/products/product-info'
import ProductReviews from '../components/products/product-reviews'


const SingleProduct = () => {
  
  const location = useLocation()

  const score = location?.state?.score
  console.log(location)
  return (
    <>
      <div className='grid grid-cols-2 mt-2 pt-5'>
        <div className='flex flex-row-reverse '>
          <Slider />
        </div>
        <div className='ml-28'>
        <ProductInfo />
        </div>
      </div>
      <div className='mt-8'>
        <ProductReviews />
      </div>
      
    </>
    
  )
}

export default SingleProduct
