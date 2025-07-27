import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import ScrollProgressBar from '@/app/components/scroll-progress-bar';
import ClientAppWrapper from './components/client-wrapper';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Emmanuella Batubo - Frontend Developer',
    description:
        'The personal portfolio of Emmanuella Batubo, a frontend developer specializing in React, Next.js, Angular,and modern UI/UX design. Built with Next.js for performance, SEO optimization, and a seamless user experience.',
    keywords: [
        'Emmanuella Batubo',
        'Emmanuella Trust Enomah',
        'Frontend Developer',
        'React Developer',
        'Next.js Portfolio',
        'UI Developer',
        'JavaScript Developer',
        'Web Developer Nigeria',
        'Frontend Engineer',
        'Modern Web Design',
        'Angular Developer',
        'UI/UX Designer',
        'Web Developer',
        'Frontend Developer Nigeria',
        'Frontend Developer Lagos',
        'Frontend Developer Abuja',
        'Frontend Developer Port Harcourt',
    ],
    authors: [{ name: 'Emmanuella Batubo' }],
    openGraph: {
        title: 'Emmanuella Batubo – Frontend Developer Portfolio',
        description:
            'Explore the work of Emmanuella Batubo, a frontend developer crafting elegant, responsive, and performant web experiences using Next.js, Angular, React,and modern frontend tech.',
        url: 'https://emmanuella.dev',
        siteName: 'Emmanuella Batubo Portfolio',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ClientAppWrapper>
                    <ScrollProgressBar />
                </ClientAppWrapper>
                {children}
            </body>
        </html>
    );
}
