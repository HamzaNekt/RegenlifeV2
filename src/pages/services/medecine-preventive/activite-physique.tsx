import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUserCheck, FiFeather, FiRefreshCw, FiHeart, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';

const ActivitePhysique: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 pt-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activité Physique
            </h1>
            <p className="text-xl mb-8">
              Un programme d'activité physique personnalisé pour améliorer votre santé et votre bien-être.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'medecine-preventive', service: 'Activité Physique' } })}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qu'est-ce que notre Programme d'Activité Physique ?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Notre programme d'activité physique vous offre un accompagnement personnalisé pour améliorer votre condition physique et votre santé. Notre approche est adaptée à votre niveau et à vos objectifs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Objectifs</h3>
                <p className="text-gray-700">
                  Améliorer votre condition physique et votre santé globale.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Méthode</h3>
                <p className="text-gray-700">
                  Programme personnalisé adapté à votre niveau et à vos objectifs.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Avantages de notre Programme
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Programme Personnalisé</h3>
                  <p className="text-gray-700">
                    Exercices adaptés à votre niveau et à vos objectifs.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Suivi Régulier</h3>
                  <p className="text-gray-700">
                    Accompagnement continu pour maintenir votre motivation.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Évaluation Initiale</h3>
                <p className="text-gray-700">Bilan de votre condition physique</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Programme d'Exercices</h3>
                <p className="text-gray-700">Exercices adaptés à vos besoins</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Suivi et Coaching</h3>
                <p className="text-gray-700">Accompagnement personnalisé</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Practical Services Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Services Pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FiMapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Stationnement</h3>
                <p className="text-gray-700">Stationnement gratuit disponible sur place pour votre confort</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Transport</h3>
                <p className="text-gray-700">Service de transport disponible sur demande pour faciliter votre venue</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FiHome className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Logement</h3>
                <p className="text-gray-700">Options d'hébergement disponibles à proximité selon disponibilité</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/services/medecine-preventive"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Retour aux Services de Médecine Préventive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitePhysique; 