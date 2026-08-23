import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants } from '../../hooks/useScrollReveal';

/**
 * Standardized section header with animated title and gradient accent line.
 */
const SectionHeader = ({ title, highlight, description, align = 'center' }) => {
    const { ref, isInView } = useScrollReveal();

    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

    return (
        <motion.header
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={revealVariants.fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`flex flex-col gap-4 ${alignClass}`}
        >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 dark:text-white">
                {title}{' '}
                <span className="gradient-text-primary">{highlight}</span>
            </h2>
            <div className="section-divider" />
            {description && (
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
        </motion.header>
    );
};

export default SectionHeader;
