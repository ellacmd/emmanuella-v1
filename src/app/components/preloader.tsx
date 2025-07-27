import Image from 'next/image';
import logo from '/public/assets/logo.svg';

const Preloader = () => (
    <div className='fixed top-0 inset-0 z-500 flex flex-col items-center justify-center bg-black   backdrop-blur-sm'>
        <div className='relative flex items-center justify-center'>
            <div className='w-32 h-32 rounded-full border-4 border-t-4 border-t-pink-400 border-b-transparent border-l-transparent border-r-pink-300 animate-spin' />
            <Image
                src={logo}
                alt='Logo'
                width={64}
                height={64}
                className='absolute animate-fade-in'
                priority
            />
        </div>
    </div>
);

export default Preloader;
