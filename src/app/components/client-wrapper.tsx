'use client';
import { useEffect, useState } from 'react';
import Preloader from './preloader';

export default function ClientAppWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setLoaded(true);
            document.body.style.overflow = '';
        } else {
            const handleLoad = () => {
                setLoaded(true);
                document.body.style.overflow = ''; 

            window.addEventListener('load', handleLoad);
            document.body.style.overflow = 'hidden';

            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return <>{loaded ? children : <Preloader />}</>;
}
