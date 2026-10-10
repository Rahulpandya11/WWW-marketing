import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees, default 10
  glareEffect?: boolean;
  id?: string;
  onClick?: () => void;
}

/**
 * TiltCard
 * 
 * Inspired by reactbits.dev Tilted Card interaction.
 * Computes cursor offset relative to card center and applies smooth
 * 3D perspective rotation (rotateX, rotateY) using spring physics.
 * Also renders a subtle dynamic glare highlight matching the sunset accent palette.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
  glareEffect = true,
  id,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for normalized cursor coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for buttery-smooth damping
  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Glare position percentage
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1100,
        rotateX,
        rotateY,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Subtle interactive glare reflection */}
      {glareEffect && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden opacity-30 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 184, 107, 0.35) 0%, rgba(61, 90, 254, 0.15) 45%, transparent 80%)`,
          }}
        />
      )}
    </motion.div>
  );
};
