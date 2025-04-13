import React from 'react';
import { motion } from 'framer-motion';
import '../styles/RevealCard.css';

interface RevealCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: {
    url: string;
    text: string;
  };
}

const RevealCard: React.FC<RevealCardProps> = ({ title, description, icon, link }) => {
  return (
    <motion.div 
      className="reveal-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0px 15px 30px rgba(81, 176, 143, 0.2)"
      }}
    >
      {icon && <div className="reveal-card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="reveal-card-link"
        >
          <span>{link.text}</span>
          <motion.span 
            className="link-arrow"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          >→</motion.span>
        </a>
      )}
    </motion.div>
  );
};

export default RevealCard;
