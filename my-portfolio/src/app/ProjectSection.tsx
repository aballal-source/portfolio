// ProjectSection.tsx
import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  imgPath: string;
  description: string;
  demoLink?: string;
  sourceCodeLink?: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-stone-200 rounded-md p-4 shadow-md relative">
            <h2 className="text-green-600 text-lg font-semibold mb-2">{project.title}</h2>
            <Image src={project.imgPath} alt={project.title} width={500} height={300} priority/>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex justify-between">
              {project.demoLink ? (
                <a href={project.demoLink} className="absolute bottom-2 right-2 left-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              ) : (
                <span className="absolute bottom-2 text-red-400">Local</span>
              )}
              
              {project.sourceCodeLink ? (
                <a href={project.sourceCodeLink} className="absolute bottom-2 right-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
              ) : (
                <span className="text-xs text-gray-400">Private Repository due to the project being a university assignment. No Source Code Available</span>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;