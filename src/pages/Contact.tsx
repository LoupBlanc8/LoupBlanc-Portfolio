import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: '1000px', margin: '0 auto' }}
    >
      <header style={{ marginBottom: '8vh' }}>
        <span className="sub-title">Parlons de vos besoins</span>
        <h1 className="section-title">ME <span className="italic" style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>contacter</span>.</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="input-group">
            <label>NOM & PRÉNOM</label>
            <input type="text" placeholder="Votre nom" />
          </div>
          <div className="input-group">
            <label>ADRESSE EMAIL</label>
            <input type="email" placeholder="votre@email.com" />
          </div>
          <div className="input-group">
            <label>SUJET</label>
            <input type="text" placeholder="Objet de votre message" />
          </div>
          <div className="input-group">
            <label>MESSAGE</label>
            <input type="text" placeholder="Votre message..." />
          </div>
          <button type="submit" className="submit-btn text-serif">ENVOYER LE MESSAGE</button>
        </form>

        <div style={{ paddingTop: '2.5rem' }}>
          <span className="sub-title" style={{ marginBottom: '2rem' }}>Coordonnées</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>EMAIL DIRECT</p>
              <a href="mailto:contacta.bouterfas@gmail.com" className="hover-accent">contacta.bouterfas@gmail.com</a>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>PROFESSIONNEL</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="https://linkedin.com/in/abdallah-bouterfas-00766a274/" target="_blank" rel="noreferrer" className="hover-accent">LinkedIn</a>
                <a href="https://github.com/LoupBlanc8" target="_blank" rel="noreferrer" className="hover-accent">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input-group { display: flex; flex-direction: column; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; transition: border-color 0.3s; }
        .input-group:focus-within { border-color: var(--accent-color); }
        .input-group label { font-size: 0.7rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.1em; }
        .input-group input { background: transparent; border: none; color: var(--text-color); font-size: 1.1rem; padding: 0.5rem 0; width: 100%; outline: none; font-family: inherit; }
        .submit-btn { align-self: flex-start; background: var(--text-color); color: var(--bg-color); padding: 1.2rem 2.5rem; font-weight: 500; font-size: 0.9rem; transition: all 0.3s; margin-top: 1rem; }
        .submit-btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .hover-accent:hover { color: var(--accent-color); transition: color 0.3s; }
      `}</style>
    </motion.div>
  );
};

export default Contact;
