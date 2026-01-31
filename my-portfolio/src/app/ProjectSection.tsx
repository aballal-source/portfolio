"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface Project {
  title: string;
  imgPath: string;
  description: string;
  demoLink?: string;
  sourceCodeLink?: string;
  category?: string;
  videoPath?: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

const TILT_MAX = 8;
const TILT_PER_PX = 0.02;

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * TILT_PER_PX;
      const deltaY = (e.clientY - centerY) * TILT_PER_PX;
      setTilt({
        x: Math.max(-TILT_MAX, Math.min(TILT_MAX, deltaY)),
        y: Math.max(-TILT_MAX, Math.min(TILT_MAX, -deltaX)),
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section id="projects" className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Project Library</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            onMouseMove={(e) => {
              setHoveredIndex(index);
              handleMouseMove(e, index);
            }}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelectedProject(project)}
            className="relative rounded-xl overflow-hidden cursor-pointer select-none group"
            style={{
              transform:
                hoveredIndex === index
                  ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
              transition: hoveredIndex === index ? "transform 0.05s ease-out" : "transform 0.3s ease-out",
            }}
          >
            {/* Preview */}
            <div className="aspect-video w-full bg-stone-900 relative overflow-hidden">
              <Image
                src={project.imgPath}
                alt={project.title}
                width={600}
                height={340}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-105" : "scale-100"
                }`}
              />
            </div>

            {/* Overlay: title + category — fades on hover */}
            <div
              className={`absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              <h3 className="text-lg font-semibold text-green-400">
                {project.title}
              </h3>
              {project.category && (
                <span className="text-xs text-stone-400 mt-0.5">
                  {project.category}
                </span>
              )}
            </div>

            {/* Hover state: title + category visible at bottom */}
            <div
              className={`absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-lg font-semibold text-green-400">
                {project.title}
              </h3>
              {project.category && (
                <span className="text-xs text-stone-400 mt-0.5">
                  {project.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-2 -right-2 z-10 w-10 h-10 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 flex items-center justify-center text-xl"
              aria-label="Close"
            >
              ×
            </button>

            {/* Large visual */}
            <div className="aspect-video w-full bg-stone-900 rounded-t-xl overflow-hidden mb-6">
              <Image
                src={selectedProject.imgPath}
                alt={selectedProject.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-green-400 mb-2 cursor-default">
              {selectedProject.title}
            </h2>

            {/* One short paragraph */}
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              {selectedProject.description}
            </p>

            {/* Links */}
            <div className="space-y-2">
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-3">
                Links
              </p>
              <div className="flex flex-wrap gap-4">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.sourceCodeLink && (
                  <a
                    href={selectedProject.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
