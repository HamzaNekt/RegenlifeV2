import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiActivity, FiCalendar, FiUsers, FiCoffee, FiBook, FiSmile, FiAward } from 'react-icons/fi';
import womenHealthVideo from '../media/7188417_Woman_Women_3840x2160.mp4';

const WomenHealth = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const services = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Consultation Gynécologique",
      description: "Des consultations personnalisées pour votre santé féminine."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Suivi de Grossesse",
      description: "Un accompagnement complet pendant votre grossesse."
    },
    {
      icon: <FiSmile className="w-6 h-6" />,
      title: "Bien-être Féminin",
      description: "Des solutions pour votre bien-être au quotidien."
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: "Thérapie de Couple",
      description: "Soutien psychologique pour les couples"
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: "Ateliers Bien-être",
      description: "Séances de relaxation et de méditation"
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Éducation à la Santé",
      description: "Formation et information sur la santé féminine"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Santé Féminine
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prenez soin de votre santé avec notre équipe d'experts dédiés
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={womenHealthVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Une approche holistique de la santé féminine
            </h3>
            <p className="text-lg text-gray-600">
              Notre équipe de professionnels de santé est dédiée à votre bien-être. Nous proposons des services adaptés à chaque étape de votre vie, de l'adolescence à la ménopause.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiAward className="w-6 h-6 text-pink-500 mt-1 mr-3" />
                <span className="text-gray-700">Des consultations personnalisées</span>
              </li>
              <li className="flex items-start">
                <FiAward className="w-6 h-6 text-pink-500 mt-1 mr-3" />
                <span className="text-gray-700">Un suivi médical complet</span>
              </li>
              <li className="flex items-start">
                <FiAward className="w-6 h-6 text-pink-500 mt-1 mr-3" />
                <span className="text-gray-700">Des solutions adaptées à vos besoins</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-pink-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WomenHealth; 