import { useEffect, useRef } from 'react';

/**
 * Animated dot grid background with subtle floating gradient orbs.
 * CSS-only animated background, no canvas for performance.
 */
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
            {/* Dot grid pattern */}
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />

            {/* Floating gradient orbs */}
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-float-slow" />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-[120px] animate-float-medium" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-pink/3 blur-[150px] animate-float-slow" style={{ animationDelay: '4s' }} />
        </div>
    );
};

export default AnimatedBackground;
