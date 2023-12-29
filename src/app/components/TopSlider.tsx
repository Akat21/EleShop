"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bg1 from '../../lib/assets/slider-bg-1.jpg'
import bg2 from '../../lib/assets/slider-bg-2.jpg'
import bg3 from '../../lib/assets/slider-bg-3.jpg'
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const TopSlider = () => {

  return (
    <>
      <Swiper
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        allowTouchMove={false}
        style={{height: '500px', width: '100%'}}
      >
        <SwiperSlide>
          <Image src={bg1} alt='background-img' objectFit='cover' className='w-full h-full' quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bg2} alt='background-img' objectFit='cover' className='w-full h-full' quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bg3} alt='background-img' objectFit='cover' className='w-full h-full' quality={100}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TopSlider;