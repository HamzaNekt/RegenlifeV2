import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight, FiCheckCircle, FiMapPin, FiTruck, FiHome, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../../components/LoadingSpinner';

const TherapieDeCouple: React.FC = () => {
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
      <section className="relative h-[50vh] bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 pt-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thérapie de Couple
            </h1>
            <p className="text-xl mb-8">
              Un accompagnement psychologique pour les couples, afin de renforcer la communication, la compréhension et l'harmonie dans la relation.
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
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Communication & Compréhension</h2>
            <p className="text-gray-700 mb-4">Nous aidons les couples à améliorer leur communication, à mieux se comprendre et à résoudre les conflits de manière constructive.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Entretiens de couple</li>
              <li>Gestion des conflits</li>
              <li>Renforcement du dialogue</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Soutien & Accompagnement</h2>
            <p className="text-gray-700 mb-4">Un accompagnement personnalisé pour traverser les périodes difficiles, renforcer la complicité et retrouver l'équilibre dans la relation.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Soutien psychologique</li>
              <li>Conseils pour l'épanouissement du couple</li>
              <li>Ateliers de développement relationnel</li>
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
            Prête à renforcer votre couple ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Notre équipe vous accompagne pour améliorer la communication et l'harmonie dans votre couple. Prenez rendez-vous ou contactez-nous pour toute question.
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

export default TherapieDeCouple; 