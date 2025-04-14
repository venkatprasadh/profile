import React, { useState } from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import {  SiServerless } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TbDeviceIpadPin } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
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
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
      ],
    },
    {
      name: 'Cloud & IoT',
      skills: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Azure', icon: <VscAzureDevops /> },
        { name: 'IoT Core', icon: <TbDeviceIpadPin /> },
        { name: 'Serverless', icon: <SiServerless /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
      ],
    },
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
      <div
        className="skills-content"
        style={{
          backgroundColor: 'var(--background-color)', // Use CSS variable for theme-based background
          padding: '20px',
          borderRadius: '10px'
        }}
      >
        {skillCategories.map((category, index) => (
          activeTab === index && (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-card"
                    style={{ padding: '10px', margin: '10px 0' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div className="skill-icon" style={{ marginRight: '10px' }}>{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                ))}
            </motion.div>
          )
        ))}
      </div>
    </section>
  );
};

export default Skills;
