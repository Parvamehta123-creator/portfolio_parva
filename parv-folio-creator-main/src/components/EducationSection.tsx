
import React, { useEffect, useRef } from "react";
import { School, Calendar } from "lucide-react";

const educations = [
  {
    id: 1,
    degree: "Master of Science in Information Systems",
    institution: "Northeastern University",
    location: "Boston, MA",
    period: "Aug 2024 - Jun 2026",
    description: "Currently pursuing a Master's degree with focus on Cybersecurity and Application Development."
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Electrical Engineering",
    institution: "Nirma University",
    location: "Ahmedabad, IN",
    period: "2017 - 2021",
    description: "Graduated with a focus on Power Electronics and Control Systems."
  }
];

const EducationSection = () => {
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
      id="education" 
      ref={sectionRef}
      className="section bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="section-title opacity-0 animate-on-scroll">Education</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {educations.map((edu, index) => (
          <div 
            key={edu.id} 
            className="card p-6 opacity-0 animate-on-scroll"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <School className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
              </div>
            </div>
            
            <div className="ml-16">
              <h4 className="font-semibold mb-2">{edu.degree}</h4>
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">{edu.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
