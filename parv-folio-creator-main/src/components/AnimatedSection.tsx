
import React, { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({
  children,
  id,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`opacity-0 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
