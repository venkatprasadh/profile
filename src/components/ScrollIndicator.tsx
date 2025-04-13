import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how much we've scrolled
      const scrollPx = window.pageYOffset;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      
      setScrollProgress(scrolled);
      
      // Hide when scrolling down, show when scrolling up
      if (scrollPx > lastScrollTop && scrollPx > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollTop(scrollPx);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);
  
  return (
    <motion.div 
      className="scroll-indicator"
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="scroll-track">
        <motion.div 
          className="scroll-thumb"
          style={{ scaleY: scrollProgress }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
