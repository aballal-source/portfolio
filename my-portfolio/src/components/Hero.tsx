"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col items-center justify-center container-padding section-spacing relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Advanced tech background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[160px] animate-glow" />
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Scan line effect */}
        <div className="scan-line absolute inset-0 pointer-events-none" />
        
        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: "screen" }}>
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="50%" stopColor="rgba(74, 222, 128, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
            </linearGradient>
          </defs>
          <path
            d="M 0,200 Q 200,100 400,200 T 800,200"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="10,5"
            style={{ animation: "circuit 8s linear infinite" }}
          />
          <path
            d="M 0,400 Q 200,300 400,400 T 800,400"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="10,5"
            style={{ animation: "circuit 10s linear infinite reverse" }}
          />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.span
            className="inline-block px-5 py-2.5 rounded-full glass-effect text-cyan-400 text-sm font-medium tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            👋 Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-[1.1] tracking-tight relative"
          variants={itemVariants}
        >
          <span className="block text-white/95 mb-3 font-light">Hello, I&apos;m</span>
          <motion.span
            className="inline-block gradient-text hologram-effect relative"
            variants={nameVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Ahmed Ballal
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" 
                  style={{ 
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s infinite"
                  }} 
            />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 leading-relaxed max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <span className="text-white/90">Frontend-leaning </span>
          <span className="text-cyan-400 font-semibold">Web Developer</span>
          <span className="text-white/90"> specializing in crafting </span>
          <span className="text-green-400 font-semibold">exceptional digital experiences</span>
          <span className="text-white/90"> for </span>
          <span className="text-cyan-400 font-semibold">small businesses</span>
        </motion.p>
        
        <motion.p
          className="text-base md:text-lg text-stone-400 mb-16 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Transforming your business vision into high-performance, modern web solutions that drive growth and engage customers.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-20"
          variants={itemVariants}
        >
          {[
            "HTML, CSS (Tailwind CSS)",
            "JavaScript (React, Node.js, Next.js)",
            "TypeScript",
            "Java",
            "C++",
            "Python",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              className="px-4 py-2 glass-effect rounded-full text-cyan-200/90 text-sm font-medium hover:text-white transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                delay: 0.5 + index * 0.08,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full overflow-hidden text-base tech-border pulse-glow"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.svg
              className="w-4 h-4 relative z-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M19 9l-7 7-7-7" />
            </motion.svg>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
          </motion.a>
          
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 glass-effect text-cyan-400 font-semibold rounded-full text-base tech-border relative overflow-hidden group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
