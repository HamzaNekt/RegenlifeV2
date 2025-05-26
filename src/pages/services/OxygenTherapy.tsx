import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiClock, FiUsers, FiActivity } from 'react-icons/fi';
import ox1 from '../../media/ox1.jpg';
import ox2 from '../../media/ox2.jpg';
import ox3 from '../../media/ox3.png';

const OxygenTherapy = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/contact', { state: { specialite: 'Oxygénothérapie', service: 'Thérapie Hyperbare' } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-20">
        <div className="absolute inset-0">
          <img src={ox3} alt="Thérapie Hyperbare" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thérapie Hyperbare
            </h1>
            <p className="text-xl mb-8">
              Une technologie médicale avancée qui optimise l'oxygénation des tissus pour accélérer la guérison et améliorer votre santé.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAppointmentClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What is Hyperbaric Therapy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={ox1} alt="Thérapie Hyperbare" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Qu'est-ce que la Thérapie Hyperbare ?
              </h2>
              <p className="text-lg text-gray-600">
                La thérapie hyperbare est une méthode médicale reconnue qui améliore significativement le processus naturel de guérison du corps en optimisant l'oxygénation des tissus. Elle est considérée comme l'une des formes de traitement les plus avancées et efficaces de la médecine moderne.
              </p>
              <p className="text-lg text-gray-600">
                Bien que largement utilisée depuis des décennies, la thérapie hyperbare a gagné en attention depuis 2019, lorsque le prix Nobel de médecine a été décerné pour la découverte du mécanisme par lequel les cellules vivantes détectent et réagissent aux changements de niveaux d'oxygène.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Excellence en Thérapie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe médicale possède des compétences avancées en médecine hyperbare et une vaste expérience acquise dans des hôpitaux et centres médicaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Qualité Premium
              </h3>
              <p className="text-gray-600">
                Un service d'excellence avec un accompagnement personnalisé et un suivi médical de qualité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FiActivity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Oxygène Pur
              </h3>
              <p className="text-gray-600">
                Utilisation d'oxygène médical pur pour des traitements optimaux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FiClock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3 ATA de Pression
              </h3>
              <p className="text-gray-600">
                Pression maximale de 3 ATA pour des traitements extrêmement efficaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Comment se déroule le traitement ?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Consultation initiale avec notre équipe médicale</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Évaluation personnalisée de vos besoins</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Sessions de thérapie dans notre caisson hyperbare</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">Suivi régulier de vos progrès</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={ox2} alt="Processus de traitement" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à améliorer votre santé ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Prenez rendez-vous dès aujourd'hui pour découvrir les bienfaits de la thérapie hyperbare.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAppointmentClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto"
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

export default OxygenTherapy; 