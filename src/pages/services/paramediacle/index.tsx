import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FiActivity, FiUserCheck, FiDroplet, FiArrowRight } from 'react-icons/fi';

const paramedicalServices = [
  {
    id: 'kinesitherapie',
    title: 'Kinésithérapie',
    description: 'Soins personnalisés pour restaurer, maintenir et améliorer vos capacités physiques.',
    path: '/services/paramediacle/kinesitherapie',
    icon: <FiActivity className="h-8 w-8" />
  },
  {
    id: 'osteopathie',
    title: 'Ostéopathie',
    description: 'Approche globale et manuelle pour restaurer l\'équilibre du corps et soulager les douleurs.',
    path: '/services/paramediacle/osteopathie',
    icon: <FiUserCheck className="h-8 w-8" />
  },
  {
    id: 'saignees-medicales',
    title: 'Saignées Médicales',
    description: 'Techniques ancestrales revisitées pour une prise en charge moderne et sécurisée.',
    path: '/services/paramediacle/saignees-medicales',
    icon: <FiDroplet className="h-8 w-8" />
  }
];

const Paramediacle: React.FC = () => {
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
            Service Paramédical
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Découvrez nos approches complémentaires pour optimiser votre santé et votre bien-être.
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
            Nos Services Paramédicaux
          </motion.h2>
          <style>{`
            .paramedical-slider .swiper-wrapper { align-items: center; }
            .paramedical-slider .swiper-slide { transition: transform 0.3s; opacity: 0.4; transform: scale(0.8); }
            .paramedical-slider .swiper-slide-active { opacity: 1; transform: scale(1); }
            .paramedical-slider .swiper-slide-prev, .paramedical-slider .swiper-slide-next { opacity: 0.7; transform: scale(0.9); }
            .paramedical-slider .swiper-button-next, .paramedical-slider .swiper-button-prev { color: #2563eb; background: white; width: 50px; height: 50px; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); transition: all 0.3s; }
            .paramedical-slider .swiper-button-next:hover, .paramedical-slider .swiper-button-prev:hover { background: #2563eb; color: white; }
            .paramedical-slider .swiper-button-next:after, .paramedical-slider .swiper-button-prev:after { font-size: 22px; font-weight: bold; }
            .paramedical-slider .swiper-pagination { position: relative; bottom: -20px; margin-top: 20px; }
            .paramedical-slider .swiper-pagination-bullet { width: 10px; height: 10px; background: #2563eb; opacity: 0.5; transition: all 0.3s; margin: 0 6px; }
            .paramedical-slider .swiper-pagination-bullet-active { opacity: 1; width: 28px; border-radius: 5px; }
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
            className="paramedical-slider"
          >
            {paramedicalServices.map((service) => (
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
                    className="block p-8 h-full flex flex-col items-center text-center"
                    aria-label={`En savoir plus sur ${service.title}`}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 text-4xl">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium mt-auto justify-center">
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

export default Paramediacle; 