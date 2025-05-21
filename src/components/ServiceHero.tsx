import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  description: string;
  bgColorFrom?: string;
  bgColorTo?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  bgColorFrom = 'from-blue-900',
  bgColorTo = 'to-blue-800'
}) => {
  return (
    <section className="relative min-h-[60vh] bg-blue-900 pt-24">
      <div className={`absolute inset-0 bg-gradient-to-r ${bgColorFrom} ${bgColorTo}`} />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-white py-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero; 