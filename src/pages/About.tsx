import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: '1000px', margin: '0 auto' }}
    >
      <header style={{ marginBottom: '8vh' }}>
        <span className="sub-title">Mon histoire</span>
        <h1 className="section-title">PARCOURS & <br /><span className="italic" style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>philosophie</span>.</h1>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.4', marginBottom: '2rem' }}>
            Étudiant en BTS SIO (SLAM) passionné par le développement full-stack, l'architecture logicielle et la cybersécurité.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Mon approche est méthodique et privilégie la qualité, la lisibilité et la maintenabilité du code. Je conçois des solutions numériques robustes et élégantes, toujours avec l'objectif de répondre à des besoins concrets.
          </p>
          
          <div style={{ marginTop: '3rem' }}>
            <span className="sub-title" style={{ marginBottom: '1rem' }}>Scolarité</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ fontWeight: 600 }}>BTS SIO (Option SLAM)</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>SERVICES INFORMATIQUES AUX ORGANISATIONS • 2023 — 2025</p>
              </div>
              <div>
                <p style={{ fontWeight: 600 }}>Baccalauréat (Mention)</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>LYCÉE • 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
          <span className="sub-title" style={{ marginBottom: '1.5rem' }}>Expertises</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>LANGAGES</p>
              <p>Python, Java, PHP, TS, SQL</p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>FRAMEWORKS</p>
              <p>React, Symfony, Spring Boot, Node.js</p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>OUTILS</p>
              <p>Git, Docker, Figma, Packet Tracer</p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>SOFT SKILLS</p>
              <p>Agile, Rédaction technique, Équipe</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
