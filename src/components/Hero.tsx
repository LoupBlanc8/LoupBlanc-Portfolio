import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
const KameHouseSpline = React.lazy(() => import('./3d/KameHouseSpline').then(module => ({ default: module.KameHouseSpline })));

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hero-content"
      >
        <span className="sub-title">BTS SIO — SERVICES INFORMATIQUES AUX ORGANISATIONS (Option SLAM)</span>
        <h1 className="hero-title">
          Bouterfas <br />
          <span className="italic">Abdallah</span>.
        </h1>
        <p className="hero-description">
          Développeur passionné, je conçois des solutions numériques robustes et élégantes. 
          En formation BTS SIO option SLAM, je recherche des opportunités pour mettre mes compétences au service de projets concrets.
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
          <div className="stat-item">
            <span className="stat-label">COMPÉTENCES</span>
            <p className="stat-value">React, Symfony, Spring Boot, Node.js</p>
          </div>
          <div className="stat-item" style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
            <span className="stat-label">EXPÉRIENCE</span>
            <p className="stat-value">SLAM / Réseaux / BDD</p>
          </div>
        </div>
        
        <div className="hero-actions" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
          <a href="/projets" className="btn-primary">DÉCOUVRIR MES PROJETS</a>
          <a href="/a-propos" className="btn-secondary">EN SAVOIR PLUS</a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hero-visual"
      >
        <React.Suspense fallback={<div className="w-full h-full flex items-center justify-center opacity-0">...</div>}>
          <KameHouseSpline />
        </React.Suspense>
      </motion.div>

      <style>{`
        .stat-label { font-size: 0.7rem; color: var(--text-muted); letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem; }
        .stat-value { font-weight: 500; font-size: 1rem; }
        .btn-primary { background: var(--text-color); color: var(--bg-color); padding: 1rem 2rem; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; transition: all 0.3s; text-decoration: none; }
        .btn-secondary { border: 1px solid var(--border-color); color: var(--text-color); padding: 1rem 2rem; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; transition: all 0.3s; text-decoration: none; }
        .btn-primary:hover, .btn-secondary:hover { transform: translateY(-3px); opacity: 0.9; }
        
        @media (max-width: 1024px) {
          .hero { flex-direction: column; text-align: center; }
          .hero-visual { order: -1; width: 100%; height: 400px; margin-bottom: 2rem; }
          .hero-description { margin: 2rem auto 0; }
          .hero-actions { justify-content: center; }
          .stat-item { margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
