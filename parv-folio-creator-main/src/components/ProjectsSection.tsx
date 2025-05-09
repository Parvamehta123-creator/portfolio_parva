
import React, { useEffect, useRef } from "react";
import { GithubIcon, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SkillPort – MERN Stack Skill Sharing Platform",
    description: "A full-stack platform built using MongoDB, Express, React, and Node.js with role-based access, responsive UI using Material UI, and secure user authentication.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Material UI"],
    github: "https://github.com/Parvamehta123-creator/webdesign",
    image: "/lovable-uploads/4c57a0ac-b9de-4cc5-816f-22828fbbb63a.png",
  },
  {
    id: 2,
    title: "Drug Development Lifecycle Management System",
    description: "A centralized Java Swing platform streamlining communication and task management across drug research stages. Integrated real-time tracking, role-based modules, and compliance reporting.",
    techStack: ["Java", "Swing", "JavaFX"],
    github: "https://github.com/Parvamehta123-creator/aedgroupproject.git",
    image: "/lovable-uploads/d6f8e4d9-547b-490e-be18-7e5946349d1f.png",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section"
    >
      <h2 className="section-title opacity-0 animate-on-scroll">Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="card overflow-hidden opacity-0 animate-on-scroll"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <GithubIcon className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
