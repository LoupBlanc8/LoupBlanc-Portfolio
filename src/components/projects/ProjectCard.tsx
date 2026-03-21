import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    year: string;
    tech?: string[];
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imageUrl = `https://picsum.photos/seed/${project.id}/1200/900`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer flex flex-col gap-6"
    >
      {/* Visual - Aspect ratio 4:3 Studio look - Beaucoup plus grand */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a] rounded-sm transition-all duration-1000 hover:rounded-[3rem] shadow-2xl">
        <motion.img
          src={imageUrl}
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Details épurés mais plus gros */}
      <div className="flex flex-col pt-2 px-2">
        <div className="flex justify-between items-baseline opacity-30 text-[11px] uppercase tracking-[0.4em] font-bold mb-3">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-serif tracking-tight m-0 leading-tight group-hover:text-accent transition-colors duration-500 underline-offset-8 group-hover:underline">
          {project.title}
        </h3>
        
        <p className="text-[15px] md:text-[17px] text-muted-foreground leading-relaxed opacity-50 font-light mt-4 max-w-[90%]">
          {project.description}
        </p>

        {/* Tech subtle */}
        <div className="flex flex-wrap gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          {project.tech?.slice(0, 4).map(t => (
            <span key={t} className="text-[10px] uppercase tracking-[0.2em] border border-white/5 bg-white/[0.03] px-3 py-1 font-bold">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
