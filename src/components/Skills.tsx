import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Skills.css';

// Define skill types
type Skill = {
  name: string;
  icon?: string; // Optional icon for future enhancement
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const Skills: React.FC = () => {
  // Define all skills by category
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C#' }
      ]
    },
    {
      name: 'Cloud & IoT',
      skills: [
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'IoT Core' },
        { name: 'IoTHub' },
        { name: 'Serverless' },
        { name: 'Docker' }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'REST API' }
      ]
    },
    {
      name: 'Tools & Methodologies',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'CI/CD Pipelines' },
        { name: 'Agile/Scrum' },
        { name: 'Test Automation' },
        { name: 'Performance Testing' }
      ]
    }
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      
      {/* Tab navigation */}
      <div className="skills-tabs">
        {skillCategories.map((category, index) => (
          <button 
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Skills content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="skills-grid"
        >
          {skillCategories[activeTab].skills.map((skill, index) => (
            <motion.div
              key={skill.name}              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: index * 0.1 } 
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0px 10px 25px rgba(81, 176, 143, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
