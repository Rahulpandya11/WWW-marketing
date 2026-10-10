import React from 'react';
import { motion, Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  by?: 'words' | 'letters';
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

/**
 * TextReveal
 * 
 * Inspired by reactbits.dev split-text / staggered typography reveals.
 * Splits text into individual words or characters and animates them
 * into view with spring-damped opacity and translateY physics.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  by = 'words',
  delay = 0,
  duration = 0.5,
  as: Component = 'span',
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: by === 'words' ? 0.08 : 0.025,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 22,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (by === 'letters') {
    const letters = Array.from(text);
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`inline-block ${className}`}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  const words = text.split(' ');

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span variants={itemVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
