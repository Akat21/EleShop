import React from 'react'
import Image from 'next/image'
import {StaticImageData} from 'next/image';
import { Card, Rating } from '@mui/material';

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
        picture: StaticImageData;
    }
}

const NewProduct: React.FC<ProductType> = ({data}) =>  {
    return (
        <Card className='h-48 p-4 cursor-pointer transition-transform transform hover:scale-105'>
            <div className='flex'>
                <Image src={data.picture} alt='Produkt' width={360} height={360} className='w-40 h-40 p-3 object-contain bg-slate-200'/>
                <div className='flex flex-col justify-center items-start ml-10'>
                    <h1 className='text-sm text-slate-500 font-medium mt-3 overflow-hidden whitespace-nowrap overflow-ellipsis'>{data.name}</h1>
                    <Rating name="read-only" value={data.rating} readOnly className='mt-1'/>
                    <h1 className='text-base font-semibold'>{`$${data.price.toFixed(2)}`}</h1>
                </div>
            </div>
        </Card>
    )
}

export default NewProduct;