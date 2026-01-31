"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case "expert":
        return "95%";
      case "advanced":
        return "80%";
      case "intermediate":
        return "65%";
      default:
        return "50%";
    }
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "expert":
        return "bg-gradient-to-r from-cyan-500 to-green-500";
      case "advanced":
        return "bg-gradient-to-r from-cyan-500 to-cyan-400";
      case "intermediate":
        return "bg-gradient-to-r from-green-500 to-green-400";
      default:
        return "bg-stone-600";
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryLabels: Record<string, string> = {
    frontend: "Frontend Technologies",
    backend: "Backend Technologies",
    language: "Programming Languages",
    tool: "Tools & Frameworks",
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="section-spacing container-padding relative overflow-hidden"
    >
      {/* Tech background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/6 rounded-full blur-[140px] animate-glow" />
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ mixBlendMode: "screen" }}>
          <defs>
            <pattern id="techGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
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
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, high-performance web applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">
                    {categoryLabels[category] || category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-stone-200 font-semibold group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 capitalize">
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="w-full bg-stone-800/50 rounded-full h-3 overflow-hidden shadow-inner relative">
                        <motion.div
                          className={`h-full ${getProficiencyColor(skill.proficiency)} rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={
                            inView
                              ? { width: getProficiencyWidth(skill.proficiency) }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: 0.2 + index * 0.1,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              repeatDelay: 2,
                              ease: "easeInOut",
                            }}
                          />
                          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 blur-sm" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-end pr-1">
                          <span className="text-[8px] text-cyan-400/60 font-mono">
                            {getProficiencyWidth(skill.proficiency)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
