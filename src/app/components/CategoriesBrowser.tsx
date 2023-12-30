"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType} from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CategoriesBrowser = () => {
    //Swiper Navigation Handling Consts
    const swiperRef = React.useRef<SwiperType>();
    const [activeIndex, setActiveIndex] = React.useState<number>(0);


    //Handle Next and Prev Buttons
    const handleNext = () => { 
        swiperRef.current?.slideNext();
        setActiveIndex(swiperRef.current?.activeIndex || 0);
    }

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
        setActiveIndex(swiperRef.current?.activeIndex || 0);
    }


    return (
        <div className='h-96 w-full px-24 py-20 bg-slate-50'>

            {/* Title + Navigation Arrows */}
            <div className='flex justify-between items-center mb-12'>
                <h1 className='text-3xl font-semibold'>Browse by Category</h1>

                {/* Custom Navigation */}
                <div className='flex'>
                    <button className={`relative ${activeIndex !== 0 ? 'bg-blue-500 border border-blue-500' : 'bg-white border border-slate-300'} text-white px-3 py-1 rounded-md mr-4`}
                            onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} className={`${activeIndex !== 0 ? 'text-white' : 'text-slate-300'}`}/>
                    </button>
                    <button className={`${activeIndex !== 3 ? 'bg-blue-500  border border-blue-500' : 'bg-white border border-slate-300'} text-white px-3 py-1 rounded-md`}
                            onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} className={`${activeIndex !== 3 ? 'text-white' : 'text-slate-300'}`}/>
                    </button>
                </div>
            </div>
                
            {/* Swiper Init */}
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                style={{height: '200px'}}
            >
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 1</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 2</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 3</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 4</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 5</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 6</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 7</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 8</SwiperSlide>
                <SwiperSlide className='border-2 border-slate-200 rounded bg-white min-w-48'>Slide 9</SwiperSlide>
            </Swiper>
        </div>
  )
}

export default CategoriesBrowser
