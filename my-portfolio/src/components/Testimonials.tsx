"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "./ui/Card";

const Testimonials: React.FC = () => {
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
      id="testimonials"
      className="section-spacing container-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
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
            Client Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-600 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what businesses say about working with me.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-stone-300 mb-6 flex-1 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="border-t border-stone-700 pt-4">
                    <p className="text-cyan-400 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-stone-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
