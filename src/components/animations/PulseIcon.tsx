"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PulseIconProps {
  children: ReactNode;
  className?: string;
}

export default function PulseIcon({ children, className = "" }: PulseIconProps) {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}