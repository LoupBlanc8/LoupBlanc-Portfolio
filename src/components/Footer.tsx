import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-40 md:mt-64 border-t border-[var(--text-color)]/10 pt-16 pb-12 w-full px-8 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Left Spacer for proper centering on larger screens */}
        <div className="hidden md:block"></div>
        
        {/* Copyright - Centered */}
        <div className="text-center">
          <p className="text-[11px] md:text-xs tracking-widest opacity-60 font-bold uppercase">
            © 2026 Bouterfas Abdallah. Tous droits réservés.
          </p>
        </div>
        
        {/* Social Icons - Right aligned */}
        <div className="flex justify-center md:justify-end items-center gap-10">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-40 hover:opacity-100 hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-40 hover:opacity-100 hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="opacity-40 hover:opacity-100 hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
