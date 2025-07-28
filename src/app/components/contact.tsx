import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { SiDevdotto, SiGithub, SiLichess, SiLinkedin } from 'react-icons/si';

type BlockProps = {
    className?: string;
    children?: React.ReactNode;
} & HTMLMotionProps<'div'>;

export default function Contact() {
    return (
        <div
            id='contact'
            className='min-h-screen bg-black px-4 pb-12 text-zinc-50 lg:mt-[-160px] relative'>
            <motion.div
                initial='initial'
                animate='animate'
                transition={{
                    staggerChildren: 0.05,
                }}
                className='mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4'>
                <HeaderBlock />
                <SocialsBlock />
                <LichessBlock />
                <LocationBlock />
                <QuoteBlock />
            </motion.div>
        </div>
    );
}

const Block = ({ className, children, ...rest }: BlockProps) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: 'spring',
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                'col-span-4 rounded-lg border border-zinc-700 bg-black p-6',
                className
            )}
            {...rest}>
            {children}
        </motion.div>
    );
};

const HeaderBlock = () => (
    <Block className='col-span-12 row-span-2 md:col-span-6'>
        <h1 className='mb-12 text-4xl font-medium leading-tight'>
            Hi, I&apos;m Emmanuella.
            <span className='text-zinc-400'>
                I build cool websites like this one.
            </span>
        </h1>
        <a
            href='mailto:emmanuellatrust@gmail.com'
            className='flex items-center gap-1 text-[#ff66c4] hover:underline'>
            Contact me <FiArrowRight className='hover:' />
        </a>
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: '2.5deg',
                scale: 1.1,
            }}
            className='col-span-6 bg-blue-500 md:col-span-3  '>
            <a
                href='https://www.linkedin.com/in/ella-batubo/'
                target='_blank'
                className='grid h-full place-content-center text-3xl text-white'>
                <SiLinkedin />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: '-2.5deg',
                scale: 1.1,
            }}
            className='col-span-6 bg-black-600 md:col-span-3'>
            <a
                href='https://github.com/ellacmd'
                className='grid h-full place-content-center text-3xl text-white'
                target='_blank'>
                <SiGithub />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: '-2.5deg',
                scale: 1.1,
            }}
            className='col-span-6 bg-zinc-50 md:col-span-3'>
            <a
                href='https://lichess.org/@/pawnster101'
                target='_blank'
                className='grid h-full place-content-center text-3xl text-black'>
                <SiLichess />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: '2.5deg',
                scale: 1.1,
            }}
            className='col-span-6 bg-gray-500 md:col-span-3'>
            <a
                href='https://dev.to/ellacmd'
                target='_blank'
                className='grid h-full place-content-center text-6xl text-white'>
                <SiDevdotto />
            </a>
        </Block>
    </>
);

const LichessBlock = () => (
    <Block className='col-span-12 text-3xl leading-snug'>
        <div className='w-full flex justify-center'>
            <iframe
                src='https://lichess.org/training/frame?theme=brown&bg=dark'
                className='w-[400px] aspect-[9/11] border-0'
            />
        </div>
    </Block>
);

const LocationBlock = () => (
    <Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-3'>
        <FiMapPin className='text-3xl' />
        <p className='text-center text-lg text-zinc-400'>
            Port-Harcourt, Nigeria
        </p>
    </Block>
);

const QuoteBlock = () => (
    <Block className='col-span-12 md:col-span-9'>
        <p className='text-[#ff66c4] text-lg font-semibold mb-2'>
            “Don’t worry, I tested it… in production.”
        </p>
        <p className='text-neutral-400 italic text-sm inline'>
            — Every dev, ever
        </p>

        <span>😅</span>
    </Block>
);
