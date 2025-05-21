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
import { FaEarListen, FaHeadSideCough, FaLungs, FaBed, FaUser, FaWeightScale } from 'react-icons/fa6';

const orlServices = [
  {
    id: 'consultation-orl',
    title: 'Consultation ORL',
    description: "Évaluation complète des troubles de l'oreille, du nez et de la gorge.",
    path: '/services/orl/consultation',
    icon: <FaEarListen className="h-6 w-6" />
  },
  {
    id: 'audiometrie',
    title: 'Audiométrie',
    description: "Tests auditifs complets pour évaluer votre capacité auditive.",
    path: '/services/orl/audiometrie',
    icon: <FaHeadSideCough className="h-6 w-6" />
  },
  {
    id: 'endoscopie',
    title: 'Endoscopie',
    description: "Examens endoscopiques pour visualiser les voies aériennes supérieures.",
    path: '/services/orl/endoscopie',
    icon: <FaLungs className="h-6 w-6" />
  },
  {
    id: 'chirurgie-orl',
    title: 'Chirurgie ORL',
    description: "Interventions chirurgicales pour traiter les pathologies ORL.",
    path: '/services/orl/chirurgie',
    icon: <FaUser className="h-6 w-6" />
  },
  {
    id: 'troubles-sommeil',
    title: 'Troubles du Sommeil',
    description: "Diagnostic et traitement des troubles respiratoires du sommeil.",
    path: '/services/orl/sommeil',
    icon: <FaBed className="h-6 w-6" />
  },
  {
    id: 'vertiges',
    title: 'Vertiges',
    description: "Évaluation et traitement des troubles de l'équilibre.",
    path: '/services/orl/vertiges',
    icon: <FaWeightScale className="h-6 w-6" />
  }
];

const ORL: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Service ORL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Notre service d'ORL offre des soins spécialisés pour l'oreille, le nez et la gorge.
          </motion.p>
        </div>
      </section>
      {/* Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos Services ORL
          </motion.h2>
          <style>{`
            .orl-slider .swiper-wrapper { align-items: center; }
            .orl-slider .swiper-slide { transition: transform 0.3s; opacity: 0.4; transform: scale(0.8); }
            .orl-slider .swiper-slide-active { opacity: 1; transform: scale(1); }
            .orl-slider .swiper-slide-prev, .orl-slider .swiper-slide-next { opacity: 0.7; transform: scale(0.9); }
            .orl-slider .swiper-button-next, .orl-slider .swiper-button-prev { color: #2563eb; background: white; width: 50px; height: 50px; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); transition: all 0.3s; }
            .orl-slider .swiper-button-next:hover, .orl-slider .swiper-button-prev:hover { background: #2563eb; color: white; }
            .orl-slider .swiper-button-next:after, .orl-slider .swiper-button-prev:after { font-size: 22px; font-weight: bold; }
            .orl-slider .swiper-pagination { position: relative; bottom: -20px; margin-top: 20px; }
            .orl-slider .swiper-pagination-bullet { width: 10px; height: 10px; background: #2563eb; opacity: 0.5; transition: all 0.3s; margin: 0 6px; }
            .orl-slider .swiper-pagination-bullet-active { opacity: 1; width: 28px; border-radius: 5px; }
          `}</style>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            initialSlide={1}
            className="orl-slider"
          >
            {orlServices.map((service) => (
              <SwiperSlide key={service.id} style={{ width: '420px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full w-full"
                >
                  <Link
                    to={service.path}
                    className="block p-8 h-full flex flex-col"
                    aria-label={`En savoir plus sur ${service.title}`}
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 text-3xl">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium mt-auto">
                      En savoir plus
                      <FiArrowRight className="ml-2" />
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ORL; 