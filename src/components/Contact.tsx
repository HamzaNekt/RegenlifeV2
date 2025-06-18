import React, { useState, ReactElement } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiCalendar, FiClock, FiMessageSquare, FiSend, FiArrowLeft } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const bgImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Récupérer specialite et service depuis l'URL ou le state
  let specialite = '';
  let service = '';
  if (location.state && (location.state as any).specialite) {
    specialite = (location.state as any).specialite;
    service = (location.state as any).service;
  } else if (location.search) {
    const params = new URLSearchParams(location.search);
    specialite = params.get('specialite') || '';
    service = params.get('service') || '';
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);
    try {
      // TODO: Remplacer par vos propres IDs EmailJS
      const SERVICE_ID = 'service_9eyymid';
      const TEMPLATE_ID = 'template_79pqpv3';
      const PUBLIC_KEY = 'WZK5vSxKdFNelINWl';
      const templateParams = {
        ...formState,
        specialite,
        service
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setFeedback('Votre message a bien été envoyé. Nous vous répondrons rapidement.');
      setFormState({ firstName: '', lastName: '', email: '', phone: '', date: '', time: '', notes: '' });
    } catch (err) {
      setFeedback("Une erreur s'est produite. Veuillez réessayer plus tard.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-['Montserrat']
    ${focusedField === fieldName 
      ? 'border-[#D1A24C] shadow-md shadow-[#D1A24C]/20' 
      : hoveredField === fieldName
        ? 'border-[#c4bcb4]'
        : 'border-[#c4bcb4]'
    }
    focus:outline-none focus:border-[#D1A24C] focus:ring-2 focus:ring-[#D1A24C]/20
    bg-white text-[#2e333f] placeholder-[#c4bcb4]
  `;

  const iconVariants = {
    initial: { scale: 1, color: '#c4bcb4' },
    hover: { scale: 1.1, color: '#D1A24C', transition: { duration: 0.2 } },
    focused: { scale: 1.1, color: '#D1A24C', transition: { duration: 0.2 } }
  };

  const inputWrapperVariants = {
    initial: { y: 0 },
    hover: { y: -2, transition: { duration: 0.2 } }
  };

  const renderInput = (fieldConfig: {
    name: string;
    type: string;
    placeholder: string;
    icon: ReactElement;
    delay: number;
  }) => (
    <motion.div 
      className="relative"
      variants={inputWrapperVariants}
      initial="initial"
      animate="initial"
      whileHover="hover"
      transition={{ delay: fieldConfig.delay }}
      onHoverStart={() => setHoveredField(fieldConfig.name)}
      onHoverEnd={() => setHoveredField(null)}
    >
      <motion.div 
        className="absolute left-3 top-3.5"
        variants={iconVariants}
        animate={
          focusedField === fieldConfig.name 
            ? 'focused' 
            : hoveredField === fieldConfig.name 
              ? 'hover' 
              : 'initial'
        }
      >
        {fieldConfig.icon}
      </motion.div>
      <input
        type={fieldConfig.type}
        name={fieldConfig.name}
        placeholder={fieldConfig.placeholder}
        value={formState[fieldConfig.name as keyof typeof formState]}
        onChange={handleChange}
        onFocus={() => setFocusedField(fieldConfig.name)}
        onBlur={() => setFocusedField(null)}
        className={inputClasses(fieldConfig.name) + ' pl-10'}
        required
      />
    </motion.div>
  );

  // Animation variants pour le container et les items
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
    <div className="relative min-h-screen pt-32 pb-12 overflow-hidden bg-[#1c2431]">
      {/* Hero Section avec image de fond et overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="absolute inset-0 bg-[#1c2431]/80 backdrop-blur-sm" />
      </div>

      {/* Blobs SVG dorés flous en fond */}
      <svg className="absolute -top-24 -left-24 w-[350px] h-[350px] z-0 blur-[60px] opacity-20" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="250" rx="250" ry="200" fill="#D1A24C" />
      </svg>
      <svg className="absolute -bottom-24 -right-24 w-[350px] h-[350px] z-0 blur-[60px] opacity-15" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="250" rx="250" ry="200" fill="#D1A24C" />
      </svg>

      <motion.div 
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={itemVariants}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-[#D1A24C]/30 rounded-full shadow-lg text-[#D1A24C] font-['Montserrat'] font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#D1A24C]/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D1A24C]/50 z-20"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span className="text-lg">Retour</span>
        </motion.button>

        <motion.div 
          variants={itemVariants}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-12 border border-[#D1A24C]/20"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-[#2e333f] font-['Montserrat']"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Prendre rendez-vous / Contact
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="specialite" value={specialite} />
            <input type="hidden" name="service" value={service} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderInput({
                name: 'firstName',
                type: 'text',
                placeholder: 'Prénom',
                icon: <FiUser className="w-5 h-5" />, 
                delay: 0.3
              })}
              {renderInput({
                name: 'lastName',
                type: 'text',
                placeholder: 'Nom',
                icon: <FiUser className="w-5 h-5" />, 
                delay: 0.4
              })}
            </div>

            {renderInput({
              name: 'email',
              type: 'email',
              placeholder: 'Email',
              icon: <FiMail className="w-5 h-5" />, 
              delay: 0.5
            })}

            {renderInput({
              name: 'phone',
              type: 'tel',
              placeholder: 'Téléphone',
              icon: <FiPhone className="w-5 h-5" />, 
              delay: 0.6
            })}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderInput({
                name: 'date',
                type: 'date',
                placeholder: '',
                icon: <FiCalendar className="w-5 h-5" />, 
                delay: 0.7
              })}
              {renderInput({
                name: 'time',
                type: 'time',
                placeholder: '',
                icon: <FiClock className="w-5 h-5" />, 
                delay: 0.8
              })}
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              variants={inputWrapperVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredField('notes')}
              onHoverEnd={() => setHoveredField(null)}
            >
              <motion.div 
                className="absolute left-3 top-3.5"
                variants={iconVariants}
                animate={
                  focusedField === 'notes' 
                    ? 'focused' 
                    : hoveredField === 'notes' 
                      ? 'hover' 
                      : 'initial'
                }
              >
                <FiMessageSquare className="w-5 h-5" />
              </motion.div>
              <textarea
                name="notes"
                placeholder="notes ou messages particuliers"
                value={formState.notes}
                onChange={handleChange}
                onFocus={() => setFocusedField('notes')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('notes') + ' pl-10 min-h-[120px] resize-y'}
              />
            </motion.div>

            {/* Feedback utilisateur */}
            {feedback && (
              <div className={`text-center font-semibold font-['Montserrat'] ${feedback.startsWith('Votre') ? 'text-green-600' : 'text-red-600'}`}>{feedback}</div>
            )}
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#D1A24C] to-[#c4bcb4] text-white font-['Montserrat'] font-bold text-lg shadow-lg hover:shadow-xl hover:from-[#c4bcb4] hover:to-[#D1A24C] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend className="w-5 h-5" />
              {sending ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 
