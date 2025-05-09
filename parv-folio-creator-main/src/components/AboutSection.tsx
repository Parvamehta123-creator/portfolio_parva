
import React, { useEffect, useRef } from "react";
import { Code, Database, GithubIcon } from "lucide-react";

const AboutSection = () => {
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
      id="about" 
      ref={sectionRef}
      className="section bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="section-title opacity-0 animate-on-scroll">About Me</h2>
      
      <div className="max-w-3xl mx-auto opacity-0 animate-on-scroll">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          A versatile professional with a strong foundation in cybersecurity, application development, and team leadership. Currently pursuing a Master's in Information Systems at Northeastern University. Previously worked as a Senior Cybersecurity Analyst at HCL Technologies, where I delivered secure code analysis, vulnerability assessments, and developer trainings to Fortune 500 clients. Passionate about solving real-world problems through scalable and secure technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="card p-6 opacity-0 animate-on-scroll">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="ml-3 font-semibold text-lg">Development</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Full-stack development with modern frameworks and languages.
            </p>
          </div>
          
          <div className="card p-6 opacity-0 animate-on-scroll">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="ml-3 font-semibold text-lg">Cybersecurity</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Expertise in DAST/SAST, vulnerability assessments, and secure coding.
            </p>
          </div>
          
          <div className="card p-6 opacity-0 animate-on-scroll">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <GithubIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="ml-3 font-semibold text-lg">Open Source</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Contributing to projects that make a positive impact in tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
