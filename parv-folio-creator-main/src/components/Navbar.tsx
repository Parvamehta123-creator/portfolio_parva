
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update the scrolled state based on scroll position
      setScrolled(window.scrollY > 20);
      
      // Find the current active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Parva Mehta
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? "active-nav-link" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button - would implement dropdown/hamburger here */}
            <button className="text-gray-700 dark:text-gray-300">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
