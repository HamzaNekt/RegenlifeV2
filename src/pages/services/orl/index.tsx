import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaEarListen, FaHeadSideCough, FaLungs, FaBed, FaUser, FaWeightScale } from 'react-icons/fa6';

const orlServices = [
  {
    id: 'consultation-orl',
    title: 'Consultation ORL',
    description: "Évaluation complète des troubles de l'oreille, du nez et de la gorge.",
    path: '/services/orl/consultation',
    icon: <FaEarListen className="h-6 w-6" />,
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'audiometrie',
    title: 'Audiométrie',
    description: "Tests auditifs complets pour évaluer votre capacité auditive.",
    path: '/services/orl/audiometrie',
    icon: <FaHeadSideCough className="h-6 w-6" />,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'endoscopie',
    title: 'Endoscopie',
    description: "Examens endoscopiques pour visualiser les voies aériennes supérieures.",
    path: '/services/orl/endoscopie',
    icon: <FaLungs className="h-6 w-6" />,
    color: 'from-sky-500 to-sky-600'
  },
  {
    id: 'chirurgie-orl',
    title: 'Chirurgie ORL',
    description: "Interventions chirurgicales pour traiter les pathologies ORL.",
    path: '/services/orl/chirurgie',
    icon: <FaUser className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'troubles-sommeil',
    title: 'Troubles du Sommeil',
    description: "Diagnostic et traitement des troubles respiratoires du sommeil.",
    path: '/services/orl/sommeil',
    icon: <FaBed className="h-6 w-6" />,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'vertiges',
    title: 'Vertiges',
    description: "Évaluation et traitement des troubles de l'équilibre.",
    path: '/services/orl/vertiges',
    icon: <FaWeightScale className="h-6 w-6" />,
    color: 'from-violet-500 to-violet-600'
  }
];

const ORL: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-r from-teal-600 to-teal-800 flex items-center justify-center">
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

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos Services ORL
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orlServices.map((service, index) => (
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
                  <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-teal-600 font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                        En savoir plus
                        <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ORL; 