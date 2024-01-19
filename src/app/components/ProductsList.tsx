"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import ProductBox from '@/app/components/ProductBox'
import {products} from '@/lib/data/products.js'

const ProductsList = () => {
    const ProductsList = products.slice(0, 8).map((product, idx) => {
        return (
            <ProductBox key={product.id} data={product} />
        )
    })

    return (
        <div className='px-24 py-20 bg-slate-50'>
            <div className='flex flex-row justify-between items-center mb-12'>
                <h1 className='text-3xl font-semibold'>Featured Products</h1>
                <button className="flex items-center justify-center bg-blue-500 text-white rounded-md px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                        <p className='text-sm mr-2'>View All Products</p>
                        <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
                </button>
            </div>  
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
                {ProductsList}
            </div>
        </div>
  )
}

export default ProductsList;