"use client"
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import logo from '/assets/thunder-logo.png'
import logoLine from '/assets/line.png'

import { Kanit } from 'next/font/google'

//Init Google Fonts
const kanit = Kanit({ subsets:['latin'], weight: ['500'] })

const MainFooter = () => {
    return (
      <div className='flex flex-col lg:flex-row h-[950px] lg:h-96 justify-around items-start py-16 px-8 sm:px-24 bg-slate-50 border-b-2 border-gray-300'>
          <div className='mt-20 lg:mt-0 mb-8 lg:mb-0'>
            <div className='flex items-end mb-12'>
                <Image src='/assets/thunder-logo.png' alt='Logo' width={40} height={40} className='transform rotate-12 -mr-1.5 object-contain'/>
                <div className='relative'>
                    <h1 className={`${kanit.className} text-2xl`}>ELE-SHOP</h1>
                    <Image src='/assets/line.png' alt='Logo' width={50} height={20} className='absolute top-1/2 -translate-y-1/2 transform rotate-90 translate-x-7 object-contain'/>
                </div>
            </div>
            <div className='flex mb-7'>
              <button className='flex w-10 h-10 justify-center items-center bg-blue-100 text-blue-500 text-xl rounded-md hover:bg-blue-200 hover:text-blue-600 mr-2 transition-all duration-300'>
                <FontAwesomeIcon icon={faFacebookF} width={20} height={20} />
              </button>
              <button className='flex w-10 h-10 justify-center items-center bg-blue-100 text-blue-500 text-xl rounded-md hover:bg-blue-200 hover:text-blue-600 mr-2 transition-all duration-300'>
                <FontAwesomeIcon icon={faInstagram} width={20} height={20}/>
              </button>
              <button className='flex w-10 h-10 justify-center items-center bg-blue-100 text-blue-500 text-xl rounded-md hover:bg-blue-200 hover:text-blue-600 mr-2 transition-all duration-300'>
                <FontAwesomeIcon icon={faXTwitter} width={20} height={20}/>
              </button>
              <button className='flex w-10 h-10 justify-center items-center bg-blue-100 text-blue-500 text-xl rounded-md hover:bg-blue-200 hover:text-blue-600 mr-2 transition-all duration-300'>
                <FontAwesomeIcon icon={faPinterestP} width={20} height={20}/>
              </button>
            </div>
            <p className='text-slate-500 text-sm leading-relaxed'>&copy; 2024 Ele-Shop. All rights reserved.</p>
          </div>
          <div className='flex flex-col h-60 mb-6 lg:mb-0'>
            <h1 className='text-lg lg:text-xl font-semibold'>Get to Know Us</h1>
            <hr className='w-24 mb-4 lg:mb-10 mt-3'/>
            <div className='flex flex-col text-slate-500 text-sm leading-relaxed'>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>About Us</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>News & Blog</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Careers</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Contact Us</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>How To Shop</a>
            </div>
          </div>
          <div className='flex flex-col h- mb-6 lg:mb-0'>
            <h1 className='text-lg lg:text-xl font-semibold'>Orders & Returns</h1>
            <hr className='w-24 mb-4 lg:mb-10 mt-3'/>
            <div className='flex flex-col text-slate-500 text-sm leading-relaxed'>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Shipping & Delivery</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Returns & Exchange</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Track Order</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Selling Tips</a>
              <a href="/" className='mb-3 hover:text-black transition-all duration-300'>Payment</a>
            </div>
          </div>
          <div className='flex flex-col h-60 mb-16 lg:mb-0'>
            <h1 className='text-lg lg:text-xl font-semibold'>Contact</h1>
            <hr className='w-24 mb-4 lg:mb-10 mt-3'/>
            <div className='flex flex-col text-slate-500 text-sm leading-relaxed w-full lg:w-40'>
              <a href="/" className='flex flex-row justify-start items-center mb-3 hover:text-black transition-all duration-300'>
                <FontAwesomeIcon icon={faPhoneVolume} width={20} height={20} className='mr-2 w-5 h-5 text-blue-600'/>
                <p>+48 531 237 792</p>
              </a>
              <a href="/" className='flex flex-row justify-start items-center mb-3 hover:text-black transition-all duration-300'>
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20} className='mr-2 w-5 h-5 text-blue-600'/>
                <p>eleshop@gmail.com</p>
              </a>
              <a href="/" className='flex flex-row justify-start items-center mb-3 hover:text-black transition-all duration-300'>
                <FontAwesomeIcon icon={faLocationDot} width={20} height={20} className='mr-2 w-5 h-5 text-blue-600'/>
                <p>Monte Cassino 32/4, Szczecin 70-464</p>
              </a>
            </div>
          </div>
      </div>
  )
}

export default MainFooter