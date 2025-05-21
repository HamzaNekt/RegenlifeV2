import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiSmile, FiActivity, FiBook, FiArrowRight } from 'react-icons/fi';

const womenServices = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: 'Consultation Gynécologique',
    description: 'Des consultations personnalisées pour votre santé féminine.',
    path: '/services/women/services/consultation-gynecologique',
  },
  {
    icon: <FiSmile className="w-8 h-8" />,
    title: 'Bien-être Féminin',
    description: 'Des solutions pour votre bien-être au quotidien.',
    path: '/services/women/services/bien-etre-feminin',
  },
  {
    icon: <FiActivity className="w-8 h-8" />,
    title: 'Thérapie de Couple',
    description: 'Soutien psychologique pour les couples.',
    path: '/services/women/services/therapie-de-couple',
  },
  {
    icon: <FiBook className="w-8 h-8" />,
    title: 'Éducation à la Santé',
    description: 'Formation et information sur la santé féminine.',
    path: '/services/women/services/education-sante',
  },
];

const WomenServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-pink-500 to-pink-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Services Féminins
            </h1>
            <p className="text-xl mb-8">
              Découvrez nos pôles d'expertise dédiés à la santé et au bien-être des femmes. Un accompagnement global, bienveillant et personnalisé à chaque étape de la vie.
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
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Prévention, Bien-être & Accompagnement</h2>
            <p className="text-gray-700 mb-4">Notre équipe vous accompagne dans toutes les dimensions de votre santé : prévention, dépistage, bien-être, accompagnement psychologique et empowerment féminin.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Consultations personnalisées</li>
              <li>Bien-être et accompagnement psychologique</li>
              <li>Éducation à la santé et ateliers thématiques</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Un Espace Dédié aux Femmes</h2>
            <p className="text-gray-700 mb-4">Des solutions adaptées à chaque étape de la vie, de l'adolescence à la ménopause, dans un environnement bienveillant et confidentiel.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Accompagnement global et personnalisé</li>
              <li>Professionnels à l'écoute</li>
              <li>Respect, confidentialité et empowerment</li>
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services Féminins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {womenServices.map((service, index) => (
            <Link to={service.path} key={service.title} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-4 text-pink-500 shadow-[0_0_0_6px_rgba(236,72,153,0.08)] group-hover:shadow-[0_0_0_10px_rgba(236,72,153,0.15)] transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
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
            Notre équipe est à votre écoute pour vous accompagner, vous informer et vous proposer un suivi personnalisé. Prenez rendez-vous ou contactez-nous pour toute question.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:bg-pink-700 hover:shadow-xl transition-shadow duration-300"
          >
            Prendre Rendez-vous
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WomenServicesIndex; 