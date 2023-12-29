"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars} from '@fortawesome/free-solid-svg-icons';
import { Kanit } from 'next/font/google'
import Image from 'next/image'
import logo from '../../lib/assets/thunder-logo.png'
import logoLine from '../../lib/assets/line.png'

//Init Google Fonts
const kanit = Kanit({ subsets:['latin'], weight: ['500'] })

export default function Navbar() {
    // State for mobile
    const [isMobile, setIsMobile] = React.useState<boolean>(false);
    
    // State for mobile menu
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    React.useEffect(() => {   
        // Check if the window is mobile
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 819;
            console.log(window.innerWidth);
            setIsMobile(newIsMobile);

            if (!newIsMobile) {
                setIsOpen(false);
            }
        };
        
        // Add event listener to resize event
        handleResize();
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <nav className='fixed top-0 left-0 bg-white h-20 w-full p-2 select-none z-10'>
            <div className='flex justify-around items-center h-full'>

                {/* Logo View */}
                <div className='flex items-end'>
                    <Image src={logo} alt='Logo' width={40} height={40} objectFit='contain' className='transform rotate-12 -mr-1.5'/>
                    <div>
                        <h1 className={`${kanit.className} text-2xl`}>ELE-SHOP</h1>
                        <Image src={logoLine} alt='Logo' width={50} height={20} objectFit='contain' className='absolute top-1/2 -translate-y-1/2 transform rotate-90 translate-x-7'/>
                    </div>
                </div>

                {/* Pages Selection View */}
                {!isMobile && (
                    <div className='flex text-slate-500'>
                        <a href="/" className='mx-4 transition-colors hover:text-black'>Home</a>
                        <a href="/category" className='mx-4 transition-colors hover:text-black'>Category</a>
                        <a href="/about" className='mx-4 transition-colors hover:text-black'>About Us</a>
                        <a href="/faq" className='mx-4 transition-colors hover:text-black'>FAQ</a>
                        <a href="/blog" className='mx-4 transition-colors hover:text-black'>Blog</a>
                        <a href="/contact" className='mx-4 transition-colors hover:text-black'>Contact</a>
                    </div>
                )}

                {/* Actions View*/}
                <div className='flex text-slate-500'>
                    <FontAwesomeIcon icon={faSearch} size="lg" width={20} height={20} className='mx-4 hover:text-black transition-transform hover:translate-y-[-1px] cursor-pointer'/>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" width={20} height={20} className='mx-4 hover:text-black transition-transform hover:translate-y-[-1px] cursor-pointer'/>
                    <FontAwesomeIcon icon={faUser} size="lg" width={20} height={20} className='mx-4 hover:text-black transition-transform hover:translate-y-[-1px] cursor-pointer'/>
                    {isMobile && <FontAwesomeIcon icon={faBars} size="lg" width={20} height={20} className='mx-4 hover:text-black transition-transform hover:translate-y-[-1px] cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>}
                </div>

                {/* Mobile Pages Selection View */}
                {isOpen && (
                    <div className="fixed right-0 top-20 bg-white h-full w-2/5">
                        <div className='flex flex-col text-slate-500'>
                            <a href="/" className='my-3 mx-4 transition-colors hover:text-black border-b pb-3'>Home</a>
                            <a href="/category" className='my-3 mx-4 transition-colors hover:text-black border-b pb-3'>Category</a>
                            <a href="/about" className='my-3 mx-4 transition-colors hover:text-black border-b pb-3'>About Us</a>
                            <a href="/faq" className='my-3 mx-4 transition-colors hover:text-black border-b pb-3'>FAQ</a>
                            <a href="/blog" className='my-3 mx-4 transition-colors hover:text-black border-b pb-3'>Blog</a>
                            <a href="/contact" className='my-3 mx-4 transition-colors hover:text-black border-b pb-3'>Contact</a>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}
