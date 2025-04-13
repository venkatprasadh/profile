import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  // Check if user has a theme preference stored or prefers dark mode
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // If no saved preference, default to dark
    return 'dark';
  };

  const [isDark, setIsDark] = useState(getInitialTheme() === 'dark');

  // Apply theme class to body when component mounts or theme changes
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };  return (
    <motion.button 
      className="theme-toggle" 
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className={`toggle-track ${isDark ? 'dark' : 'light'}`}>        <motion.div 
          className="toggle-thumb"
          animate={{ 
            x: isDark ? 22 : 0,
            backgroundColor: isDark ? "#56c876" : "#51b08f"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30
          }}
        >
          {isDark ? (
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="#121212" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="toggle-icon-svg"
            >
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </motion.svg>
          ) : (
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="#fff" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="toggle-icon-svg"
            >
              <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm7-7a1 1 0 0 1 1 1 1 1 0 1 1-2 0 1 1 0 0 1 1-1zM5 12a1 1 0 0 1-2 0 1 1 0 1 1 2 0zm.64-6.24a1 1 0 0 1 1.4.04l1.4 1.4a1 1 0 1 1-1.44 1.4l-1.4-1.4a1 1 0 0 1 .04-1.44zm11.32 11.32a1 1 0 0 1 1.4.04l1.4 1.4a1 1 0 1 1-1.44 1.4l-1.4-1.4a1 1 0 0 1 .04-1.44zM5.64 17.08a1 1 0 0 1 .04 1.4l-1.4 1.4a1 1 0 1 1-1.44-1.4l1.4-1.4a1 1 0 0 1 1.4-.04zm11.32-11.32a1 1 0 0 1 .04 1.4l-1.4 1.4a1 1 0 1 1-1.44-1.4l1.4-1.4a1 1 0 0 1 1.4-.04z" />
            </motion.svg>
          )}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
