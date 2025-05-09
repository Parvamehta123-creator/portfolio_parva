
import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section"
    >
      <h2 className="section-title opacity-0 animate-on-scroll">Let's Connect</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="opacity-0 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Have a question, project idea, or job opportunity? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:mehta.parv@northeastern.edu" 
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span>mehta.parv@northeastern.edu</span>
            </a>
            
            <a 
              href="tel:224-607-9441" 
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span>224-607-9441</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/parva-mehta-91a286159/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span>linkedin.com/in/parva-mehta-91a286159</span>
            </a>
            
            <a 
              href="https://github.com/Parvamehta123-creator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span>github.com/Parvamehta123-creator</span>
            </a>
          </div>
        </div>
        
        <div className="opacity-0 animate-on-scroll delay-200">
          <form onSubmit={handleSubmit} className="card p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
