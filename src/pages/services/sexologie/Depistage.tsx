import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ServiceHero from '../../../components/ServiceHero';

const SexologieDepistage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Service de Dépistage Discret"
        description="Un service de dépistage complet et confidentiel pour votre santé sexuelle, incluant des tests sanguins dans un environnement professionnel et discret."
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
              Notre Service de Dépistage
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nous proposons un service de dépistage complet et confidentiel, incluant des prises de sang réalisées dans la plus grande discrétion. Notre approche professionnelle garantit votre confort et votre confidentialité tout au long du processus.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Processus</h3>
                <p className="text-gray-700">
                  Consultation initiale confidentielle, prise de sang discrète, et suivi personnalisé avec résultats détaillés.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Confidentialité</h3>
                <p className="text-gray-700">
                  Garantie totale de confidentialité, résultats sécurisés et environnement discret pour votre confort.
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
              Avantages de Notre Service de Dépistage
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tests Complets</h3>
                  <p className="text-gray-700">
                    Dépistage complet des IST et autres problèmes de santé sexuelle avec des résultats précis.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discrétion Absolue</h3>
                  <p className="text-gray-700">
                    Service totalement confidentiel avec prise de sang discrète et résultats sécurisés.
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
              Nos Services de Dépistage
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation Initiale</h3>
                <p className="text-gray-700">Évaluation confidentielle de vos besoins et planification des tests nécessaires</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prise de Sang</h3>
                <p className="text-gray-700">Prélèvement sanguin dans un environnement discret et professionnel</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Suivi Personnalisé</h3>
                <p className="text-gray-700">Discussion des résultats et recommandations adaptées à votre situation</p>
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

export default SexologieDepistage; 