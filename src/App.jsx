import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import Snowflakes from './components/Snowflakes';
import EasterEgg from './components/EasterEgg';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState('dark');
  
  const themeClasses = theme === 'dark' 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white'
    : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900';

  // Intersection Observer for smooth section animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className={`min-h-screen font-mono transition-all duration-500 ${themeClasses}`} data-theme={theme}>
      <AnimatedBackground theme={theme} />
      <Snowflakes />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Navigation theme={theme} />
      <EasterEgg />
      
      {/* Hero Section */}
      <section id="home" className="section-animate">
        <Hero theme={theme} />
      </section>
      
      {/* About Section */}
      <section id="about" className="px-6 py-20 relative z-20 section-animate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 section-header animated-header ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent'
          }`}>
            About Me
          </h2>
          <div className={`rounded-3xl p-8 shadow-2xl transform transition-all duration-700 hover:scale-105 ${
            theme === 'dark'
              ? 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 hover:shadow-purple-500/30'
              : 'bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl hover:bg-white/90 hover:shadow-blue-500/30'
          }`}>
            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-purple-200' : 'text-gray-700'
            }`}>
              Hey there! I'm Ayush Bhatnagar—aka Bhattu. I'm in my 3rd year of Integrated BTech CSE + MBA at Nirma University, Ahmedabad.
            </p>
            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-purple-200' : 'text-gray-700'
            }`}>
              I'm passionate about building AI-driven solutions that solve real-world problems. With hands-on experience in Python, MySQL, and ML, 
              I've built apps like TradeFlow and cancer image analyzers through national hackathons. 
            </p>
            <p className={`text-lg md:text-xl leading-relaxed ${
              theme === 'dark' ? 'text-purple-200' : 'text-gray-700'
            }`}>
              A natural leader and communicator, I thrive in team settings, 
              love public speaking, and am currently exploring deeper into AI to gear up for impactful internships.
            </p>
          </div>
        </div>
      </section>
      
      <section id="skills" className="section-animate">
        <Skills theme={theme} />
      </section>
      
      <section id="projects" className="section-animate">
        <Projects theme={theme} />
      </section>
      
      <section id="experience" className="section-animate">
        <Experience theme={theme} />
      </section>
      
      <section id="achievements" className="section-animate">
        <Achievements theme={theme} />
      </section>
      
      <section id="contact" className="section-animate">
        <Contact theme={theme} />
      </section>
      
      {/* Footer */}
      <footer className={`py-8 text-center relative z-20 ${
        theme === 'dark' ? 'text-purple-300' : 'text-gray-600'
      }`}>
        <div className={`py-4 ${
          theme === 'dark' 
            ? 'bg-white/5 backdrop-blur-lg border-t border-white/10'
            : 'bg-white/30 backdrop-blur-lg border-t border-gray-200'
        }`}>
          <p>© {new Date().getFullYear()} Bhattu. All rights reserved.</p>
          <p className="text-sm mt-2">Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;