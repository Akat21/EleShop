"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import {products} from '@/lib/data/products.js'

const Discount = () => {
    const Slides = products.slice(5, 7).map((product, index) => {
        return (
            <SwiperSlide key={index}>
                <Image src={product.picture} alt='Produkt' width={360} height={360} className='w-full h-96 p-4 object-contain bg-yellow-200'/>
            </SwiperSlide>
        )
    })

    return (
        <div className='flex px-4 md:px-24 pb-20 bg-slate-50'>
            <div className='flex flex-col xl:flex-row justify-between h-full xl:h-96 w-full bg-yellow-200 shadow-md rounded-sm'>
                <div className='px-4 md:px-20 py-4 md:py-20'>
                    <div className='flex items-center text-rose-500 mb-5'>
                        <FontAwesomeIcon icon={faStar} width={20} height={20} className='text-xl'/>
                        <h1 className='text-sm ml-1.5 font-semibold'>Weekend Discount</h1>
                    </div>
                    <h1 className='font-medium text-3xl leading-snug mb-8'>Up To 40% Off On Digital Items</h1>
                    <p className='text-slate-500 text-sm leading-relaxed mb-10 w-96'>The exact percentage of discount may vary depending on the specific product or promotion being offer</p>
                    <button className="flex items-center justify-center bg-blue-500 text-white rounded-md px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                        <p className='text-sm mr-2'>Shop Now</p>
                        <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
                    </button>
                </div>
                <div className='w-full xl:w-96 mr-10'>
                    <Swiper
                        effect={'flip'}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFlip, Autoplay, Navigation, Pagination]}
                        allowTouchMove={false}
                        loop={true}
                        className='h-full w-full xl:w-96'
                    >
                        {/* Slides Init */}
                        {Slides}
                    </Swiper>
                </div>
            </div>
        </div>
  )
}

export default Discount