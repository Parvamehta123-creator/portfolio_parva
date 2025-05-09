
import { Download, ArrowRight } from "lucide-react"; // or your icon library

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-end opacity-0 animate-fade-in">
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl">
            <img
              src="/lovable-uploads/8f7c5bfb-830e-48ec-a197-fec27a6465c6.png"
              alt="Parva Mehta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="opacity-0 animate-fade-in-right delay-200">
            <span className="text-blue-500 font-semibold mb-2 inline-block">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Hi, I'm Parva Mehta 👋
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
              Cybersecurity Analyst | Full Stack Developer | MSIS @ Northeastern University
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-8 opacity-0 animate-fade-in-right delay-300">
            Passionate about securing applications, building scalable systems, and solving real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in-right delay-400">
            <a
              href="/parva mehta resume final.pdf"
              download
              className="btn-primary w-full sm:w-auto flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5" />
              <span>Download Resume</span>
            </a>

            <a href="#projects" className="btn-secondary w-full sm:w-auto flex items-center justify-center">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

