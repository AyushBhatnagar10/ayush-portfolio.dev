import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Handle smooth scrolling
  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`text-2xl font-bold ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent'
            }`}>
              Bhattu
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'text-purple-400 font-semibold'
                        : 'text-blue-600 font-semibold'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-purple-300'
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-400 to-pink-500'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700'
                    }`} />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-purple-400 hover:bg-white/10'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-6 py-4 space-y-4 ${
            theme === 'dark'
              ? 'bg-gray-900/95 backdrop-blur-lg border-t border-white/10'
              : 'bg-white/95 backdrop-blur-lg border-t border-gray-200/50'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-semibold'
                      : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-semibold'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-purple-300 hover:bg-white/5'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;