
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, FileCode, Coffee, Hash, CircleDot, Braces, FileJson, Database, Server, Wrench, GitBranch, Terminal, LineChart, BarChart3, Bot, Cpu, GanttChart, Workflow } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skills = {
  Languages: ["Python", "Java", "C", "C#", "HTML", "CSS", "JavaScript"],
  Frameworks: ["React.js", "Node.js", "Express.js", "Spring Boot", "Django", "Bootstrap", "Codeigniter"],
  Tools: ["Fortify", "WebInspect", "Jenkins", "Jira", "MATLAB", "Advanced Excel", "IntelliJ", "Eclipse", "VS Code", "NetBeans", "SAS", "Confluence", "Slack", "Motor solve", "PSIM", "Codeblocks"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
};

const getSkillIcon = (skill: string) => {
  const iconProps = { size: 24, className: "mr-2" };
  
  switch (skill.toLowerCase()) {
    case "python": return <FileCode {...iconProps} />;
    case "java": return <Coffee {...iconProps} />;
    case "c": return <Hash {...iconProps} />;
    case "c#": return <Hash {...iconProps} />;
    case "html": return <Code {...iconProps} />;
    case "css": return <Braces {...iconProps} />;
    case "javascript": return <FileJson {...iconProps} />;
    case "react.js": return <CircleDot {...iconProps} />;
    case "bootstrap": return <Braces {...iconProps} />;
    case "express.js": return <Server {...iconProps} />;
    case "node.js": return <Server {...iconProps} />;
    case "django": return <FileCode {...iconProps} />;
    case "mongodb": return <Database {...iconProps} />;
    case "vs code": return <Terminal {...iconProps} />;
    case "jenkins": return <Workflow {...iconProps} />;
    case "jira": return <GanttChart {...iconProps} />;
    case "matlab": return <LineChart {...iconProps} />;
    case "mysql": return <Database {...iconProps} />;
    case "postgresql": return <Database {...iconProps} />;
    case "fortify": return <Wrench {...iconProps} />;
    case "webinspect": return <Bot {...iconProps} />;
    case "git": return <GitBranch {...iconProps} />;
    case "intellij": return <Terminal {...iconProps} />;
    case "eclipse": return <Terminal {...iconProps} />;
    case "netbeans": return <Terminal {...iconProps} />;
    case "sas": return <BarChart3 {...iconProps} />;
    case "confluence": return <Terminal {...iconProps} />;
    case "slack": return <Terminal {...iconProps} />;
    case "motor solve": return <Cpu {...iconProps} />;
    case "psim": return <Cpu {...iconProps} />;
    case "codeblocks": return <Code {...iconProps} />;
    case "spring boot": return <Server {...iconProps} />;
    case "codeigniter": return <Server {...iconProps} />;
    default: return null;
  }
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", ...Object.keys(skills)];
  
  const filteredSkills = activeCategory === "All"
    ? Object.values(skills).flat()
    : skills[activeCategory as keyof typeof skills] || [];
    
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <AnimatedSection>
        <h2 className="section-title">Skills</h2>
      </AnimatedSection>
      
      <AnimatedSection className="mb-8 flex justify-center" delay={100}>
        <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedSection>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <AnimatedSection 
            key={skill} 
            delay={index * 50}
            className="h-full"
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center text-center">
                  {getSkillIcon(skill)}
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {skill}
                  </span>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
