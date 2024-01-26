"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import Slide from './Slide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bg1 from '@/lib/assets/slider-bg-1.jpg'
import bg2 from '@/lib/assets/slider-bg-2.jpg'
import bg3 from '@/lib/assets/slider-bg-3.jpg'
const backgroundImages = [bg1, bg2, bg3]

import {data} from '@/lib/data/bestsellers.js'

const TopSlider = () => {
  // Responsive breakpoints
  const hideArrows = useMediaQuery({ query: '(max-width: 1024px)' })

  // Map through data and create a Slide component for each item
  const Slides = data.map((item, index) => {
    return (
      <SwiperSlide key={index} className="relative w-full h-full" style={{ backgroundImage: `url(${backgroundImages[index].src})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
          <Slide data={item}/>
      </SwiperSlide>
    )
  })

  return (
    <>
    {/* Swiper Init */}
      <Swiper
        spaceBetween={0}
        navigation={!hideArrows ? true : false}
        pagination={{
          clickable: true,
        }} 
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        allowTouchMove={false}
        className='h-[900px] md:h-[500px]'
      >
        {/* Slides Init */}
        {Slides}
      </Swiper>
    </>
  );
}

export default TopSlider;