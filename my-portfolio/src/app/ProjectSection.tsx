// ProjectSection.tsx
import React from 'react';

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
          <div key={index} className="bg-white rounded-md p-4 shadow-md">
            <img src={project.imgPath} alt={project.title} className="w-full h-40 object-cover mb-4" />

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex justify-between">
              {project.demoLink ? (
                <a href={project.demoLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              ) : (
                <span></span>
              )}
              
              {project.sourceCodeLink ? (
                <a href={project.sourceCodeLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
              ) : (
                <span className="text-gray-400">Private Repository due to the project being a university assignment. No Source Code Available</span>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;