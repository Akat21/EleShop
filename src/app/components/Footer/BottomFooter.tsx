"use client"
import React from 'react'
import Image from 'next/image'

const BottomFooter = () => {
    return (
        <div className='flex justify-around bg-slate-50 items-center pt-4 pb-2 '>
            <div className='grid md:flex p-2 grid-cols-2 gap-4 mr-8'>
                <button className='flex w-16 h-8 justify-center items-center bg-gray-200 text-gray-500 text-xl rounded-md hover:bg-gray-300 hover:text-gray-600 mr-2 transition-all duration-300'>
                    <Image src='/assets/mastercard.svg' width={40} height={30} alt="Mastercard" className='p-0.5' />
                </button>
                <button className='flex w-16 h-8 justify-center items-center bg-gray-200 text-gray-500 text-xl rounded-md hover:bg-gray-300 hover:text-gray-600 mr-2 transition-all duration-300'>
                    <Image src='/assets/paypal.svg' width={40} height={30} alt="Paypal" />
                </button>
                <button className='flex w-16 h-8 justify-center items-center bg-gray-200 text-gray-500 text-xl rounded-md hover:bg-gray-300 hover:text-gray-600 mr-2 transition-all duration-300'>
                    <Image src='/assets/apple-pay.svg' width={40} height={30} alt="ApplePay" />
                </button>
                <button className='flex w-16 h-8 justify-center items-center bg-gray-200 text-gray-500 text-xl rounded-md hover:bg-gray-300 hover:text-gray-600 mr-2 transition-all duration-300'>
                    <Image src='/assets/google-pay.svg' width={40} height={30} alt="GooglePay" />
                </button>      
            </div>
            <div className='flex text-slate-500 text-sm leading-relaxed'>
                <a href="/" className='mr-3 hover:text-black transition-all duration-300'>Privacy Policy</a>
                <a href="/" className='mr-3 hover:text-black transition-all duration-300'>Terms of Use</a>
                <a href="/" className='mr-3 hover:text-black transition-all duration-300'>Shipping Policy</a>
            </div>
        </div>
    )
}

export default BottomFooter
