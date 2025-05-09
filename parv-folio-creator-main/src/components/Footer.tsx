
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/Parvamehta123-creator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/parva-mehta-91a286159/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:mehta.parv@northeastern.edu" 
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Parva Mehta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
