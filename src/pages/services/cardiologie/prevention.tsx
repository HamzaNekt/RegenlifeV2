import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiActivity, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';

const PreventionCardiaque: React.FC = () => {
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Prévention Cardiaque
            </h1>
            <p className="text-xl mb-8 font-montserrat">
              Des programmes personnalisés pour préserver votre santé cardiaque et réduire les risques de maladies cardiovasculaires.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'cardiologie', service: 'Prévention Cardiaque' } })}
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
        {/* Description Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#2e333f] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-[#D1A24C] mb-6 font-montserrat">
              Qu'est-ce que la Prévention Cardiaque ?
            </h2>
            <p className="text-lg text-[#c4bcb4] mb-6 font-montserrat">
              La prévention cardiaque est un ensemble de mesures et de programmes visant à maintenir une bonne santé cardiaque et à réduire les risques de maladies cardiovasculaires. Notre approche combine évaluation des risques, conseils personnalisés et suivi régulier.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Évaluation des Risques</h3>
                <p className="text-[#c4bcb4]">
                  Analyse complète des facteurs de risque cardiovasculaires.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Programme Personnalisé</h3>
                <p className="text-[#c4bcb4]">
                  Conseils et recommandations adaptés à votre profil.
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
              Avantages de la Prévention
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1c2431] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Détection Précoce</h3>
                  <p className="text-[#c4bcb4]">
                    Identification des facteurs de risque avant l'apparition de problèmes cardiaques.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1c2431] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Suivi Personnalisé</h3>
                  <p className="text-[#c4bcb4]">
                    Accompagnement adapté à vos besoins et à votre mode de vie.
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
              Programmes de Prévention
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">Bilan de Santé</h3>
                <p className="text-[#c4bcb4]">Évaluation complète de votre santé cardiovasculaire</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">Conseils Nutritionnels</h3>
                <p className="text-[#c4bcb4]">Recommandations alimentaires pour un cœur en santé</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">Activité Physique</h3>
                <p className="text-[#c4bcb4]">Programmes d'exercices adaptés à votre condition</p>
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
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Stationnement</h3>
                <p className="text-[#c4bcb4]">Parking gratuit disponible pour votre confort</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Transport</h3>
                <p className="text-[#c4bcb4]">Service de transport disponible sur demande</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiHome className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Accueil</h3>
                <p className="text-[#c4bcb4]">Salle d'attente confortable et accueil personnalisé</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/services/cardiologie"
            className="inline-block bg-[#D1A24C] text-[#1c2431] px-6 py-3 rounded-lg hover:bg-[#c4bcb4] transition-colors duration-300 font-montserrat"
          >
            Retour aux Services de Cardiologie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreventionCardiaque; 
