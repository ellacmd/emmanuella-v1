'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const LazySpline = dynamic(() => import('./wrapped-spline'), {
    ssr: false,
    loading: () => null,
});

const Hero = () => {
    const splineRef = useRef(null);

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    } as const;

    return (
        <div className='w-full h-screen relative'>
            <LazySpline
                ref={splineRef}
                scene='https://prod.spline.design/9O4Rqq5s2fLp7bDh/scene.splinecode'
                className='w-full h-full'
            />
            <div
                className='absolute bottom-5 right-5 w-42 h-10 bg-black rounded'
                style={{ zIndex: 10 }}
            />

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none'>
                <motion.h1
                    initial='hidden'
                    animate='visible'
                    variants={textVariants}
                    className='text-2xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4'>
                    I help startups build seamless web applications
                </motion.h1>

                <motion.p
                    initial='hidden'
                    animate='visible'
                    variants={textVariants}
                    transition={{ delay: 0.2 }}
                    className='text-base md:text-2xl text-zinc-200 mb-8 max-w-2xl'>
                    Clean code. Smooth UX. Fast delivery.
                </motion.p>

                <motion.a
                    initial='hidden'
                    animate='visible'
                    variants={textVariants}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://www.upwork.com/freelancers/~0150ced5a258ad728a'
                    target='_blank'
                    className='px-8 py-2 bg-[#ff66c4] text-white font-semibold rounded-md shadow-lg hover:bg-pink-500 transition pointer-events-auto'>
                    Hire me
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
