import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="nav-logo">
          <img
            src={isDark ? '/logo-ba-dark.png' : '/logo-ba.png'}
            alt="AB Logo"
            className="nav-logo-img"
          />
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>ACCUEIL</NavLink>
          <NavLink to="/projets" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>PROJETS</NavLink>
          <NavLink to="/competences" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>COMPÉTENCES</NavLink>
          <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>À PROPOS</NavLink>
          <NavLink to="/veille" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>VEILLE</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>CONTACT</NavLink>

          
          <button onClick={toggle} className="theme-toggle" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
