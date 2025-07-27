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
        const onPageLoad = () => setLoaded(true);
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = loaded ? '' : 'hidden';
    }, [loaded]);

    return <>{loaded ? children : <Preloader />}</>;
}
