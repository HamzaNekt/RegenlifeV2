import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiActivity, FiCalendar, FiUsers, FiCoffee, FiBook, FiDroplet, FiPackage, FiSmile, FiUserCheck, FiFeather } from 'react-icons/fi';

const womenHealthServices = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Consultation Gynécologique",
    description: "Bilan de santé complet, dépistages et suivi personnalisé à chaque étape de la vie."
  },
  {
    icon: <FiCalendar className="w-8 h-8" />,
    title: "Suivi de Grossesse",
    description: "Accompagnement médical et humain pendant la grossesse et après l'accouchement."
  },
  {
    icon: <FiSmile className="w-8 h-8" />,
    title: "Bien-être Féminin",
    description: "Gestion du stress, ateliers bien-être, relaxation et accompagnement psychologique."
  },
  {
    icon: <FiDroplet className="w-8 h-8" />,
    title: "Santé Hormonale & Ménopause",
    description: "Prise en charge des troubles hormonaux, de la ménopause et de leurs impacts sur la qualité de vie."
  },
  {
    icon: <FiUserCheck className="w-8 h-8" />,
    title: "Prévention & Dépistage",
    description: "Dépistage des cancers féminins, prévention des maladies cardiovasculaires et osseuses."
  },
  {
    icon: <FiFeather className="w-8 h-8" />,
    title: "Accompagnement Fertilité",
    description: "Conseils et suivi pour la fertilité, la conception et la planification familiale."
  },
  {
    icon: <FiCoffee className="w-8 h-8" />,
    title: "Ateliers Nutrition & Mode de Vie",
    description: "Éducation nutritionnelle, conseils d'hygiène de vie et gestion du poids."
  },
  {
    icon: <FiBook className="w-8 h-8" />,
    title: "Éducation à la Santé",
    description: "Information, prévention et empowerment pour toutes les femmes."
  }
];

const Gynecologie: React.FC = () => {
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
              Santé de la Femme
            </h1>
            <p className="text-xl mb-8">
              Un accompagnement global, bienveillant et personnalisé pour chaque femme, à chaque étape de sa vie. Prévention, dépistage, suivi, bien-être et empowerment féminin sont au cœur de notre engagement.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Thematic Sections */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Prévention & Dépistage</h2>
            <p className="text-gray-700 mb-4">Nous mettons l'accent sur la prévention et le dépistage précoce des maladies féminines (cancers, maladies cardiovasculaires, ostéoporose) pour préserver votre santé à long terme.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Dépistage des cancers du sein, du col de l'utérus et des ovaires</li>
              <li>Bilan de santé gynécologique régulier</li>
              <li>Évaluation du risque cardiovasculaire et osseux</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Bien-être & Accompagnement</h2>
            <p className="text-gray-700 mb-4">Notre équipe vous accompagne dans toutes les dimensions de votre bien-être : gestion du stress, équilibre hormonal, accompagnement psychologique, ateliers nutrition et relaxation.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Gestion du stress et de la fatigue</li>
              <li>Accompagnement de la ménopause et des troubles hormonaux</li>
              <li>Ateliers bien-être, nutrition et activité physique</li>
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services pour la Santé de la Femme</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {womenHealthServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-pink-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
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

export default Gynecologie; 