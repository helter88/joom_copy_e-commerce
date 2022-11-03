import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Thumbs} from 'swiper';
import './slider.css'
import { onImageError } from '../products/card';

const fetchProduct = () =>{
    return Axios.get("https://api.escuelajs.co/api/v1/products/1").then(resp => resp.data)
}

const Slider = () => {
    const {data:product} = useQuery(['product'], fetchProduct)

    const [activeThumb, setActiveThumb]= useState()

    const displayPhotos = product?.images?.map((image: string, index:number)=>(
        <SwiperSlide key={index} >
            <img src ={image} alt="product photo" onError={onImageError}/>
        </SwiperSlide>
    )
    
    )

    // const numDisplay = product.images.length || 2

  return (
    <>
      <Swiper 
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{swiper: activeThumb}}
        className='product-main'

      >
        {displayPhotos}
      </Swiper>
      <Swiper 
        direction={"vertical"}
        // onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        modules={[Navigation, Thumbs]}
        className="product-bottom"

      >
        {displayPhotos}
      </Swiper>
    </>
  )
}

export default Slider
