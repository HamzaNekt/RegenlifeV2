import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiActivity, FiHeart, FiUserCheck, FiSearch, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
import { FaHeartbeat, FaStethoscope, FaProcedures, FaRunning, FaRegHospital, FaUserMd } from 'react-icons/fa';
import LoadingSpinner from '../../../components/LoadingSpinner';

const cardiologieServices = [
  {
    id: 'consultation-cardiologique',
    title: 'Consultation Cardiologique',
    description: "Évaluation complète de votre santé cardiaque par nos cardiologues experts.",
    path: '/services/cardiologie/consultation',
    icon: <FaStethoscope className="h-6 w-6" />,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'echographie-cardiaque',
    title: 'Échographie Cardiaque',
    description: "Examens d'imagerie précis pour diagnostiquer les problèmes cardiaques.",
    path: '/services/cardiologie/echographie',
    icon: <FaHeartbeat className="h-6 w-6" />,
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'suivi-cardiaque',
    title: 'Suivi Cardiaque',
    description: "Accompagnement personnalisé pour la gestion des maladies cardiaques.",
    path: '/services/cardiologie/suivi',
    icon: <FaUserMd className="h-6 w-6" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'prevention-cardiaque',
    title: 'Prévention Cardiaque',
    description: "Programmes de prévention et conseils pour maintenir un cœur en santé.",
    path: '/services/cardiologie/prevention',
    icon: <FaRunning className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'readaptation-cardiaque',
    title: 'Réadaptation Cardiaque',
    description: "Programmes de rééducation pour retrouver une activité physique adaptée.",
    path: '/services/cardiologie/readaptation',
    icon: <FaProcedures className="h-6 w-6" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'urgences-cardiaques',
    title: 'Urgences Cardiaques',
    description: "Prise en charge rapide et efficace des urgences cardiaques.",
    path: '/services/cardiologie/urgences',
    icon: <FaRegHospital className="h-6 w-6" />,
    color: 'from-orange-500 to-orange-600'
  }
];

const Cardiologie: React.FC = () => {
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
      <section className="relative h-[90vh] flex items-center justify-center pt-22 overflow-hidden" style={{ backgroundImage: 'url(/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat"
          >
            Service de Cardiologie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4 font-montserrat"
          >
            Notre service de cardiologie offre des soins complets et personnalisés pour votre santé cardiaque.
          </motion.p>
        </div>
        {/* Flou/débordement bas du hero */}
        <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none z-20" style={{background: 'linear-gradient(180deg, rgba(44,49,63,0) 0%, rgba(28,36,49,0.7) 60%, #1c2431 100%)', backdropFilter: 'blur(12px)'}} />
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-[#1c2431] to-[#2e333f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-white"
          >
            Nos Services de Cardiologie
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cardiologieServices.map((service, index) => (
              <motion.div
                key={service.id}
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
                  <div className="relative h-full bg-[#2e333f] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className={`w-14 h-14 bg-[#D1A24C] rounded-xl flex items-center justify-center mb-6 text-white text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#D1A24C] transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-[#c4bcb4] mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-[#D1A24C] font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
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
            className="mt-16 bg-gradient-to-r from-[#2e333f] to-[#1c2431] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Notre équipe est à votre écoute pour vous accompagner, vous informer et vous proposer un suivi personnalisé. Prenez rendez-vous ou contactez-nous pour toute question.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact', { state: { specialite: 'cardiologie', service: 'Générique' } })}
              className="bg-[#D1A24C] text-[#1c2431] px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:bg-[#c4bcb4] hover:shadow-xl transition-shadow duration-300"
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

export default Cardiologie; 
