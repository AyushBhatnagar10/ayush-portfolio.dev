import React, { useState } from 'react';
import { skills } from '../data/portfolioData';

const Skills = ({ theme }) => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? skills : skills.filter(s => s.type === filter);
  
  return (
    <section id="skills" className="px-6 py-20 relative z-20">
      <h2 className={`text-4xl md:text-5xl text-center font-bold mb-12 section-header glow-text ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent'
      }`}>
        Skills
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all','frontend','backend','database','ml','tools','language'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
                filter === f
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-blue-600'
                  : theme === 'dark'
                    ? 'border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white'
                    : 'border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {filtered.map(skill => (
            <span 
              key={skill.name} 
              className={`px-6 py-3 backdrop-blur-lg border rounded-full font-semibold hover:scale-110 transition-transform duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-200'
                  : 'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300 text-blue-800'
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;