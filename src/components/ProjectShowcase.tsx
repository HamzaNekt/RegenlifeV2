import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000); // 4 secondes par slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-x-hidden max-w-full px-4">
      <div className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-1000 min-w-0 max-w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence initial={false}>
          <motion.div
            key={projects[current].id}
            className="absolute w-full text-center pointer-events-none"
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, scale: 0.95, filter: 'blur(12px)' }}
            transition={{ duration: 1 }}
          >
            <div className="transition-all duration-1000 ease-out">
              <h3 className="text-4xl text-white/90 mb-6 font-light tracking-wide">
                {projects[current].title}
              </h3>
              <div>
                <motion.h2 
                  className="text-4xl md:text-7xl text-white font-bold tracking-wider mb-3"
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {projects[current].subtitle}
                </motion.h2>
                {projects[current].caption && (
                  <motion.p 
                    className="text-xl tracking-widest text-[#D1A24C]"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {projects[current].caption}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
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
  );
};

export default ProjectShowcase; 