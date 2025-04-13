import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ScrollIndicator.css';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Define sections to track
  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" }
  ];
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollPx = window.scrollY;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = Math.min(Math.max(scrollPx / winHeightPx, 0), 1);
      
      setScrollProgress(scrolled);
      
      // Always show indicator when user is scrolling
      setIsVisible(true);
      
      // Find active section with improved algorithm
      const findActiveSection = () => {
        // Special case for Contact section (last section)
        // If we're near the bottom of the page, prioritize the Contact section
        if (scrollPx + window.innerHeight > document.documentElement.scrollHeight - 100) {
          return "contact";
        }
        
        // For other sections, check if they're in viewport
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If element is in viewport (or slightly above)
            if (rect.top <= 150 && rect.bottom > 0) {
              return section.id;
            }
          }
        }
        return "home"; // Default to home if no section is found
      };
      
      setActiveSection(findActiveSection());
      
      // Hide indicator after 1.5 seconds of inactivity
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);
  
  // Scroll to section when dot is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => {
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            setIsVisible(true);
          }}
        >
          <div className="scroll-track">
            <motion.div 
              className="scroll-progress-line"
              style={{ scaleY: scrollProgress }}
            />
            
            {sections.map((section, index) => {
              // Calculate position based on section index
              const position = index / (sections.length - 1);
              const isActive = activeSection === section.id;
              
              return (
                <motion.div
                  key={section.id}
                  className={`scroll-dot ${isActive ? 'active' : ''}`}
                  style={{ top: `${position * 100}%` }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => scrollToSection(section.id)}
                >
                  <div className="dot-tooltip">{section.name}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
