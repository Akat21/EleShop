"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row h-56 justify-around items-center px-24 bg-slate-50 border-b-2 border-gray-300'>
        <div>
            <h1 className='text-2xl md:text-3xl font-semibold mb-6'>Join Us & Get Updates</h1>
            <p className='text-slate-500 text-sm leading-relaxed'>Sign up for exclusive offers, latest info and updates</p>
        </div>
        <div className='flex'>
            <input type="text" className="h-11 w-60 md:w-80 border-2 border-gray-300 rounded-3xl px-4 py-2 mr-4 focus:outline-none focus:border-gray-300 focus:ring-0" placeholder="Enter your email" />
            <button className="flex items-center justify-center bg-blue-500 text-white rounded-3xl px-6 py-2 h-11 hover:bg-blue-600 transition duration-300">
                <p className='text-sm mr-2'>Subscribe</p>
                <FontAwesomeIcon icon={faArrowRight} width={12} height={12} className='flex mt-0.5'/>
            </button>
        </div>
    </div>
  )
}

export default Contact
