import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDroplet, FiActivity, FiThermometer, FiRadio, FiBarChart2, FiZap, FiLayers, FiTarget } from 'react-icons/fi';
import LoadingSpinner from '../../../components/LoadingSpinner';

const traumaServices = [
  {
    id: 'stem-cell-therapy',
    title: 'Thérapie par Cellules Souches',
    description: 'Traitement régénératif pour la réparation des tissus et la guérison accélérée des lésions traumatiques.',
    path: '/services/traumatologie/stem-cell-therapy',
    icon: <FiDroplet className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'prp-therapy',
    title: 'Thérapie PRP',
    description: 'Traitement utilisant le plasma riche en plaquettes pour la régénération tissulaire et la réparation des lésions.',
    path: '/services/traumatologie/prp-therapy',
    icon: <FiDroplet className="h-6 w-6" />,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'cryotherapy',
    title: 'Cryothérapie',
    description: 'Traitement par le froid pour réduire l\'inflammation et la douleur associées aux traumatismes.',
    path: '/services/traumatologie/cryotherapy',
    icon: <FiThermometer className="h-6 w-6" />,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'sonic-wave-therapy',
    title: 'Thérapie par Ondes Soniques',
    description: 'Traitement non invasif pour la régénération tissulaire et osseuse après un traumatisme.',
    path: '/services/traumatologie/sonic-wave-therapy',
    icon: <FiRadio className="h-6 w-6" />,
    color: 'from-sky-500 to-sky-600'
  },
  {
    id: 'core-to-floor',
    title: 'Core to Floor',
    description: 'Programme de rééducation et de renforcement pour la récupération après un traumatisme.',
    path: '/services/traumatologie/core-to-floor',
    icon: <FiBarChart2 className="h-6 w-6" />,
    color: 'from-violet-500 to-violet-600'
  }
];

const Traumatologie: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Service de Traumatologie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Notre service de traumatologie combine des approches thérapeutiques traditionnelles et innovantes pour une récupération optimale.
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
            Nos Services de Traumatologie
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traumaServices.map((service, index) => (
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe est à votre écoute pour vous accompagner, vous informer et vous proposer un suivi personnalisé. Prenez rendez-vous ou contactez-nous pour toute question.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:bg-blue-50 hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Traumatologie; 