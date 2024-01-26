"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card, CardMedia, CardActions, Rating, CardContent} from '@mui/material'
import Image from 'next/image'

import NewProduct from './NewProduct'

import {products} from '@/lib/data/products.js'

const NewArrivals = () => {
    const NewProducts = products.slice(0, 3).map((product, idx) => {
        return (
            <NewProduct key={product.id} data={product} />
        )
    })

    return (
        <div className='px-4 md:px-24 pb-20 bg-slate-50'>
            <div className='flex flex-row justify-between items-center mb-12'>
                    <h1 className='text-3xl font-semibold'>New Arrivals</h1>
                    <button className="flex items-center justify-center bg-blue-500 text-white rounded-lg px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                            <p className='text-sm mr-2'>View All Products</p>
                            <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
                    </button>
            </div>  
            <div className='flex flex-col lg:flex-row bg-slate-200'>
                <Card className='relative flex pt-10 w-full lg:w-5/12 bg-slate-200'>
                    <div className='absolute flex-col w-full justify-start p-7 top-0 left-0'>
                        <h1 className='text-2xl font-semibold mb-8'>{products[8].name}</h1>
                        <button className="flex items-center justify-center bg-blue-500 text-white rounded-lg px-6 py-2 h-11 w-36 hover:bg-blue-600 transition duration-300">
                                <p className='text-sm mr-2'>Shop Now</p>
                                <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
                        </button>
                    </div>
                    <Image className='flex h-full w-full mt-7' width={120} height={120} src={products[8].picture} alt="product1" loading='eager'/>
                </Card>
                <div className='w-full lg:w-7/12 grid grid-rows-3 gap-4 mt-4 lg:mt-0 lg:ml-6'>
                    {NewProducts}
                </div>
            </div>
        </div>
    )
}

export default NewArrivals;
