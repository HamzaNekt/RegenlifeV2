import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiCalendar, FiClock, FiMessageSquare, FiSend } from 'react-icons/fi';

interface AppointmentFormProps {
  serviceName: string;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ serviceName }) => {
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
    icon: JSX.Element;
    delay: number;
  }) => (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: fieldConfig.delay }}
      variants={inputWrapperVariants}
      initial="initial"
      whileHover="hover"
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Prise de rendez-vous pour {serviceName}
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
            placeholder="Notes ou questions particulières"
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
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg
                     flex items-center gap-2 shadow-lg hover:bg-blue-700 
                     transition-all duration-200"
          >
            <motion.span
              whileHover={{ rotate: 15 }}
              className="inline-block"
            >
              <FiSend className="w-5 h-5" />
            </motion.span>
            Prendre rendez-vous
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AppointmentForm; 