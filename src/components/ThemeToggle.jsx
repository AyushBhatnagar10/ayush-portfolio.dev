import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="fixed top-24 right-4 z-50 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default ThemeToggle;