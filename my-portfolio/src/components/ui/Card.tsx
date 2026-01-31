"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
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
      ...cardProps 
    } = props;
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl glass-effect p-6 relative overflow-hidden tech-border",
          hover && "transition-all duration-300 hover:border-cyan-500/40 group",
          className
        )}
        whileHover={hover ? { y: -6, scale: 1.01 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        {...cardProps}
      >
        {hover && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-green-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/5 group-hover:to-green-500/5 transition-all duration-500 pointer-events-none" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            </div>
          </>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-bold leading-none tracking-tight bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-stone-400", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-4", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
