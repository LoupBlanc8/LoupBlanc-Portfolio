import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FolderOpen } from 'lucide-react';
import { competences } from '../lib/competences-data';

const Competences: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const displayedCompetences = activeId
    ? competences.filter(c => c.id === activeId)
    : competences;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 md:py-28 px-8 md:px-16"
    >
      {/* Header */}
      <div className="flex flex-col gap-5" style={{ marginBottom: 'clamp(40px, 6vh, 80px)' }}>
        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
          Compétences <span className="italic font-light">prouvées</span>.
        </h1>
        <p className="text-base text-[var(--text-muted)] max-w-[650px] leading-relaxed">
          Les compétences du référentiel BTS SIO SLAM, illustrées par des réalisations concrètes issues de ma formation et de mes projets personnels.
        </p>
      </div>

      {/* Filtres - Boutons pills */}
      <div className="flex flex-wrap gap-3" style={{ marginBottom: 'clamp(60px, 8vh, 120px)' }}>
        <button
          onClick={() => setActiveId(null)}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeId === null
              ? 'bg-[var(--accent-color)] text-white shadow-lg shadow-[var(--accent-color)]/20'
              : 'bg-transparent border-2 border-[var(--text-color)]/20 opacity-70 hover:opacity-100 hover:border-[var(--accent-color)]'
          }`}
        >
          Toutes
        </button>
        {competences.map((comp) => (
          <button
            key={comp.id}
            onClick={() => setActiveId(activeId === comp.id ? null : comp.id)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeId === comp.id
                ? 'bg-[var(--accent-color)] text-white shadow-lg shadow-[var(--accent-color)]/20'
                : 'bg-transparent border-2 border-[var(--text-color)]/20 opacity-70 hover:opacity-100 hover:border-[var(--accent-color)]'
            }`}
          >
            {comp.shortTitle}
          </button>
        ))}
      </div>

      {/* Liste des compétences */}
      <div className="flex flex-col gap-16 md:gap-24">
        <AnimatePresence mode="popLayout">
          {displayedCompetences.map((comp) => (
            <motion.div
              key={comp.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-10"
            >
              {/* Titre de la compétence */}
              <div className="flex flex-col gap-4 border-b border-[var(--border-color)] pb-6">
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-[var(--accent-color)] opacity-60" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--accent-color)] opacity-80">
                    Compétence
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight leading-snug max-w-[800px]">
                  {comp.title}
                </h2>
              </div>

              {/* Sous-compétences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comp.subCompetences.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl transition-all duration-300 hover:border-[var(--accent-color)]/30 hover:shadow-lg hover:shadow-[var(--accent-color)]/5"
                  >
                    <span className="text-[var(--accent-color)] font-bold font-serif text-lg mt-0.5 opacity-40">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--text-color)] opacity-80">
                      {sub.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Projets associés (placeholders) */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <FolderOpen size={16} className="text-[var(--accent-color)] opacity-40" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                    Projets associés
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="group bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden flex flex-col opacity-50 hover:opacity-70 transition-opacity"
                    >
                      {/* Placeholder image */}
                      <div className="aspect-[16/10] bg-[var(--border-color)]/20 flex items-center justify-center">
                        <span className="text-[11px] uppercase tracking-widest font-bold opacity-30">
                          Aperçu
                        </span>
                      </div>
                      <div className="p-5 flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[var(--accent-color)] opacity-50">
                          {comp.shortTitle}
                        </span>
                        <h4 className="text-base font-bold opacity-40">Projet à venir</h4>
                        <p className="text-xs text-[var(--text-muted)] opacity-40">
                          Ce projet sera ajouté prochainement pour illustrer cette compétence.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Competences;
