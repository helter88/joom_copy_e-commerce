import React from 'react'
import { useLocation } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Slider from '../components/product-slider/slider'
import useSingleProduct from '../hooks/use-single-product'

const SingleProduct = () => {
  const {product} = useSingleProduct()
  const location = useLocation()

  const score = location?.state?.score
  console.log(location)
  return (
    <div className='grid grid-cols-2 mt-2 pt-5'>
      <div className='flex flex-row-reverse '>
        <Slider />
      </div>
      <div className='ml-32'>
        <p className='text-2xl font-medium text-stone-800'>
          {product?.title}
        </p>
        <p>
          {score}
        </p>
      </div>
    </div>
  )
}

export default SingleProduct
