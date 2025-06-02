import React from 'react';
import { experiences } from '../data/portfolioData';

const Experience = ({ theme }) => {
  // Sort experiences chronologically (oldest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <section id="experience" className="px-6 py-20 relative z-20">
      <h2 className={`text-4xl md:text-5xl text-center font-bold mb-12 section-header glow-text ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent'
      }`}>
        Experience
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className={`timeline ${theme === 'light' ? 'light-timeline' : ''}`}>
          {sortedExperiences.map((e, i) => (
            <div 
              key={i} 
              className={`timeline-item group transition-all duration-500 ease-in-out transform hover:scale-105`}
            >
              <div 
                className={`${theme === 'light' ? 'light-timeline-dot border-blue-600' : 'timeline-dot border-purple-900'}`}
              />
              <div 
                className={`rounded-3xl p-6 border-l-4 transition-all duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-white/10 backdrop-blur-lg border border-white/20 border-l-purple-500 hover:bg-white/20 hover:border-purple-400 hover:shadow-purple-500/30 hover:border-l-pink-500'
                    : 'bg-white shadow-light text-gray-800 backdrop-blur-lg border border-gray-200 border-l-blue-600 hover:bg-white/90 hover:border-blue-400 hover:shadow-blue-500/30 hover:border-l-indigo-600'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className={`text-sm font-semibold px-3 py-1 rounded-full transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-purple-300 bg-purple-500/20 group-hover:bg-purple-400/30 group-hover:text-purple-200' 
                      : 'text-blue-600 bg-blue-100 group-hover:bg-blue-200 group-hover:text-blue-800'
                  }`}>
                    {e.date}
                  </p>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-purple-200 group-hover:text-white' 
                    : 'text-gray-900 group-hover:text-indigo-800 font-bold'
                }`}>
                  {e.role} @ <span className={`${
                    theme === 'dark' 
                      ? 'text-pink-400 group-hover:text-pink-300' 
                      : 'text-blue-700 group-hover:text-blue-900'
                  }`}>{e.org}</span>
                </h3>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-purple-300 group-hover:text-purple-100' 
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  {e.desc}
                </p>
                <div className={`mt-4 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
