import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'sunset' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

/**
 * MagneticButton
 * 
 * Inspired by modern motion interactions (reactbits.dev / modern agency sites).
 * Calculates cursor offset on mouse hover to gently translate the button towards
 * the mouse pointer, springing back smoothly on leave.
 * Styled with WEST WARD WORKS California palette.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  id,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Magnetic pull factor (subtle 0.25 offset)
    const deltaX = (clientX - centerX) * 0.25;
    const deltaY = (clientY - centerY) * 0.25;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base styles per variant utilizing the California palette with sleek dark compatibility
  const variantStyles = {
    primary: 'bg-[#2B3A8F] hover:bg-[#3D5AFE] text-white shadow-md shadow-[#2B3A8F]/30 border border-[#3D5AFE]/30',
    sunset: 'bg-gradient-to-r from-[#FF6B6B] to-[#FFB86B] text-white hover:brightness-110 shadow-lg shadow-[#FF6B6B]/25 border border-transparent font-bold',
    secondary: 'bg-slate-900/90 text-white hover:bg-slate-800 border border-white/10 shadow-sm hover:border-[#3D5AFE]/40 backdrop-blur-md',
    outline: 'bg-transparent text-white border-2 border-[#3D5AFE]/60 hover:bg-[#3D5AFE]/10 hover:border-[#3D5AFE]',
    ghost: 'bg-transparent text-slate-300 hover:bg-white/5 hover:text-white border border-transparent',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-full',
    md: 'px-6 py-3 text-sm font-semibold rounded-full',
    lg: 'px-8 py-4 text-base font-bold rounded-full',
  };

  return (
    <motion.button
      ref={buttonRef}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.5 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center gap-2 transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
