"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", as = "button", href, target, rel, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-cyan-600 hover:to-green-600 focus:ring-cyan-500 shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60 relative overflow-hidden group",
      secondary: "bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600 focus:ring-green-500 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 relative overflow-hidden group",
      outline: "border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 focus:ring-cyan-500 backdrop-blur-sm relative overflow-hidden tech-border",
      ghost: "text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const buttonClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (as === "a" || href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={buttonClassName}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {(variant === "primary" || variant === "secondary") && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
          )}
          <span className="relative z-10">{children}</span>
        </motion.a>
      );
    }

    const { 
      onDrag, 
      onDragEnd, 
      onDragEnter, 
      onDragExit, 
      onDragLeave, 
      onDragOver, 
      onDragStart,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...buttonProps 
    } = props;
    
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClassName}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...buttonProps}
      >
        {(variant === "primary" || variant === "secondary") && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
