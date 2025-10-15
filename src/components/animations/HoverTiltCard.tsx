"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverTiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAngle?: number;
}

export default function HoverTiltCard({ 
  children, 
  className = "",
  tiltAngle = 5
}: HoverTiltCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        rotateX: tiltAngle,
        rotateY: tiltAngle,
        scale: 1.05,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}