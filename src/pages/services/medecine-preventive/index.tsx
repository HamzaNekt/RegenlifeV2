import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaUserCheck, FaSyringe, FaVial, FaAppleAlt, FaRunning, FaUserMd } from 'react-icons/fa';

const medecinePreventiveServices = [
  {
    id: 'bilan-sante',
    title: 'Bilan de Santé',
    description: "Évaluation complète de votre état de santé et dépistage précoce.",
    path: '/services/medecine-preventive/bilan',
    icon: <FaUserCheck className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    description: "Programme de vaccination personnalisé selon votre profil.",
    path: '/services/medecine-preventive/vaccinations',
    icon: <FaSyringe className="h-6 w-6" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'depistage',
    title: 'Dépistage',
    description: "Tests de dépistage pour la prévention des maladies.",
    path: '/services/medecine-preventive/depistage',
    icon: <FaVial className="h-6 w-6" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'conseils-nutrition',
    title: 'Conseils Nutrition',
    description: "Accompagnement pour une alimentation saine et équilibrée.",
    path: '/services/medecine-preventive/nutrition',
    icon: <FaAppleAlt className="h-6 w-6" />,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'activite-physique',
    title: 'Activité Physique',
    description: "Recommandations pour une activité physique adaptée.",
    path: '/services/medecine-preventive/activite-physique',
    icon: <FaRunning className="h-6 w-6" />,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'suivi-personnalise',
    title: 'Suivi Personnalisé',
    description: "Accompagnement continu pour maintenir une bonne santé.",
    path: '/services/medecine-preventive/suivi-personnalise',
    icon: <FaUserMd className="h-6 w-6" />,
    color: 'from-indigo-500 to-indigo-600'
  }
];

const MedecinePreventive: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Médecine Préventive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Notre service de médecine préventive vous accompagne pour préserver votre santé au quotidien.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos Services de Médecine Préventive
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medecinePreventiveServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={service.path}
                  className="block h-full"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-blue-600 font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                        En savoir plus
                        <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedecinePreventive; 