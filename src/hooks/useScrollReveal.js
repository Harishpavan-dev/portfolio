import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for scroll-triggered reveal animations using Framer Motion.
 * Returns a ref and boolean for whether the element is in view.
 */
export const useScrollReveal = (options = {}) => {
    const { once = true, margin = '-80px' } = options;
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin });

    return { ref, isInView };
};

/**
 * Common animation variants for Framer Motion.
 */
export const revealVariants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

/**
 * Stagger container variant for children animations.
 */
export const staggerContainer = (staggerDelay = 0.1) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: staggerDelay,
        },
    },
});

export default useScrollReveal;
