import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import backgroundImage from '../media/1.jpg';

const projects = [
  {
    id: 1,
    title: "Votre Bien-être",
    subtitle: "CORPS & ESPRIT",
    caption: "Retrouvez votre équilibre intérieur"
  },
  {
    id: 2,
    title: "Notre Approche",
    subtitle: "PERSONNALISÉE",
    caption: "Un accompagnement sur mesure"
  },
  {
    id: 3,
    title: "Ensemble",
    subtitle: "TRANSFORMONS",
    caption: "Votre Santé Mentale, Notre Priorité"
  }
];

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="w-full h-[300vh] relative" ref={containerRef}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          {projects.map((project, index) => {
            const progress = useTransform(
              scrollYProgress,
              [
                Math.max(0, (index - 0.2) / 3),
                index / 3,
                Math.min(1, (index + 0.2) / 3)
              ],
              [0, 1, 0]
            );

            const opacity = useTransform(
              progress,
              [0, 0.1, 0.9, 1],
              [0, 1, 1, 0]
            );

            const scale = useTransform(
              progress,
              [0, 0.1, 0.9, 1],
              [0.5, 1, 1, 0.5]
            );

            const y = useTransform(
              progress,
              [0, 0.1, 0.9, 1],
              [200, 0, 0, -200]
            );

            const x = useTransform(
              progress,
              [0, 0.1, 0.9, 1],
              [-100, 0, 0, 100]
            );

            return (
              <motion.div
                key={project.id}
                className="absolute w-full text-center pointer-events-none"
                style={{ 
                  opacity,
                  filter: useTransform(
                    progress,
                    [0, 0.1, 0.9, 1],
                    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
                  ),
                  zIndex: useTransform(
                    progress,
                    [0, 0.5, 1],
                    [0, 1, 0]
                  )
                }}
              >
                <motion.div 
                  style={{ 
                    y,
                    x,
                    scale
                  }}
                  className="transition-all duration-1000 ease-out"
                >
                  <h3 className="text-4xl text-white/90 mb-6 font-light tracking-wide">
                    {project.title}
                  </h3>
                  <div>
                    <motion.h2 
                      className="text-7xl text-white font-bold tracking-wider mb-3"
                      style={{
                        textShadow: "0 4px 12px rgba(0,0,0,0.3)"
                      }}
                    >
                      {project.subtitle}
                    </motion.h2>
                    {project.caption && (
                      <motion.p 
                        className="text-xl tracking-widest text-cyan-400/90"
                        style={{
                          textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                        }}
                      >
                        {project.caption}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            className="w-6 h-6 border-2 border-white/80 rounded-full flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div className="w-1 h-1 bg-white/80 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase; 