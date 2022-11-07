import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Thumbs} from 'swiper';
import './slider.css'
import { onImageError } from '../products/card';
import useSingleProduct from '../../hooks/use-single-product';
import SwiperCore  from 'swiper';



const Slider = () => {
    const {product} = useSingleProduct()

    const [activeThumb, setActiveThumb]= useState<SwiperCore>()

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
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
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
