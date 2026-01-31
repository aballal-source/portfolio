"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";
import { projects } from "@/lib/constants";
import Button from "./ui/Button";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      className="section-spacing container-padding relative overflow-hidden"
    >
      {/* Tech background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
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
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in building modern web applications for businesses. Each project demonstrates different aspects of frontend development and problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col group relative">
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pulse-glow" />
                <CardHeader>
                  <div className="relative w-full h-52 mb-5 rounded-lg overflow-hidden bg-gradient-to-br from-stone-800/50 to-stone-900/50 group/image tech-border">
                    <Image
                      src={project.imgPath}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(6,182,212,0.1)_50%,transparent_70%)] opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000" />
                    {project.featured && (
                      <motion.div 
                        className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg pulse-glow"
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                      >
                        ⭐ Featured
                      </motion.div>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-cyan-400 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-stone-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2.5 py-1 glass-effect text-cyan-300/90 text-xs font-medium rounded-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 flex-wrap">
                  {project.demoLink ? (
                    <Button
                      as="a"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                    >
                      Demo
                    </Button>
                  ) : (
                    <span className="px-3 py-1.5 text-sm text-red-400 border border-red-400/30 rounded-lg">
                      Local
                    </span>
                  )}
                  {project.sourceCodeLink && (
                    <Button
                      as="a"
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                    >
                      Source Code
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-16 text-center text-stone-500 text-sm max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          Note: Projects labeled &apos;Local&apos; are production-ready school
          projects that have not been made public. You can download the source
          code via the GitHub link to run a project locally.
        </motion.p>

        <motion.div
          className="mt-16 text-center"
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
            <span>Get in touch!</span>
            <motion.svg
              className="w-4 h-4"
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
