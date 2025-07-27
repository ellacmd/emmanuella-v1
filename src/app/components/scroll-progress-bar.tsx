'use client';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                originX: 0,
                backgroundColor: '#ff66c4',
                zIndex: 1000,
                borderRadius: 2,
                pointerEvents: 'none',
            }}
        />
    );
}
