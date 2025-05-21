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
import { FaHeartbeat, FaStethoscope, FaProcedures, FaRunning, FaRegHospital, FaUserMd } from 'react-icons/fa';

const cardiologieServices = [
  {
    id: 'consultation-cardiologique',
    title: 'Consultation Cardiologique',
    description: "Évaluation complète de votre santé cardiaque par nos cardiologues experts.",
    path: '/services/cardiologie/consultation',
    icon: <FaStethoscope className="h-6 w-6" />
  },
  {
    id: 'echographie-cardiaque',
    title: 'Échographie Cardiaque',
    description: "Examens d'imagerie précis pour diagnostiquer les problèmes cardiaques.",
    path: '/services/cardiologie/echographie',
    icon: <FaHeartbeat className="h-6 w-6" />
  },
  {
    id: 'suivi-cardiaque',
    title: 'Suivi Cardiaque',
    description: "Accompagnement personnalisé pour la gestion des maladies cardiaques.",
    path: '/services/cardiologie/suivi',
    icon: <FaUserMd className="h-6 w-6" />
  },
  {
    id: 'prevention-cardiaque',
    title: 'Prévention Cardiaque',
    description: "Programmes de prévention et conseils pour maintenir un cœur en santé.",
    path: '/services/cardiologie/prevention',
    icon: <FaRunning className="h-6 w-6" />
  },
  {
    id: 'readaptation-cardiaque',
    title: 'Réadaptation Cardiaque',
    description: "Programmes de rééducation pour retrouver une activité physique adaptée.",
    path: '/services/cardiologie/readaptation',
    icon: <FaProcedures className="h-6 w-6" />
  },
  {
    id: 'urgences-cardiaques',
    title: 'Urgences Cardiaques',
    description: "Prise en charge rapide et efficace des urgences cardiaques.",
    path: '/services/cardiologie/urgences',
    icon: <FaRegHospital className="h-6 w-6" />
  }
];

const Cardiologie: React.FC = () => {
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
            Service de Cardiologie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Notre service de cardiologie offre des soins complets et personnalisés pour votre santé cardiaque.
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
            Nos Services de Cardiologie
          </motion.h2>
          <style>{`
            .cardiologie-slider .swiper-wrapper { align-items: center; }
            .cardiologie-slider .swiper-slide { transition: transform 0.3s; opacity: 0.4; transform: scale(0.8); }
            .cardiologie-slider .swiper-slide-active { opacity: 1; transform: scale(1); }
            .cardiologie-slider .swiper-slide-prev, .cardiologie-slider .swiper-slide-next { opacity: 0.7; transform: scale(0.9); }
            .cardiologie-slider .swiper-button-next, .cardiologie-slider .swiper-button-prev { color: #2563eb; background: white; width: 50px; height: 50px; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); transition: all 0.3s; }
            .cardiologie-slider .swiper-button-next:hover, .cardiologie-slider .swiper-button-prev:hover { background: #2563eb; color: white; }
            .cardiologie-slider .swiper-button-next:after, .cardiologie-slider .swiper-button-prev:after { font-size: 22px; font-weight: bold; }
            .cardiologie-slider .swiper-pagination { position: relative; bottom: -20px; margin-top: 20px; }
            .cardiologie-slider .swiper-pagination-bullet { width: 10px; height: 10px; background: #2563eb; opacity: 0.5; transition: all 0.3s; margin: 0 6px; }
            .cardiologie-slider .swiper-pagination-bullet-active { opacity: 1; width: 28px; border-radius: 5px; }
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
            className="cardiologie-slider"
          >
            {cardiologieServices.map((service) => (
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

export default Cardiologie; 