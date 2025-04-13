import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Experience.css';

type JobDetails = {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
};

const Experience: React.FC = () => {
  // Job experience data
  const jobs: JobDetails[] = [
    {
      title: "Software Developer",
      period: "April 2024 - Present",
      company: "Trimble",
      responsibilities: [
        "Developing IoT solutions in the cloud using AWS and Azure",
        "Full-stack development with modern frameworks and technologies",
        "Implementing cloud-native architectures and solutions"
      ]
    },
    {
      title: "SDET with Development Responsibilities",
      period: "2021 - April 2024",
      company: "Trimble",
      responsibilities: [
        "Contributed to software design and architecture",
        "Implemented unit tests and fixed bugs across multiple projects",
        "Collaborated with development teams on feature implementation",
        "Performed performance engineering to optimize application performance"
      ]
    },
    {
      title: "Software Developement Engineer in Test",
      period: "Jan 2019 - 2021",
      company: "Trimble",
      responsibilities: [
        "Designed and implemented automated test frameworks",
        "Conducted performance testing and analysis",
        "Worked closely with developers to ensure code quality",
        "Participated in code reviews and provided feedback"
      ]
    },
    {
      title: "Quality Engineer",
      period: "June 2014 - 2018",
      company: "Trimble",
      responsibilities: [
        "Led software quality assurance processes and methodologies",
        "Executed comprehensive test strategies for complex software systems",
        "Implemented automated testing frameworks to improve efficiency",
        "Collaborated with cross-functional teams to ensure high-quality product delivery"
      ]
    }
  ];

  // State to track the active tab
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      
      {/* Tab navigation */}
      <div className="experience-tabs">
        {jobs.map((job, index) => (
          <button 
            key={index}
            className={`tab-button ${activeJob === index ? 'active' : ''}`}
            onClick={() => setActiveJob(index)}
          >
            {job.title}
          </button>
        ))}
      </div>
      
      {/* Experience content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeJob}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="experience-content"
        >
          <div className="job-card">
            <h3>{jobs[activeJob].title}</h3>
            <p className="job-details">{jobs[activeJob].period} | {jobs[activeJob].company}</p>
            <motion.ul>
              {jobs[activeJob].responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.1 + (index * 0.1) }
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Experience;
