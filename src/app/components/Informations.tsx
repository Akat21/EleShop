import React from 'react'
import Image from 'next/image'
import { Card, CardMedia, CardContent } from '@mui/material'

import shippingImg from '@/lib/assets/Shipping.png'
import paymentImg from '@/lib/assets/Payment.png'
import supportImg from '@/lib/assets/Support.png'

const Informations = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex flex-row justify-center items-center h-96'>
            <Card className='h-60 w-80 mr-10 bg-white'>
                <CardContent className='flex flex-col justify-center items-center'>
                    <Image src={shippingImg} alt='shipping' className='h-24 w-24 mb-4'/>
                    <h1 className='text-xl font-semibold mb-2'>Free Shipping</h1>
                    <p className='text-slate-500 text-sm text-center leading-relaxed'>Our free shiping policy applies to all orders, regardless of order value or destination</p>
                </CardContent>
            </Card>
            <Card className='h-60 w-80 mr-10 bg-white'>
                <CardContent className='flex flex-col justify-center items-center'>
                    <Image src={paymentImg} alt='payment' className='h-24 w-24 mb-8'/>
                    <h1 className='text-xl font-semibold mb-2'>Secure Payment</h1>
                    <p className='text-slate-500 text-sm text-center leading-relaxed'>Your payment is always secure, safe and protected at all times</p>
                </CardContent>
            </Card>
            <Card className='h-60 w-80 bg-white'>
                <CardContent className='flex flex-col justify-center items-center'>
                    <Image src={supportImg} alt='payment' className='h-24 w-24 mb-8'/>
                    <h1 className='text-xl font-semibold mb-2'>Support Online 24/7</h1>
                    <p className='text-slate-500 text-sm text-center leading-relaxed'>We are available 24/7 to assist you with any questions, or issues you may have</p>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Informations