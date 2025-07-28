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
    description: '',
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
            'Emmanuella Batubo is a frontend developer passionate about building fast, modern web experiences using React, Next.js, and Angular. This portfolio highlights her ability to ship scalable, SEO-friendly, and beautifully designed interfaces—ideal for fast-moving startups. Built with Next.js for speed, performance, and flexibility.',
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
