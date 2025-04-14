import React, { useEffect } from 'react';
import './App.css';
import './styles/ContactCards.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollIndicator from './components/ScrollIndicator';
import AnimatedSection from './components/AnimatedSection';
import TextReveal from './components/TextReveal';
import RevealCard from './components/RevealCard';
import ThemeToggle from './components/ThemeToggle';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Navbar />
      
      
      <ScrollIndicator />
      <header className="App-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h1>
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Software Engineer | IoT Solutions | Cloud Engineering
        </motion.p>
      </header>

      <AnimatedSection>
        <section id="about" className="about-section">
          <TextReveal>
            <h2>About Me</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p>
              I'm a Software Engineer with experience spanning quality assurance, performance engineering, and software development.
              Starting my career as a Quality Engineer at Trimble in June 2014, I've evolved my skillset and transitioned to
              full-time software development in April 2024, after several years of contributing to software design, unit testing,
              and bug fixing. Currently working on IoT solutions in the cloud using AWS and Azure.
            </p>
          </TextReveal>
        </section>
      </AnimatedSection>

      <Experience />

      <Skills />

      <AnimatedSection>
        <section id="contact" className="contact-section">
          <TextReveal>
            <h2>Get In Touch</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p>
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
          </TextReveal>
          <div className="contact-cards">
            <RevealCard
              title="GitHub"
              description="Check out my code repositories and open-source contributions."
              link={{
                url: "https://github.com/venkatprasadh",
                text: "View GitHub Profile"
              }}
            />
            <RevealCard
              title="LinkedIn"
              description="Connect with me professionally and view my career journey."
              link={{
                url: "https://linkedin.com/in/venkatprasadh",
                text: "Connect on LinkedIn"
              }}
            />
            <RevealCard
              title="Email"
              description="Send me a message directly for collaborations or inquiries."
              link={{
                url: "mailto:venkatprasadhsudhakar@gmail.com",
                text: "Send Email"
              }}
            />
          </div>
        </section>
      </AnimatedSection>
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} | Venkat</p>
      </footer>
    </div>
  );
}

export default App;
