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
        const onReady = () => setLoaded(true);

        if (document.readyState !== 'loading') {
            onReady();
        } else {
            document.addEventListener('DOMContentLoaded', onReady);
            return () =>
                document.removeEventListener('DOMContentLoaded', onReady);
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = loaded ? '' : 'hidden';
    }, [loaded]);

    return <>{loaded ? children : <Preloader />}</>;
}
