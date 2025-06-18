import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FiArrowRight, FiUserCheck, FiFeather, FiRefreshCw, FiHeart, FiCheckCircle, FiMapPin, FiTruck, FiHome } from 'react-icons/fi';
import LoadingSpinner from '../../../components/LoadingSpinner';

const osteopathieServices = [
  {
    id: 'osteopathie-structurelle',
    title: 'Ostéopathie Structurelle',
    description: 'Traitement des troubles musculo-squelettiques pour restaurer la mobilité.',
    path: '/services/paramediacle/osteopathie/structurelle',
    icon: <FiUserCheck className="h-6 w-6" />
  },
  {
    id: 'osteopathie-cranienne',
    title: 'Ostéopathie Crânienne',
    description: 'Approche douce pour soulager les tensions et améliorer le bien-être global.',
    path: '/services/paramediacle/osteopathie/cranienne',
    icon: <FiFeather className="h-6 w-6" />
  },
  {
    id: 'osteopathie-viscerale',
    title: 'Ostéopathie Viscérale',
    description: 'Travail sur la mobilité des organes internes pour optimiser la santé.',
    path: '/services/paramediacle/osteopathie/viscerale',
    icon: <FiRefreshCw className="h-6 w-6" />
  },
  {
    id: 'osteopathie-pediatrique',
    title: 'Ostéopathie Pédiatrique',
    description: 'Prise en charge adaptée pour les nourrissons et enfants.',
    path: '/services/paramediacle/osteopathie/pediatrique',
    icon: <FiHeart className="h-6 w-6" />
  }
];

const Osteopathie: React.FC = () => {
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
              Ostéopathie
            </h1>
            <p className="text-xl mb-8 font-montserrat">
              Une approche globale et manuelle pour restaurer l'équilibre du corps et soulager les douleurs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'paramediacle', service: 'Ostéopathie' } })}
              className="bg-[#D1A24C] text-[#1c2431] px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#c4bcb4] hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
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
              Qu'est-ce que l'Ostéopathie ?
            </h2>
            <p className="text-lg text-[#c4bcb4] mb-6 font-montserrat">
              L'ostéopathie est une approche thérapeutique manuelle qui vise à restaurer l'équilibre du corps en traitant les dysfonctionnements de la mobilité des tissus et des articulations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Approche Globale</h3>
                <p className="text-[#c4bcb4] font-montserrat">
                  Traitement qui considère le corps dans son ensemble et recherche la cause profonde des troubles.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Techniques Manuelles</h3>
                <p className="text-[#c4bcb4] font-montserrat">
                  Utilisation de manipulations douces et précises pour restaurer la mobilité et soulager la douleur.
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
              Avantages de l'Ostéopathie
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1c2431] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Soulagement de la Douleur</h3>
                  <p className="text-[#c4bcb4] font-montserrat">
                    Traitement efficace des douleurs musculo-squelettiques et articulaires.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1c2431] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Amélioration de la Mobilité</h3>
                  <p className="text-[#c4bcb4] font-montserrat">
                    Restauration de la mobilité articulaire et de la souplesse musculaire.
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
                <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">Ostéopathie Structurelle</h3>
                <p className="text-[#c4bcb4] font-montserrat">Traitement des troubles musculo-squelettiques et articulaires</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">Ostéopathie Viscérale</h3>
                <p className="text-[#c4bcb4] font-montserrat">Traitement des troubles digestifs et viscéraux</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">Ostéopathie Crânienne</h3>
                <p className="text-[#c4bcb4] font-montserrat">Traitement des troubles crâniens et du système nerveux</p>
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
                <p className="text-[#c4bcb4] font-montserrat">Parking gratuit disponible pour votre confort</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Transport</h3>
                <p className="text-[#c4bcb4] font-montserrat">Service de transport disponible sur demande</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#1c2431] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                  <FiHome className="w-6 h-6 text-[#D1A24C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1A24C] mb-3 font-montserrat">Accueil</h3>
                <p className="text-[#c4bcb4] font-montserrat">Salle d'attente confortable et accueil personnalisé</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/services/paramediacle"
            className="inline-block bg-[#D1A24C] text-[#1c2431] px-6 py-3 rounded-lg hover:bg-[#c4bcb4] transition-colors duration-300 font-montserrat font-semibold shadow"
          >
            Retour aux Services Paramédicaux
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Osteopathie; 
