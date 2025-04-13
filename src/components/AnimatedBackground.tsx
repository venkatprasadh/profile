import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AnimatedBackground.css';

export const AnimatedBackground = () => {
  // Create predetermined positions for better distribution
  const generatePositions = () => {
    // Create a grid-like distribution to avoid clustering
    const positions = [];
    // Divide the space into quadrants
    for (let xQuad = 0; xQuad < 3; xQuad++) {
      for (let yQuad = 0; yQuad < 3; yQuad++) {
        // Add random position within each quadrant
        const xBase = (xQuad * 33) - 10; // -10% to 90% coverage
        const yBase = (yQuad * 33) - 10;
        
        positions.push({
          x: xBase + Math.random() * 25, // Random within quadrant
          y: yBase + Math.random() * 25,
          scale: 0.3 + Math.random() * 0.4, // More controlled size
          opacity: 0.05 + Math.random() * 0.08 // Lower max opacity
        });
      }
    }
    return positions;
  };

  const positions = generatePositions();

  return (
    <div className="animated-background">
      <div className="gradient-bg">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="gradient-circle"
            initial={{ 
              x: `${pos.x}%`, 
              y: `${pos.y}%`,
              scale: pos.scale,
              opacity: pos.opacity
            }}
            animate={{ 
              x: [
                `${pos.x}%`, 
                `${pos.x + (Math.random() * 10 - 5)}%`,
                `${pos.x}%`
              ],
              y: [
                `${pos.y}%`,
                `${pos.y + (Math.random() * 10 - 5)}%`,
                `${pos.y}%`
              ],
              scale: [
                pos.scale,
                pos.scale * (1 + Math.random() * 0.2),
                pos.scale
              ],
            }}
            transition={{ 
              duration: 15 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
