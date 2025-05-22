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
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: <FiSmile className="w-8 h-8" />,
    title: 'Bien-être Féminin',
    description: 'Des solutions pour votre bien-être au quotidien.',
    path: '/services/women/services/bien-etre-feminin',
    color: 'from-rose-500 to-rose-600'
  },
  {
    icon: <FiActivity className="w-8 h-8" />,
    title: 'Thérapie de Couple',
    description: 'Soutien psychologique pour les couples.',
    path: '/services/women/services/therapie-de-couple',
    color: 'from-fuchsia-500 to-fuchsia-600'
  },
  {
    icon: <FiBook className="w-8 h-8" />,
    title: 'Éducation à la Santé',
    description: 'Formation et information sur la santé féminine.',
    path: '/services/women/services/education-sante',
    color: 'from-purple-500 to-purple-600'
  },
];

const WomenServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Services Féminins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Découvrez nos pôles d'expertise dédiés à la santé et au bien-être des femmes. Un accompagnement global, bienveillant et personnalisé à chaque étape de la vie.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos Services Féminins
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {womenServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={service.path}
                  className="block h-full"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-pink-600 font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                        En savoir plus
                        <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-pink-600 to-pink-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:bg-pink-50 hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WomenServicesIndex; 