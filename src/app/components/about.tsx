'use client';
import { motion } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiDocker,
    SiAmazon,
    SiAngular,
    SiReactquery,
    SiJavascript,
    SiFramer,
    SiVercel,
    SiExpo,
    SiSupabase,
} from 'react-icons/si';
import gif from '/public/assets/gif.gif';
import Image from 'next/image';

const skills = [
    'ReactJS',
    'NextJS',
    'Angular',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Motion',
    'Git',
    'GitHub',
    'Vercel',
    'Supabase',
    'Docker',
    'Expo',
    'Cursor AI',
];

const skillIcons: Record<string, React.ReactNode> = {
    ReactJS: <SiReact className='text-cyan-400' />,
    NextJS: <SiNextdotjs className='text-white' />,
    Angular: <SiAngular className='text-red-600' />,
    'React Native': <SiReact className='text-cyan-400' />,
    TypeScript: <SiTypescript className='text-blue-500' />,
    'Tailwind CSS': <SiTailwindcss className='text-sky-400' />,
    Git: <SiGit className='text-orange-500' />,
    GitHub: <SiGithub className='text-white' />,
    Docker: <SiDocker className='text-blue-400' />,
    AWS: <SiAmazon className='text-yellow-400' />,
    'React Query': <SiReactquery className='text-pink-400' />,
    JavaScript: <SiJavascript className='text-yellow-400' />,
    Motion: <SiFramer className='text-white' />,
    Vercel: <SiVercel className='text-white' />,
    Expo: <SiExpo className='text-black' />,
    Supabase: <SiSupabase className='text-green-500' />,
};

function SkillsTicker({
    direction = 'left',
}: {
    direction?: 'left' | 'right';
}) {
    const items = [...skills, ...skills];
    const isLeft = direction === 'left';
    return (
        <div className='overflow-hidden w-screen py-2'>
            <motion.div
                className='flex gap-4 max-w-none'
                style={{
                    width: 'max-content',
                    flexDirection: 'row',
                }}
                animate={{
                    x: isLeft ? ['0%', '-50%'] : ['-50%', '0%'],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 150,
                    ease: 'linear',
                }}>
                {items.map((skill, i) => (
                    <div
                        key={skill + i}
                        className='flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 text-white/80  font-medium text-base shadow border border-zinc-800'>
                        {skillIcons[skill] && (
                            <span className='text-lg'>{skillIcons[skill]}</span>
                        )}
                        <span>{skill}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function AboutSection() {
    return (
        <section
            id='about'
            className='w-full min-h-[80vh]  md:pb-24  flex flex-col items-center'>
            <h3 className='text-3xl md:text-5xl font-extrabold text-center text-white mb-16'>
                <span className='bg-gradient-to-r from-[#ff66c4] to-pink-400 bg-clip-text text-transparent'>
                    About
                </span>
                Me
            </h3>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className=' flex flex-col md:flex-row items-center justify-between gap-16 w-full lg:px-16 mb-16 px-4'>
                <div className='flex-1 max-w-3xl'>
                    <p className='text-base md:text-lg text-zinc-200 mb-2'>
                        I&apos;m a Frontend Developer with 4 years of experience
                        building interactive, and user-friendly web
                        applications.
                    </p>
                    <p className='text-base md:text-lg text-zinc-200 mt-4'>
                        I&apos;m passionate about writing clean, maintainable
                        code, following best practices, and ensuring performance
                        and usability across all devices. I&apos;m also a great
                        communicator who values collaboration, accepts feedback
                        openly, and is committed to continuously improving every
                        project I work on.
                    </p>

                    <p className='text-base md:text-lg text-zinc-200 mt-4'>
                        When I&apos;m not coding, you&apos;ll probably find me
                        playing chess. It&apos;s a game I love deeply and have
                        competed in at the highest level, including representing
                        Nigeria at the World Chess Olympiad.
                    </p>
                </div>

                <div className='relative w-full min-h-[200px] h-60 md:h-96 flex-1'>
                    <Image
                        src={gif}
                        alt='about me'
                        fill
                        sizes='(min-width: 1024px) 50vw, 100vw'
                        className='object-cover rounded-2xl opacity-70 mix-blend-lighten'
                        priority
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-black/60 to-pink-400/10 rounded-2xl' />
                </div>
            </motion.div>

            <div className='w-full flex flex-col items-center mt-18'>
                <div className='mb-4'>
                    <span className='block text-sm text-zinc-400 tracking-widest text-center mb-2'>
                        MY SKILLS
                    </span>
                    <h3 className='text-3xl md:text-5xl font-extrabold text-center text-white mb-8'>
                        Engineering
                        <span className='bg-gradient-to-r from-[#ff66c4] to-pink-400 bg-clip-text text-transparent'>
                            Arsenal
                        </span>
                    </h3>
                </div>
                <div className='w-full max-w-5xl flex flex-col gap-2'>
                    <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
                        <SkillsTicker direction='left' />
                    </div>
                    <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
                        <SkillsTicker direction='right' />
                    </div>
                </div>
            </div>
        </section>
    );
}
