import React from 'react';
import { motion } from 'framer-motion';
import { FiSmile, FiArrowRight } from 'react-icons/fi';

const BienEtreFeminin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-rose-500 to-rose-700 pt-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bien-être Féminin
            </h1>
            <p className="text-xl mb-8">
              Des solutions pour votre bien-être au quotidien : gestion du stress, relaxation, accompagnement psychologique et conseils personnalisés pour une vie épanouie.
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
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Gestion du Stress & Relaxation</h2>
            <p className="text-gray-700 mb-4">Nous vous accompagnons dans la gestion du stress, l'amélioration du sommeil et la relaxation grâce à des techniques adaptées à vos besoins.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Ateliers de relaxation et méditation</li>
              <li>Conseils pour un sommeil réparateur</li>
              <li>Gestion des émotions et du stress</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Accompagnement Psychologique</h2>
            <p className="text-gray-700 mb-4">Un soutien psychologique personnalisé pour vous aider à traverser les moments difficiles et à renforcer votre bien-être mental.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Entretiens individuels</li>
              <li>Groupes de parole et ateliers bien-être</li>
              <li>Conseils pour l'épanouissement personnel</li>
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
            Prête à prendre soin de votre bien-être ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Notre équipe est à votre écoute pour vous accompagner et vous proposer des solutions adaptées à votre bien-être quotidien.
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

export default BienEtreFeminin; 