import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Slider from '../components/product-slider/slider'

const SingleProduct = () => {
  return (
    <div className='grid grid-cols-2 mt-2 pt-5'>
      <div className='flex flex-row-reverse '>
        <Slider />
      </div>
      <div> Col2</div>
    </div>
  )
}

export default SingleProduct
