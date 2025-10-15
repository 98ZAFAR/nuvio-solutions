"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function AnimatedButton({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  className = "",
  type = 'button',
  disabled = false
}: AnimatedButtonProps) {
  const baseClasses = "inline-block px-8 py-4 rounded-lg font-medium shadow-lg transition-all duration-200";
  const variantClasses = {
    primary: "bg-amber-200 text-slate-800 hover:bg-amber-300",
    secondary: "border-2 border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-slate-800"
  };

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`${baseClasses} ${variantClasses[variant]} ${className} cursor-pointer`}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        boxShadow: disabled ? "none" : "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}