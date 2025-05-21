import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FiArrowRight } from 'react-icons/fi';
import { FaVenusMars, FaHeart, FaUserFriends, FaTransgender, FaBookOpen, FaHandHoldingHeart } from 'react-icons/fa';
import ServiceHero from '../../../components/ServiceHero';

const sexologieServices = [
  {
    id: 'consultation-sexologique',
    title: 'Consultation Sexologique',
    description: "Évaluation et accompagnement personnalisé pour les problématiques de santé sexuelle.",
    path: '/services/sexologie/consultation',
    icon: <FaVenusMars className="h-6 w-6" />
  },
  {
    id: 'therapie-couple',
    title: 'Thérapie de Couple',
    description: "Accompagnement professionnel pour améliorer l'intimité et la communication.",
    path: '/services/sexologie/therapie-couple',
    icon: <FaUserFriends className="h-6 w-6" />
  },
  {
    id: 'education-sexuelle',
    title: 'Éducation Sexuelle',
    description: "Informations et conseils pour une sexualité saine et épanouie.",
    path: '/services/sexologie/education',
    icon: <FaBookOpen className="h-6 w-6" />
  },
  {
    id: 'troubles-sexuels',
    title: 'Troubles Sexuels',
    description: "Diagnostic et traitement des dysfonctions sexuelles.",
    path: '/services/sexologie/troubles',
    icon: <FaHeart className="h-6 w-6" />
  },
  {
    id: 'sante-sexuelle',
    title: 'Santé Sexuelle',
    description: "Prévention et suivi de la santé sexuelle globale.",
    path: '/services/sexologie/sante',
    icon: <FaHandHoldingHeart className="h-6 w-6" />
  }
];

const Sexologie: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        title="Service de Sexologie"
        description="Notre service de sexologie propose un accompagnement professionnel, confidentiel et bienveillant pour tous les aspects de la santé sexuelle."
      />

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services de Sexologie</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Thérapie Sexuelle"
            description="Accompagnement personnalisé pour les difficultés sexuelles et l'amélioration du bien-être intime."
            link="/services/sexologie/therapie-sexuelle"
          />
          <ServiceCard
            title="Dépistage"
            description="Service de dépistage complet et confidentiel incluant des tests sanguins discrets."
            link="/services/sexologie/depistage"
          />
          <ServiceCard
            title="Éducation Sexuelle"
            description="Informations et conseils pour une sexualité saine et épanouie."
            link="/services/sexologie/education-sexuelle"
          />
          <ServiceCard
            title="Thérapie de Couple"
            description="Accompagnement professionnel pour améliorer l'intimité et la communication."
            link="/services/sexologie/therapie-couple"
          />
          <ServiceCard
            title="Troubles Sexuels"
            description="Diagnostic et traitement des dysfonctions sexuelles."
            link="/services/sexologie/troubles-sexuels"
          />
          <ServiceCard
            title="Santé Sexuelle"
            description="Prévention et suivi de la santé sexuelle globale."
            link="/services/sexologie/sante-sexuelle"
          />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={link}
      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
    >
      En savoir plus
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </motion.div>
);

export default Sexologie; 