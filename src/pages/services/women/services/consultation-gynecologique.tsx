import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowRight, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../../components/LoadingSpinner';

const ConsultationGynecologique: React.FC = () => {
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
              Consultation Gynécologique
            </h1>
            <p className="text-xl mb-8">
              Des consultations personnalisées pour votre santé féminine : bilan complet, dépistages, prévention et conseils adaptés à chaque étape de la vie.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'Services Féminins', service: 'Consultation Gynécologique' } })}
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
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Bilan & Prévention</h2>
            <p className="text-gray-700 mb-4">Nous réalisons un bilan complet de votre santé gynécologique, incluant dépistages, prévention des maladies féminines et conseils personnalisés.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Dépistage des cancers féminins</li>
              <li>Bilan hormonal et évaluation du cycle</li>
              <li>Conseils sur la contraception et la prévention</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Accompagnement & Conseils</h2>
            <p className="text-gray-700 mb-4">Un accompagnement bienveillant pour répondre à toutes vos questions sur la santé féminine, l'hygiène de vie, la sexualité, la ménopause et le bien-être global.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Éducation à la santé féminine</li>
              <li>Conseils sur la sexualité et le bien-être intime</li>
              <li>Prise en charge des troubles hormonaux et de la ménopause</li>
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
            Prête à prendre soin de votre santé ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Notre équipe vous accompagne pour un suivi personnalisé et des conseils adaptés à vos besoins. Prenez rendez-vous ou contactez-nous pour toute question.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact', { state: { specialite: 'women', service: 'Consultation Gynécologique' } })}
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

export default ConsultationGynecologique; 