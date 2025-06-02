import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Swal from 'sweetalert2';
import { track } from '@vercel/analytics';

const Contact = ({ theme }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { 
    e.preventDefault(); 
    Swal.fire('Thanks!', 'Message sent.', 'success');
    setForm({ name: '', email: '', message: '' });
    track('contact_form_submit');
  };
  
  return (
    <section id="contact" className="px-6 py-20 relative z-20">
      <h2 className={`text-4xl md:text-5xl text-center font-bold mb-12 section-header glow-text ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent'
      }`}>
        Contact Me
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-3xl p-8 shadow-2xl border space-y-6 transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-white/10 backdrop-blur-lg border-white/20'
            : 'bg-white/70 backdrop-blur-lg border-gray-200 shadow-xl'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={handleChange} 
              className={`form-input w-full p-4 border rounded-2xl focus:outline-none backdrop-blur-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 border-purple-400/50 text-purple-200 placeholder-purple-300 focus:border-purple-400 hover:bg-white/15 hover:border-purple-300'
                  : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 hover:bg-white/70 hover:border-blue-400'
              }`}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={handleChange} 
              className={`form-input w-full p-4 border rounded-2xl focus:outline-none backdrop-blur-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 border-purple-400/50 text-purple-200 placeholder-purple-300 focus:border-purple-400 hover:bg-white/15 hover:border-purple-300'
                  : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 hover:bg-white/70 hover:border-blue-400'
              }`}
              required
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={form.message} 
              onChange={handleChange} 
              className={`form-input w-full p-4 border rounded-2xl h-32 focus:outline-none backdrop-blur-lg resize-none transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 border-purple-400/50 text-purple-200 placeholder-purple-300 focus:border-purple-400 hover:bg-white/15 hover:border-purple-300'
                  : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 hover:bg-white/70 hover:border-blue-400'
              }`}
              required
            />
            <button 
              type="submit"
              className={`w-full py-4 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-500/50'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:shadow-blue-500/50'
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="flex justify-center gap-6 mt-8">
          <a 
            href="mailto:ayushbhatnagar1299@gmail.com" 
            className={`p-4 rounded-full text-white hover:scale-110 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-blue-500/50'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-blue-500/50'
            }`}
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/AyushBhatnagar10" 
            className={`p-4 rounded-full text-white hover:scale-110 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-gray-700 to-gray-900 hover:shadow-gray-700/50'
                : 'bg-gradient-to-r from-gray-800 to-black hover:shadow-gray-800/50'
            }`}
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ayushbhatnagar2004/" 
            className={`p-4 rounded-full text-white hover:scale-110 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-blue-600/50'
                : 'bg-gradient-to-r from-blue-700 to-blue-900 hover:shadow-blue-700/50'
            }`}
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;