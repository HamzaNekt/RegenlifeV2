import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ServiceHero from '../../../components/ServiceHero';

const TherapieSexuelle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Thérapie Sexuelle"
        description="Une approche professionnelle et personnalisée pour traiter les difficultés sexuelles et améliorer votre bien-être intime."
        bgColorFrom="from-purple-600"
        bgColorTo="to-purple-800"
      />

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
              Notre Approche en Thérapie Sexuelle
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nous offrons un espace sécurisé et confidentiel pour aborder vos préoccupations sexuelles. Notre approche thérapeutique est basée sur l'écoute, le respect et l'expertise professionnelle.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Méthode</h3>
                <p className="text-gray-700">
                  Thérapie individualisée combinant approches cognitives, comportementales et émotionnelles.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Objectifs</h3>
                <p className="text-gray-700">
                  Amélioration de la vie sexuelle, résolution des difficultés et renforcement de la confiance.
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
              Avantages de la Thérapie Sexuelle
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise Professionnelle</h3>
                  <p className="text-gray-700">
                    Accompagnement par des thérapeutes qualifiés et expérimentés en sexologie.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Approche Personnalisée</h3>
                  <p className="text-gray-700">
                    Traitement adapté à vos besoins spécifiques et à votre situation personnelle.
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
              Nos Services Thérapeutiques
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation Individuelle</h3>
                <p className="text-gray-700">Séances personnalisées pour traiter vos préoccupations spécifiques</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Thérapie de Couple</h3>
                <p className="text-gray-700">Accompagnement des couples pour améliorer leur intimité</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Suivi Thérapeutique</h3>
                <p className="text-gray-700">Support continu et ajustement du traitement selon les progrès</p>
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
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FiMapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Stationnement</h3>
                <p className="text-gray-700">Stationnement gratuit disponible sur place pour votre confort</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Transport</h3>
                <p className="text-gray-700">Service de transport disponible sur demande pour faciliter votre venue</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FiHome className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Logement</h3>
                <p className="text-gray-700">Options d'hébergement disponibles à proximité selon disponibilité</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/services/sexologie"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Retour aux Services de Sexologie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TherapieSexuelle; 