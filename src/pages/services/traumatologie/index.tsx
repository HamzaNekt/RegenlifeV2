import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FiArrowRight, FiDroplet, FiActivity, FiThermometer, FiRadio, FiBarChart2 } from 'react-icons/fi';

const traumaServices = [
  {
    id: 'stem-cell-therapy',
    title: 'Thérapie par Cellules Souches',
    description: 'Traitement régénératif pour la réparation des tissus et la guérison accélérée des lésions traumatiques.',
    path: '/services/traumatologie/stem-cell-therapy',
    icon: <FiDroplet className="h-6 w-6" />
  },
  {
    id: 'prp-therapy',
    title: 'Thérapie PRP',
    description: 'Traitement utilisant le plasma riche en plaquettes pour la régénération tissulaire et la réparation des lésions.',
    path: '/services/traumatologie/prp-therapy',
    icon: <FiDroplet className="h-6 w-6" />
  },
  {
    id: 'cryotherapy',
    title: 'Cryothérapie',
    description: 'Traitement par le froid pour réduire l\'inflammation et la douleur associées aux traumatismes.',
    path: '/services/traumatologie/cryotherapy',
    icon: <FiThermometer className="h-6 w-6" />
  },
  {
    id: 'sonic-wave-therapy',
    title: 'Thérapie par Ondes Soniques',
    description: 'Traitement non invasif pour la régénération tissulaire et osseuse après un traumatisme.',
    path: '/services/traumatologie/sonic-wave-therapy',
    icon: <FiRadio className="h-6 w-6" />
  },
  {
    id: 'core-to-floor',
    title: 'Core to Floor',
    description: 'Programme de rééducation et de renforcement pour la récupération après un traumatisme.',
    path: '/services/traumatologie/core-to-floor',
    icon: <FiBarChart2 className="h-6 w-6" />
  }
];

const Traumatologie: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Service de Traumatologie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4"
          >
            Notre service de traumatologie combine des approches thérapeutiques traditionnelles et innovantes pour une récupération optimale.
          </motion.p>
        </div>
      </section>
      {/* Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos Services de Traumatologie
          </motion.h2>
          <style>{`
            .trauma-slider .swiper-wrapper { align-items: center; }
            .trauma-slider .swiper-slide { transition: transform 0.3s; opacity: 0.4; transform: scale(0.8); }
            .trauma-slider .swiper-slide-active { opacity: 1; transform: scale(1); }
            .trauma-slider .swiper-slide-prev, .trauma-slider .swiper-slide-next { opacity: 0.7; transform: scale(0.9); }
            .trauma-slider .swiper-button-next, .trauma-slider .swiper-button-prev { color: #2563eb; background: white; width: 50px; height: 50px; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); transition: all 0.3s; }
            .trauma-slider .swiper-button-next:hover, .trauma-slider .swiper-button-prev:hover { background: #2563eb; color: white; }
            .trauma-slider .swiper-button-next:after, .trauma-slider .swiper-button-prev:after { font-size: 22px; font-weight: bold; }
            .trauma-slider .swiper-pagination { position: relative; bottom: -20px; margin-top: 20px; }
            .trauma-slider .swiper-pagination-bullet { width: 10px; height: 10px; background: #2563eb; opacity: 0.5; transition: all 0.3s; margin: 0 6px; }
            .trauma-slider .swiper-pagination-bullet-active { opacity: 1; width: 28px; border-radius: 5px; }
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
            className="trauma-slider"
          >
            {traumaServices.map((service) => (
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

export default Traumatologie; 