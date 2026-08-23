import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants } from '../../hooks/useScrollReveal';

/**
 * Scroll-reveal wrapper using Framer Motion.
 * Wraps children with configurable animation direction and delay.
 */
const ScrollReveal = ({
    children,
    direction = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}) => {
    const { ref, isInView } = useScrollReveal({ once });
    const variant = revealVariants[direction] || revealVariants.fadeUp;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variant}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
