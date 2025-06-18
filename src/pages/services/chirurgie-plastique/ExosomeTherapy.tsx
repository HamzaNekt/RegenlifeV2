import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';

const ExosomeTherapy: React.FC = () => {
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
    <div className="min-h-screen bg-[#1c2431]">
      {/* Hero Section */}
      <section className="relative h-[90vh] pt-22 flex items-center overflow-hidden" style={{ backgroundImage: 'url(/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Thérapie par Exosomes en Chirurgie Plastique
            </h1>
            <p className="text-xl mb-8 font-montserrat">
              Une approche révolutionnaire pour optimiser la cicatrisation et améliorer les résultats de votre chirurgie plastique.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'chirurgie-plastique', service: 'Thérapie par Exosomes' } })}
              className="bg-[#D1A24C] text-[#1c2431] px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#c4bcb4] hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        {/* Flou/débordement bas du hero */}
        <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none z-20" style={{background: 'linear-gradient(180deg, rgba(44,49,63,0) 0%, rgba(28,36,49,0.7) 60%, #1c2431 100%)', backdropFilter: 'blur(12px)'}} />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is Exosome Therapy Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#2e333f] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-[#D1A24C] mb-6 font-montserrat">
              Qu'est-ce que la Thérapie par Exosomes en Chirurgie Plastique ?
            </h2>
            <p className="text-lg text-[#c4bcb4] mb-6">
              La thérapie par exosomes est une technique complémentaire à la chirurgie plastique qui utilise des vésicules extracellulaires pour optimiser la cicatrisation et améliorer les résultats esthétiques.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3">Cicatrisation Optimisée</h3>
                <p className="text-[#c4bcb4]">
                  Stimulation naturelle de la cicatrisation et amélioration de la qualité des cicatrices post-chirurgicales.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3">Résultats Esthétiques Améliorés</h3>
                <p className="text-[#c4bcb4]">
                  Amélioration de la texture de la peau et optimisation des résultats de votre chirurgie plastique.
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
            className="bg-[#2e333f] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-[#D1A24C] mb-6 font-montserrat">
              Avantages de la Thérapie par Exosomes en Chirurgie Plastique
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1c2431] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cicatrisation Accélérée</h3>
                  <p className="text-[#c4bcb4]">
                    Réduction du temps de cicatrisation et amélioration de la qualité des cicatrices après votre chirurgie.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1c2431] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Résultats Naturels</h3>
                  <p className="text-[#c4bcb4]">
                    Amélioration naturelle de la texture de la peau et des résultats esthétiques de votre chirurgie.
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
            className="bg-[#2e333f] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-[#D1A24C] mb-6 font-montserrat">
              Nos Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Évaluation Pré-Chirurgicale</h3>
                <p className="text-[#c4bcb4]">Analyse de votre condition et planification du traitement par exosomes en complément de votre chirurgie</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Traitement par Exosomes</h3>
                <p className="text-[#c4bcb4]">Application précise des exosomes pour optimiser la cicatrisation</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Suivi Post-Chirurgical</h3>
                <p className="text-[#c4bcb4]">Évaluation des résultats et recommandations pour maintenir les effets optimaux</p>
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
            className="bg-[#2e333f] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-[#D1A24C] mb-6 font-montserrat">
              Services Pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiMapPin className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3">Stationnement</h3>
                <p className="text-[#c4bcb4]">Stationnement gratuit disponible sur place pour votre confort</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3">Transport</h3>
                <p className="text-[#c4bcb4]">Service de transport disponible sur demande pour faciliter votre venue</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiHome className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3">Logement</h3>
                <p className="text-[#c4bcb4]">Options d'hébergement disponibles à proximité selon disponibilité</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#2e333f] to-[#1c2431] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
              Prêt à Optimiser les Résultats de Votre Chirurgie Plastique ?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Prenez rendez-vous dès aujourd'hui pour votre consultation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'chirurgie-plastique', service: 'Thérapie par Exosomes' } })}
              className="bg-[#D1A24C] text-[#1c2431] px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:bg-[#c4bcb4] hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ExosomeTherapy; 
