import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceName = location.state?.serviceName || "Consultation";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-12">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={itemVariants}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span className="text-lg">Retour</span>
        </motion.button>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 backdrop-blur-sm backdrop-filter"
        >
          <AppointmentForm serviceName={serviceName} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Appointment; 