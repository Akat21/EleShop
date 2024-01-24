"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType} from 'swiper';
import { useMediaQuery } from 'react-responsive';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {categories} from '@/lib/data/categories'

const CategoriesBrowser = () => {
    //Swiper Navigation Handling Consts
    const swiperRef = React.useRef<SwiperType>();
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const hideArrows = useMediaQuery({ query: '(max-width: 1024px)' })

    React.useEffect(() => {
        setActiveIndex(swiperRef.current?.activeIndex || 0);
    }, [hideArrows])

    //Handle Next and Prev Buttons
    const handleNext = () => { 
        swiperRef.current?.slideNext();
        setActiveIndex(swiperRef.current?.activeIndex || 0);
    }

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
        setActiveIndex(swiperRef.current?.activeIndex || 0);
    }


    // Map through data and create a Slide component for each item
    const Slides = categories.map((item, index) => {
        return (
            <SwiperSlide key={index} className='flex justify-center border-2 border-slate-200 rounded bg-white min-w-48 p-2 cursor-pointer hover:bg-gray-200 transition-colors'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <Image src={item.img} alt='Logo' className='object-contain h-36'/>
                    <h1 className='text-sm text-center text-slate-500 font-medium mt-4'>{item.name}</h1>
                </div>
            </SwiperSlide>
        )
      })

    return (
        <div className='h-96 w-full px-4 md:px-24 py-20 bg-slate-50'>

            {/* Title + Navigation Arrows */}
            <div className='flex justify-between items-center mb-6 sm:mb-12'>
                <h1 className='text-3xl font-semibold'>Browse by Category</h1>

                {/* Custom Navigation */}
                {!hideArrows && <div className='flex'>
                    <button className={`relative ${activeIndex !== 0 ? 'bg-blue-500 border border-blue-500' : 'bg-white border border-slate-300'} text-white px-3 py-1 rounded-md mr-4`}
                            onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} className={`${activeIndex !== 0 ? 'text-white' : 'text-slate-300'}`}/>
                    </button>
                    <button className={`${activeIndex !== 5 ? 'bg-blue-500  border border-blue-500' : 'bg-white border border-slate-300'} text-white px-3 py-1 rounded-md`}
                            onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} className={`${activeIndex !== 5 ? 'text-white' : 'text-slate-300'}`}/>
                    </button>
                </div>}
                {hideArrows && <div className='flex'>
                    <button className={`relative ${activeIndex !== 0 ? 'bg-blue-500 border border-blue-500' : 'bg-white border border-slate-300'} text-white px-3 py-1 rounded-md mr-4`}
                            onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} className={`${activeIndex !== 0 ? 'text-white' : 'text-slate-300'}`}/>
                    </button>
                    <button className={`${activeIndex !== 7 ? 'bg-blue-500  border border-blue-500' : 'bg-white border border-slate-300'} text-white px-3 py-1 rounded-md`}
                            onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} className={`${activeIndex !== 7 ? 'text-white' : 'text-slate-300'}`}/>
                    </button>
                </div>}
            </div>
                
            {/* Swiper Init */}
            <Swiper
                slidesPerView={hideArrows ? 2 : 4}
                spaceBetween={hideArrows ? 10 : 20}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                style={{height: '200px'}}
                className='h-[100px] sm:h-[200px]'
            >
                {Slides}
            </Swiper>
        </div>
  )
}

export default CategoriesBrowser
