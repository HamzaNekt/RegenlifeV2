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
    <div className="min-h-screen bg-[#1c2431]">
      {/* Hero Section */}
      <section className="relative h-[90vh] pt-20">
        <div className="absolute inset-0">
          <img src={ox3} alt="Thérapie Hyperbare" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl font-montserrat"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#D1A24C] font-montserrat">
              Thérapie Hyperbare
            </h1>
            <p className="text-xl mb-8 text-[#c4bcb4] font-montserrat">
              Une technologie médicale avancée qui optimise l'oxygénation des tissus pour accélérer la guérison et améliorer votre santé.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAppointmentClick}
              className="bg-[#D1A24C] text-[#1c2431] px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#c4bcb4] hover:shadow-xl transition-shadow duration-300 font-montserrat"
            >
              Prendre Rendez-vous
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none z-20" style={{background: 'linear-gradient(180deg, rgba(44,49,63,0) 0%, rgba(28,36,49,0.7) 60%, #1c2431 100%)', backdropFilter: 'blur(12px)'}} />
      </section>

      {/* What is Hyperbaric Therapy Section */}
      <section className="py-20 bg-[#1c2431] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1c2431]/80 backdrop-blur-md z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h2 className="text-3xl font-bold text-[#D1A24C] font-montserrat">
                Qu'est-ce que la Thérapie Hyperbare ?
              </h2>
              <p className="text-lg text-[#c4bcb4] font-montserrat">
                La thérapie hyperbare est une méthode médicale reconnue qui améliore significativement le processus naturel de guérison du corps en optimisant l'oxygénation des tissus. Elle est considérée comme l'une des formes de traitement les plus avancées et efficaces de la médecine moderne.
              </p>
              <p className="text-lg text-[#c4bcb4] font-montserrat">
                Bien que largement utilisée depuis des décennies, la thérapie hyperbare a gagné en attention depuis 2019, lorsque le prix Nobel de médecine a été décerné pour la découverte du mécanisme par lequel les cellules vivantes détectent et réagissent aux changements de niveaux d'oxygène.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#2e333f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#D1A24C] font-montserrat mb-4">
              Excellence en Thérapie
            </h2>
            <p className="text-xl text-[#c4bcb4] max-w-3xl mx-auto font-montserrat">
              Notre équipe médicale possède des compétences avancées en médecine hyperbare et une vaste expérience acquise dans des hôpitaux et centres médicaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1c2431] rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-[#D1A24C]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                Qualité Premium
              </h3>
              <p className="text-[#c4bcb4] font-montserrat">
                Un service d'excellence avec un accompagnement personnalisé et un suivi médical de qualité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1c2431] rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                <FiActivity className="w-6 h-6 text-[#D1A24C]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                100% Oxygène Pur
              </h3>
              <p className="text-[#c4bcb4] font-montserrat">
                Utilisation d'oxygène médical pur pour des traitements optimaux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1c2431] rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-[#c4bcb4] rounded-lg flex items-center justify-center mb-4">
                <FiClock className="w-6 h-6 text-[#D1A24C]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                3 ATA de Pression
              </h3>
              <p className="text-[#c4bcb4] font-montserrat">
                Pression maximale de 3 ATA pour des traitements extrêmement efficaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20 bg-[#1c2431]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#D1A24C] font-montserrat">
                Comment se déroule le traitement ?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1 mr-3" />
                  <span className="text-[#c4bcb4] font-montserrat">Consultation initiale avec notre équipe médicale</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1 mr-3" />
                  <span className="text-[#c4bcb4] font-montserrat">Évaluation personnalisée de vos besoins</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1 mr-3" />
                  <span className="text-[#c4bcb4] font-montserrat">Sessions de thérapie dans notre caisson hyperbare</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#D1A24C] mt-1 mr-3" />
                  <span className="text-[#c4bcb4] font-montserrat">Suivi régulier de vos progrès</span>
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
      <section className="py-20 bg-[#c4bcb4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#1c2431] font-montserrat mb-6">
              Prêt à améliorer votre santé ?
            </h2>
            <p className="text-xl text-[#1c2431] mb-8 font-montserrat">
              Prenez rendez-vous dès aujourd'hui pour découvrir les bienfaits de la thérapie hyperbare.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAppointmentClick}
              className="bg-[#1c2431] text-[#D1A24C] px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#D1A24C] hover:text-[#1c2431] hover:shadow-xl transition-shadow duration-300 mx-auto font-montserrat"
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
