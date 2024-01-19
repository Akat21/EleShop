"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card, CardMedia, CardActions, Rating} from '@mui/material'

import NewProduct from './NewProduct'

import {products} from '@/lib/data/products.js'

const NewArrivals = () => {
    const NewProducts = products.slice(0, 3).map((product, idx) => {
        return (
            <NewProduct key={product.id} data={product} />
        )
    })

    return (
        <div className='px-24 pb-20 bg-slate-50'>
            <div className='flex flex-row justify-between items-center mb-12'>
                    <h1 className='text-3xl font-semibold'>New Arrivals</h1>
                    <button className="flex items-center justify-center bg-blue-500 text-white rounded-md px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                            <p className='text-sm mr-2'>View All Products</p>
                            <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
                    </button>
            </div>  
            <div className='flex'>
                <Card className='relative flex px-10 pt-10 w-5/12 bg-slate-200'>
                    <CardActions className={`absolute flex-col w-10/12 justify-start p-7 top-0 left-0`}>
                        <div>
                            <h1 className='text-2xl font-semibold mb-8'>{products[8].name}</h1>
                            <button className="flex items-center justify-center bg-blue-500 text-white rounded-md px-6 py-2 h-11 w-36 hover:bg-blue-600 transition duration-300">
                                    <p className='text-sm mr-2'>Shop Now</p>
                                    <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
                            </button>
                        </div>
                    </CardActions>
                    <CardMedia component="img" className='flex h-full w-full mt-7 ml-10' image={products[8].picture.src} title="product1"/>
                </Card>
                <div className='w-7/12 grid grid-rows-3 gap-4 ml-6'>
                    {NewProducts}
                </div>
            </div>
        </div>
    )
}

export default NewArrivals;
