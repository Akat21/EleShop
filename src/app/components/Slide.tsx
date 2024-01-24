import React from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { BestSellerType } from '@/lib/types/BestSellerType';

const Slide: React.FC<BestSellerType> = ({data}) =>  {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center h-full'>
        {/* Description Section */}
        <div className='max-w-96'>
            <div className='flex items-center text-rose-500 mb-5'>
                <FontAwesomeIcon icon={faStar} width={20} height={20} className='text-lg'/>
                <h1 className='text-sm ml-1.5 font-semibold'>Top Products of the Month</h1>
            </div>
            <h1 className='font-bold text-2xl md:text-4xl leading-snug mb-8'>{data.name}</h1>
            <h1 className='text-slate-500 text-sm leading-relaxed mb-10'>{data.description}</h1>
            <button className="flex items-center justify-center bg-blue-500 text-white rounded-md px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                <p className='text-sm mr-2'>Shop Now</p>
                <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
            </button>
        </div>

        {/* Image Section */}
        <div>
            <Image src={data.picture} alt='Produkt' width={360} height={360} className=' object-contain'/>
        </div>

    </div>
  )
}

export default Slide;
