import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

// Simplified TextReveal using framer-motion's built-in whileInView functionality
const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  width = "fit-content",
  delay = 0
}) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.4,
          delay: delay,
          ease: [0.22, 1, 0.36, 1] // Matching AnimatedSection easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
