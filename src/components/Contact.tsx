import React, { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiCalendar, FiClock, FiMessageSquare, FiSend, FiArrowLeft } from 'react-icons/fi';

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

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 
    ${focusedField === fieldName 
      ? 'border-blue-500 shadow-md shadow-blue-100' 
      : hoveredField === fieldName
        ? 'border-blue-300'
        : 'border-gray-200'
    }
    focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
    bg-white
  `;

  const iconVariants = {
    initial: { scale: 1, color: '#9CA3AF' },
    hover: { scale: 1.1, color: '#3B82F6', transition: { duration: 0.2 } },
    focused: { scale: 1.1, color: '#2563EB', transition: { duration: 0.2 } }
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
        className="absolute left-3 top-3.5 text-gray-400"
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
    <div className="relative min-h-screen pt-32 pb-12 overflow-hidden bg-gradient-to-b from-blue-400 to-blue-800">
      {/* Blobs SVG blancs flous en fond */}
      <svg className="absolute -top-24 -left-24 w-[350px] h-[350px] z-0 blur-[60px] opacity-30" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="250" rx="250" ry="200" fill="white" />
      </svg>
      <svg className="absolute -bottom-24 -right-24 w-[350px] h-[350px] z-0 blur-[60px] opacity-20" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="250" rx="250" ry="200" fill="white" />
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
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/80 border border-blue-400 rounded-full shadow-md text-blue-700 font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 z-20"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span className="text-lg">Retour</span>
        </motion.button>
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 backdrop-blur-sm backdrop-filter"
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Prendre rendez-vous / Contact
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="absolute left-3 top-3.5 text-gray-400"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all duration-200"
              >
                <motion.span whileHover={{ rotate: 15 }} className="inline-block">
                  <FiSend className="w-5 h-5" />
                </motion.span>
                Prendre rendez-vous
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 