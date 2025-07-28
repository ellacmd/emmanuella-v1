'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { FaStarOfLife } from 'react-icons/fa6';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
    const sections = [
        {
            title: 'Spin and Drive Tennis Gym',
            description:
                'A clean and interactive web app for a table tennis gym that allows users to book tables, view schedules, manage bookings, and make payments. Also including an admin-facing dashboard for managing sessions, users, and transactions efficiently.',
            features: [
                {
                    title: 'Admin Panel',
                    description:
                        'Manage users, boards, challenges, roles, subscriptions, and notifications.',
                },
                {
                    title: 'Scheduling & Match Making',
                    description:
                        'Centralized booking system with real-time court availability, coach session management, and peer-to-peer challenge requests powered by calendar-based scheduling logic.',
                },
                {
                    title: 'Payments & Subscription',
                    description:
                        'Integrated payment gateway with support for recurring billing, auto-renewal, and secure transaction handling.',
                },
                {
                    title: 'Real-Time Notifications',
                    description:
                        'WebSocket-powered notification system for instant delivery of booking updates, challenge invites, and administrative alerts across user sessions.',
                },
            ],

            image: '/assets/spinanddrive.png',
            video: '/videos/spinanddrive.mp4',

            hasGithub: false,
            githubUrl: '',
            liveUrl: 'https://spinanddrive.com/',
            techStack: [
                'React',
                'RTK Query',
                'Framer Motion',
                'Tailwind CSS',
                'Formik',
                'Yup',
            ],
        },
        {
            title: 'Twazn',
            description:
                'A modern fintech platform offering Sharia-compliant and Conventional robo-advisory services, designed to scale seamlessly from regulatory sandbox to market launch.It also includes an admin panel that enables authorized personnel to trade on behalf of users, monitor accounts, and efficiently resolve user issues.',
            features: [
                {
                    title: 'Automated KYC via Sumsub Integration',
                    description:
                        'Implemented identity verification using Sumsub’s API to streamline eKYC workflows, ensure regulatory compliance, and reduce onboarding friction.',
                },
                {
                    title: 'Investment Dashboard & Fund Operations',
                    description:
                        'Built a real-time investment dashboard with the ability to invest and liquidate funds across diverse portfolios with transaction logging.',
                },
                {
                    title: 'Risk-Based Trading Strategy Selection',
                    description:
                        'Users could dynamically configure trading preferences based on predefined risk profiles, enabling tailored investment plans.',
                },
                {
                    title: 'Shariah-Compliant & Conventional Portfolio Options',
                    description:
                        'Supported dual investment models with screening logic to filter halal-compliant equities and conventional instruments under the same platform.',
                },
            ],
            image: '/assets/twazn.png',
            video: '/videos/twazn.mp4',

            hasGithub: false,
            githubUrl: '',
            liveUrl: 'https://twazn.com/',
            techStack: ['Angular', 'Angular Material', 'RxJs', 'Google Charts'],
        },
        {
            title: 'Feedback App',
            description:
                'A responsive feedback management tool that enables users to submit, edit, and upvote product suggestions',
            features: [
                {
                    title: 'Full CRUD Feedback Flow',
                    description:
                        'Users can create, read, update, and delete product feedback posts with server-side validation.',
                },
                {
                    title: 'Filtering & Sorting',
                    description:
                        'Dynamic sorting (by upvotes/comments) and category-based filtering of feedback items.',
                },
                {
                    title: 'Nested Comments & Replies',
                    description:
                        'Threaded comment system allowing users to reply to feedback and engage in discussions.',
                },
                {
                    title: 'Upvote System with State Persistence',
                    description:
                        'Interactive upvoting tracked and saved in browser storage to maintain user state.',
                },
            ],
            image: '/assets/feedbackapp.png',
            video: '/videos/feedbackapp.mp4',
            hasGithub: true,
            githubUrl: 'https://github.com/ellacmd/feedbackApp',
            liveUrl: 'https://feedback-app-e.netlify.app/',
            techStack: ['Angular', 'Angular Material'],
        },
        {
            title: 'Portfolio Website',
            description:
                'A responsive, interactive portfolio designed to reflect my personal brand and highlight key frontend expertise.',
            features: [
                {
                    title: 'Responsive Design',
                    description:
                        'Fully responsive layout optimized for mobile, tablet, and desktop devices using Tailwind CSS.',
                },
                {
                    title: 'Interactive Project Showcase',
                    description:
                        'Each project includes videos, tech stack, and key features, presented with engaging hover and motion effects.',
                },
            ],
            image: '/assets/portfolio.png',
            video: '/videos/portfolio.mp4',
            hasGithub: true,
            githubUrl: 'https://github.com/ellacmd/emmanuella-v1',
            liveUrl: 'https://www.emmanuella.dev/',
            techStack: ['NextJS', 'Framer Motion', 'Tailwind CSS', 'Spline'],
        },
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionIndex = useTransform(
        scrollYProgress,
        [0, 1],
        [0, sections.length - 1]
    );

    useEffect(() => {
        const unsubscribe = sectionIndex.on('change', (latest) => {
            const index = Math.round(latest);
            setCurrentIndex(index);
        });
        return () => unsubscribe();
    }, [sectionIndex]);

    return (
        <section
            id='work'
            ref={containerRef}
            className='bg-black text-white py-20 relative '>
            <h3 className='text-3xl md:text-5xl font-extrabold text-center text-white mb-16   '>
                <span className='bg-gradient-to-r from-[#ff66c4] to-pink-400 bg-clip-text text-transparent'>
                    My
                </span>{' '}
                Work
            </h3>
            <div className='hidden lg:flex px-16 gap-8'>
                <div className='sticky top-40 w-1/2 h-screen'>
                    <div className='flex justify-between'>
                        {' '}
                        <h3 className='text-3xl font-bold mb-4'>
                            {sections[currentIndex].title}
                        </h3>
                        <span className='flex gap-4 items-center'>
                            {sections[currentIndex].hasGithub && (
                                <a
                                    href={sections[currentIndex].githubUrl}
                                    target='_blank'
                                    className=' text-lg hover:text-[#ff66c4]'>
                                    <FaGithub />
                                </a>
                            )}
                            <a
                                className='hover:text-[#ff66c4]'
                                href={sections[currentIndex].liveUrl}
                                target='_blank'>
                                {' '}
                                <FaExternalLinkAlt />
                            </a>
                        </span>
                    </div>
                    <p className='mb-4'>{sections[currentIndex].description}</p>
                    <div className='flex flex-wrap gap-2 mb-6'>
                        {sections[currentIndex].techStack.map((tech, i) => (
                            <span
                                key={i}
                                className='text-xs text-[#ff66c4] px-3 py-1 rounded-md border border-[#ff66c4] transition-all'>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className='mb-4'>Features:</p>{' '}
                    <ul className='list-none pl-5'>
                        {sections[currentIndex].features.map((feature, i) => (
                            <div key={i} className='flex gap-4 items-start '>
                                <div>
                                    <FaStarOfLife className='text-[#ff66c4]  animate-pulse   ' />
                                </div>

                                <li className='mb-4 text-sm'>
                                    {' '}
                                    <p className='inline'>{feature.title}: </p>
                                    <p className='inline'>
                                        {feature.description}
                                    </p>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className='w-1/2'>
                    <div className='flex flex-col justify-center mb-64 mt-[-120px]'>
                        {sections.map((section, i) => (
                            <div
                                key={i}
                                className='rounded-lg h-[600px] flex mb-16 items-center '>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload='none'
                                    className='rounded-lg  shadow-lg   '
                                    poster={section.image}>
                                    <source
                                        src={section.video}
                                        type='video/mp4'
                                    />
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:hidden px-4 space-y-12 '>
                {sections.map((section, i) => (
                    <div key={i}>
                        <h3 className='text-2xl font-bold mb-2'>
                            {section.title}
                        </h3>
                        <p className='mb-2 text-zinc-300'>
                            {section.description}
                        </p>
                        <div className='flex flex-wrap gap-2 mb-6'>
                            {section.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className='text-xs text-[#ff66c4] px-3 py-1 rounded-md border border-[#ff66c4] transition-all'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className='mb-4'>Features:</p>{' '}
                        <ul className='list-none pl-2'>
                            {section.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className='flex gap-4 items-start '>
                                    <div>
                                        <FaStarOfLife className='text-[#ff66c4]  animate-pulse   ' />
                                    </div>

                                    <li className='mb-4 text-sm'>
                                        {' '}
                                        <p className='inline'>
                                            {feature.title}:{' '}
                                        </p>
                                        <p className='inline'>
                                            {feature.description}
                                        </p>
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload='none'
                            className='rounded-lg object-cover shadow-lg w-full h-auto'
                            poster={section.image}>
                            <source src={section.video} type='video/mp4' />
                        </video>
                    </div>
                ))}
            </div>
        </section>
    );
}
