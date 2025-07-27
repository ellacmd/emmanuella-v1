'use client';
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import AboutSection from '@/app/components/about';
import Project from '@/app/components/project';
import Footer from '@/app/components/footer';
import Contact from '@/app/components/contact';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AboutSection />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}
