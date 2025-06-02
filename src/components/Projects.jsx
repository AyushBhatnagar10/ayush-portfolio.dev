import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = ({ theme }) => {
  return (
    <section id="projects" className="px-6 py-20 relative z-20">
      <h2 className={`text-4xl md:text-5xl text-center font-bold mb-12 section-header glow-text ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent'
      }`}>
        Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-6 shadow-2xl border hover:transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 backdrop-blur-lg border-white/20 hover:shadow-purple-500/25'
                : 'bg-white/70 backdrop-blur-lg border-gray-200 hover:shadow-blue-500/25 shadow-xl'
            }`}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-2xl" />
            <h3 className={`text-2xl font-bold mb-3 ${
              theme === 'dark' ? 'text-purple-200' : 'text-gray-800'
            }`}>{project.title}</h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-purple-300' : 'text-gray-600'
            }`}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span 
                  key={i} 
                  className={`text-xs px-3 py-1 rounded-full text-white font-semibold ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-700'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                theme === 'dark'
                  ? 'text-purple-400 hover:text-purple-300'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
              rel="noopener noreferrer"
            >
              View Project <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;