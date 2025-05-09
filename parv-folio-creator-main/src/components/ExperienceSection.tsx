
import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Cybersecurity Analyst",
    company: "HCL Technologies Pvt Ltd",
    location: "Noida, IN",
    period: "Sept 2021 - Jun 2024",
    achievements: [
      "Configured and executed DAST (Dynamic Application Security Testing) and SAST (Static Application Security Testing) scans using on-premise tools like WebInspect and Fortify, leading to a 30% reduction in security vulnerabilities within the organization.",
      "Improved application security by conducting false positive analyses on security scan reports across various programming languages (C, C#, Java), reducing remediation time by 20%.",
      "Conducted gap assessments and delivered tailored security training to the client, Applied Materials Inc., Santa Clara, California, resulting in an increase of 25% in security awareness and compliance across development teams."
    ]
  },
  {
    id: 2,
    role: "Production Engineer Intern",
    company: "Hitachi Hi-Rel Power Electronics",
    location: "Sanand, IN",
    period: "Jun 2019 - Jul 2019",
    achievements: [
      "Developed a detailed report on the time management of production activities for various power electronic devices, including inverters and drives, leading to a 15% improvement in production efficiency by identifying bottlenecks and optimizing workflows.",
      "Gained in-depth knowledge of components used in the manufacturing of power electronics devices, contributing to 10% faster procurement processes and improved alignment between the production and supply chain teams, ultimately enhancing overall manufacturing quality."
    ]
  },
  {
    id: 3,
    role: "Virtual Intern",
    company: "Typhoon HIL Quartz",
    location: "Remote",
    period: "Jun 2020 - Jul 2020",
    achievements: [
      "Virtual internship focused on developing and analyzing models in power electronics and power systems."
    ]
  }
];

const ExperienceSection = () => {
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
      id="experience" 
      ref={sectionRef}
      className="section"
    >
      <h2 className="section-title opacity-0 animate-on-scroll">Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blue-200 dark:border-blue-800 pl-8 py-4 ml-4">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="mb-10 opacity-0 animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[10px] mt-1.5 border-4 border-white dark:border-gray-900"></div>
              
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{exp.company}, {exp.location}</span>
                </div>
                
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
