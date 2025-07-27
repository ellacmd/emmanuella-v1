'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.svg';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-black/20 backdrop-blur-xs shadow-lg'
                    : 'bg-transparent'
            } w-[90vw] rounded-lg`}>
            <div className='container mx-auto px-4 md:px-0 py-4 '>
                <div className='flex justify-between'>
                    <Image src={logo} alt='brand logo' width={30} height={30} />
                    <ul className='flex gap-4 text-[#ff66c4] font-medium'>
                        <li className='cursor-pointer'>
                            <a href='#about'>About</a>
                        </li>
                        <li className='cursor-pointer'>
                            <a href='#work'>Work</a>
                        </li>
                        <li className='cursor-pointer'>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
