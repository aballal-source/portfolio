"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      id="services"
      className="section-spacing container-padding relative overflow-hidden"
    >
      {/* Tech background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            className="inline-block px-5 py-2.5 rounded-full glass-effect text-cyan-400 text-sm font-medium mb-6 tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            What I Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored for small businesses.
            From concept to launch, I help bring your digital vision to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full flex flex-col group relative">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
                </div>
                <CardHeader className="relative pb-4">
                  <motion.div 
                    className="text-5xl mb-5 relative inline-block"
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {service.icon}
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  </motion.div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-stone-400 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 text-stone-400 hover:text-cyan-400 transition-colors duration-200 group text-sm font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ready to get started?</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
