import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUserCheck, FiFeather, FiRefreshCw, FiHeart, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ConsultationORL: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consultation ORL
            </h1>
            <p className="text-xl mb-8">
              Une évaluation complète et personnalisée de vos troubles ORL par des spécialistes expérimentés.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              Qu'est-ce que la Consultation ORL ?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La consultation ORL est un examen approfondi qui permet d'évaluer et de diagnostiquer les troubles affectant l'oreille, le nez et la gorge. Notre approche combine expertise médicale et technologie de pointe pour vous offrir les meilleurs soins.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Examen Complet</h3>
                <p className="text-gray-700">
                  Évaluation détaillée de l'oreille, du nez et de la gorge avec des équipements modernes.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Diagnostic Précis</h3>
                <p className="text-gray-700">
                  Identification précise des problèmes et proposition de solutions adaptées.
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
              Avantages de la Consultation
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise Médicale</h3>
                  <p className="text-gray-700">
                    Consultation par des spécialistes ORL qualifiés et expérimentés.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technologie Avancée</h3>
                  <p className="text-gray-700">
                    Utilisation d'équipements modernes pour un diagnostic précis.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Examen de l'Oreille</h3>
                <p className="text-gray-700">Évaluation complète de l'audition et des troubles de l'oreille</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Examen du Nez</h3>
                <p className="text-gray-700">Analyse des voies nasales et des sinus</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Examen de la Gorge</h3>
                <p className="text-gray-700">Évaluation des troubles de la déglutition et de la voix</p>
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
                <p className="text-gray-700">Parking gratuit disponible pour votre confort</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Transport</h3>
                <p className="text-gray-700">Service de transport disponible sur demande</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FiHome className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Accueil</h3>
                <p className="text-gray-700">Salle d'attente confortable et accueil personnalisé</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/services/orl"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Retour aux Services ORL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultationORL; 