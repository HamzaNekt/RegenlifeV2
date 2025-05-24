import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiArrowRight, FiCheckCircle, FiMapPin, FiTruck, FiHome, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../../components/LoadingSpinner';

const EducationSante: React.FC = () => {
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
      <section className="relative h-[50vh] bg-gradient-to-r from-pink-500 to-pink-700 pt-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Éducation à la Santé
            </h1>
            <p className="text-xl mb-8">
              Formation, information et prévention pour toutes les femmes : ateliers, conseils et ressources pour mieux comprendre et prendre soin de sa santé.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-pink-700 hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Ateliers & Prévention</h2>
            <p className="text-gray-700 mb-4">Participez à nos ateliers et séances d'information pour mieux comprendre votre santé et adopter les bons réflexes au quotidien.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Ateliers d'éducation à la santé</li>
              <li>Prévention des maladies féminines</li>
              <li>Conseils sur l'hygiène de vie</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Ressources & Conseils</h2>
            <p className="text-gray-700 mb-4">Des ressources et des conseils personnalisés pour vous accompagner dans toutes les étapes de votre vie de femme.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Documentation et supports pédagogiques</li>
              <li>Entretiens individuels d'information</li>
              <li>Accompagnement à l'autonomie en santé</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Prête à vous informer et à prendre soin de votre santé ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Notre équipe vous propose des ateliers, des ressources et des conseils pour vous accompagner au quotidien. Prenez rendez-vous ou contactez-nous pour toute question.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Prendre Rendez-vous
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSante; 