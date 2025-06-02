import React from 'react';
import { Trophy } from 'lucide-react';
import { Medal } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = ({ theme }) => {
  return (
    <section id="achievements" className="px-6 py-20 relative z-20">
      <h2 className={`text-4xl md:text-5xl text-center font-bold mb-12 section-header glow-text ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent'
      }`}>
        Achievements
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((a, i) => (
          <div key={i} className="flex flex-col items-center group hover:transform hover:scale-110 transition-all duration-300">
            <div className={`p-6 rounded-full mb-4 text-white shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:shadow-yellow-500/50'
                : 'bg-gradient-to-r from-amber-500 to-orange-600 group-hover:shadow-amber-500/50'
            }`}>
              <Trophy className="w-8 h-8" />
            </div>
            <p className={`text-center font-semibold ${
              theme === 'dark' ? 'text-purple-200' : 'text-gray-800'
            }`}>{a.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;