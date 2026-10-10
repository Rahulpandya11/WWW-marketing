import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/**
 * AnimatedCounter
 * 
 * Smoothly animates a number from 0 to the target value when it enters
 * the viewport using the browser's native IntersectionObserver and requestAnimationFrame.
 * This ensures lightweight, 60fps performance without extra heavy dependencies.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();

            const updateNumber = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing: easeOutExpo for a snappy, satisfying counter feel
              const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentNum = easeOut * value;

              setDisplayValue(currentNum);

              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(updateNumber);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={elementRef} className={`tabular-nums font-bold tracking-tight ${className}`}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};
