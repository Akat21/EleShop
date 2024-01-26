import React from 'react'
import { Card, CardMedia, CardActions, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons'
import Image, { StaticImageData } from 'next/image'

interface ProductType {
    data: {
        id: number;
        name: string;
        price: number;
        tags: string[];
        company: string;
        model: string;
        rating: number;
        description: string;
        picture: string;
    }
}

const ProductBox: React.FC<ProductType> = ({data}) => {
    const [display, setDisplay] = React.useState("hidden"); 
    return (
        <div className='mb-4'> 
            <Card className='relative flex justify-center bg-white cursor-pointer transition-transform transform hover:scale-105' onMouseOver={() => setDisplay("flex")} onMouseOut={() => setDisplay("hidden")}>
                <Image width={320} height={320} className='h-80 pb-9 pt-4 px-4 object-contain' src={data.picture} loading='eager' alt="product1"/>
                <CardActions className={`absolute ${display} bottom-2 left-0 w-full justify-center`}>
                    <button className="flex items-center justify-center bg-blue-500 text-white rounded-md px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                        Add To Cart
                    </button>
                    <button className='flex items-center justify-center w-12 bg-slate-200 text-slate-600 rounded-md px-4 py-1 h-11 hover:bg-slate-300 transition duration-300'>
                        <FontAwesomeIcon icon={faEye} width={50} height={50} className='flex'/>
                    </button>
                    <button className='flex items-center justify-center w-12 bg-slate-200 text-slate-600 rounded-md px-4 py-1 h-11 hover:bg-slate-300 transition duration-300'>
                        <FontAwesomeIcon icon={faHeart} width={30} height={30} className='flex'/>
                    </button>
                </CardActions>
            </Card>
            <div>
                <h1 className='text-sm text-slate-500 font-medium mt-3 overflow-hidden whitespace-nowrap overflow-ellipsis'>{data.name}</h1>
                <Rating name="read-only" value={data.rating} readOnly className='mt-1'/>
                <h1 className='text-base font-semibold'>{`$${data.price.toFixed(2)}`}</h1>
            </div>
        </div>
  )
}

export default ProductBox;
