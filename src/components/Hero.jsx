import React from 'react';
import TypingAnimation from './TypingAnimation';

const Hero = ({ theme }) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 z-20">
      <div className="animate-fadeInUp">
        <h1 className={`text-4xl md:text-7xl font-bold mb-6 animate-pulse ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 bg-clip-text text-transparent'
        }`}>
          Hi, I'm <span className={
            theme === 'dark' 
              ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent'
          }>Bhattu</span>
        </h1>
        <div className="text-xl md:text-2xl mb-8 h-16">
          <TypingAnimation 
            texts={[
              'I build smart models 💻',
              'I love finance 📈', 
              'I am a leader 🏆',
              'I bring tech & biz together ⚡'
            ]}
            className={theme === 'dark' ? 'text-purple-300' : 'text-indigo-700'}
            theme={theme}
          />
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className={`px-8 py-3 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'
            }`}
          >
            View Projects
          </a>
          <button 
            onClick={() => window.open('/Ayush Resume.pdf', '_blank')}
            className={`px-8 py-3 border-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              theme === 'dark'
                ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                : 'border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;