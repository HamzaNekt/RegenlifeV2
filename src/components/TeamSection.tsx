import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  gender: 'male' | 'female';
  imageIndex?: number;
  specialties: string[];
}

// Définir les images disponibles
const femaleImages = ['/team/female1.jpg', '/team/female2.jpg', '/team/female3.jpg', '/team/female4.jpg'];
const maleImages = ['/team/male1.jpg', '/team/male2.jpg', '/team/male3.jpg'];

// Assigner un index d'image à chaque membre
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Martin",
    role: "Psychologue clinicienne",
    description: "Spécialisée dans la thérapie cognitive comportementale avec 10 ans d'expérience dans l'accompagnement holistique.",
    gender: 'female',
    imageIndex: 0,
    specialties: ["Anxiété", "Dépression", "Développement personnel"]
  },
  {
    id: 2,
    name: "Marc Dubois",
    role: "Coach en bien-être",
    description: "Expert en méditation et techniques de respiration, accompagne vers un équilibre corps-esprit optimal.",
    gender: 'male',
    imageIndex: 0,
    specialties: ["Méditation", "Gestion du stress", "Mindfulness"]
  },
  {
    id: 3,
    name: "Emma Laurent",
    role: "Thérapeute holistique",
    description: "Pratique une approche intégrative combinant thérapie traditionnelle et méthodes alternatives.",
    gender: 'female',
    imageIndex: 1,
    specialties: ["Thérapie holistique", "Bien-être émotionnel", "Développement personnel"]
  },
  {
    id: 4,
    name: "Thomas Petit",
    role: "Nutritionniste",
    description: "Expert en nutrition holistique et en équilibre alimentaire pour le bien-être mental et physique.",
    gender: 'male',
    imageIndex: 1,
    specialties: ["Nutrition", "Équilibre alimentaire", "Bien-être global"]
  },
  {
    id: 5,
    name: "Julie Moreau",
    role: "Art-thérapeute",
    description: "Utilise l'art comme moyen d'expression et de guérison pour accompagner vers un mieux-être.",
    gender: 'female',
    imageIndex: 2,
    specialties: ["Art-thérapie", "Expression créative", "Développement personnel"]
  },
  {
    id: 6,
    name: "Dr. Antoine Bernard",
    role: "Psychiatre",
    description: "Spécialiste en santé mentale avec une approche humaniste et intégrative.",
    gender: 'male',
    imageIndex: 2,
    specialties: ["Psychiatrie", "Thérapie", "Santé mentale"]
  }
];

const getImageForMember = (member: TeamMember) => {
  const images = member.gender === 'female' ? femaleImages : maleImages;
  return images[member.imageIndex || 0];
};

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = teamMembers.length - 1;
      if (nextIndex >= teamMembers.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}/>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Notre Tribu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une équipe passionnée et expérimentée, dédiée à votre bien-être et votre développement personnel
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[500px] px-[100px]">
          {/* Previous Card */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] transform -translate-x-[20%] scale-90 opacity-50">
            <div className="relative overflow-hidden rounded-xl bg-gray-50 shadow-xl blur-[1px]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${getImageForMember(teamMembers[currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1])})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"/>
              </div>
            </div>
          </div>

          {/* Current Card */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative w-[280px] z-10"
            >
              <div 
                className="relative overflow-hidden rounded-xl bg-gray-50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredMember(teamMembers[currentIndex].id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${getImageForMember(teamMembers[currentIndex])})`,
                    }}
                    animate={{
                      scale: hoveredMember === teamMembers[currentIndex].id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"/>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{teamMembers[currentIndex].name}</h3>
                  <p className="text-cyan-400 font-medium mb-2 text-sm">{teamMembers[currentIndex].role}</p>
                  <p className="text-gray-200 text-xs mb-3 line-clamp-2">{teamMembers[currentIndex].description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {teamMembers[currentIndex].specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] transform translate-x-[20%] scale-90 opacity-50">
            <div className="relative overflow-hidden rounded-xl bg-gray-50 shadow-xl blur-[1px]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${getImageForMember(teamMembers[currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1])})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"/>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 z-20"
            aria-label="Previous member"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 z-20"
            aria-label="Next member"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-8 gap-4">
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const newDirection = index > currentIndex ? 1 : -1;
                    setDirection(newDirection);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 