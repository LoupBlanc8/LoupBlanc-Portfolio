import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Check } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { projects } from '../lib/projects-data';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [isOpen, setIsOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    return ['Tous', ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === 'Tous' || project.category === filter
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 md:py-28 px-8 md:px-16"
    >
      {/* Header + Filtre sur la même ligne */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8" style={{ marginBottom: 'clamp(80px, 10vh, 150px)' }}>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
            Projets
          </h1>
          <p className="text-base text-[var(--text-muted)] max-w-[550px] leading-relaxed">
            Une sélection de projets réalisés dans le cadre de ma formation BTS SIO et de mes initiatives personnelles.
          </p>
        </div>

        {/* Dropdown unique de filtrage */}
        <div className="relative z-[100] flex flex-col items-end gap-6 w-full md:w-auto">
          {/* Scène Spline 3D */}
          <div className="w-full md:w-[350px] aspect-[16/9] md:aspect-square rounded-2xl overflow-hidden pointer-events-auto bg-transparent mb-2">
            <Spline scene="https://prod.spline.design/ZLyHU2KPbbgWCVKJ/scene.splinecode" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-5 px-7 py-3.5 bg-transparent border-2 border-[var(--text-color)]/20 rounded-full transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-lg hover:shadow-[var(--accent-color)]/10 active:scale-[0.98]"
          >
            <span className="text-sm font-medium opacity-50">Filtrer par</span>
            <span className="text-sm font-bold text-[var(--accent-color)]">{filter}</span>
            <ChevronDown size={16} className={`opacity-40 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 top-full mt-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden min-w-[240px]"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setFilter(cat); setIsOpen(false); }}
                    className={`flex items-center justify-between w-full px-5 py-3.5 text-sm transition-all hover:bg-[var(--accent-color)]/5 ${
                      filter === cat ? 'text-[var(--accent-color)] font-bold' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    {cat}
                    {filter === cat && <Check size={14} className="text-[var(--accent-color)]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Grille 3 colonnes - Pleine largeur */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[var(--card-bg)] border-2 border-[var(--text-color)]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--accent-color)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col shadow-xl"
            >
              {/* Image d'aperçu */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/20 border-b-2 border-[var(--text-color)]/10">
                <img
                  src={`https://picsum.photos/seed/${project.id}/800/500`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold bg-black text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition-all">
                    <Github size={14} />
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg shadow-lg hover:brightness-125 transition-all">
                    <ExternalLink size={14} />
                    Démo
                  </a>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8 flex flex-col flex-1 gap-4">
                <span className="text-[11px] uppercase tracking-[0.25em] font-black text-[var(--accent-color)]">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-[var(--text-color)] leading-relaxed line-clamp-3 flex-1 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t-2 border-[var(--text-color)]/10">
                  {project.tech?.map((t) => (
                    <span key={t} className="text-[11px] font-bold px-3 py-1.5 rounded-md border-2 border-[var(--text-color)]/10 bg-[var(--text-color)]/5 text-[var(--text-color)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fermeture dropdown */}
      {isOpen && <div className="fixed inset-0 z-[90]" onClick={() => setIsOpen(false)} />}
    </motion.div>
  );
};

export default Projects;
