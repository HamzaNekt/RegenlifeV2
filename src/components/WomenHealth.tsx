import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiActivity,FiBook, FiSmile, FiAward } from 'react-icons/fi';
import womenHealthVideo from '../media/7188417_Woman_Women_3840x2160.mp4';
import { Link } from 'react-router-dom';

const WomenHealth = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Consultation Gynécologique",
      description: "Des consultations personnalisées pour votre santé féminine.",
      path: "/services/women/services/consultation-gynecologique"
    },
    {
      icon: <FiSmile className="w-6 h-6" />,
      title: "Bien-être Féminin",
      description: "Des solutions pour votre bien-être au quotidien.",
      path: "/services/women/services/bien-etre-feminin"
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: "Thérapie de Couple",
      description: "Soutien psychologique pour les couples",
      path: "/services/women/services/therapie-de-couple"
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Éducation à la Santé",
      description: "Formation et information sur la santé féminine",
      path: "/services/women/services/education-sante"
    }
  ];

  return (
    <section className="py-20 bg-[#1c2431] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#D1A24C]">
            Santé Féminine
          </h2>
          <p className="text-xl text-[#c4bcb4] max-w-2xl mx-auto">
            Prenez soin de votre santé avec notre équipe d'experts dédiés
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={womenHealthVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Une approche holistique de la santé féminine
            </h3>
            <p className="text-lg text-[#c4bcb4]">
              Notre équipe de professionnels de santé est dédiée à votre bien-être. Nous proposons des services adaptés à chaque étape de votre vie, de l'adolescence à la ménopause.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiAward className="w-6 h-6" style={{ color: '#D1A24C' }} />
                <span className="text-[#c4bcb4] ml-3">Des consultations personnalisées</span>
              </li>
              <li className="flex items-start">
                <FiAward className="w-6 h-6" style={{ color: '#D1A24C' }} />
                <span className="text-[#c4bcb4] ml-3">Un suivi médical complet</span>
              </li>
              <li className="flex items-start">
                <FiAward className="w-6 h-6" style={{ color: '#D1A24C' }} />
                <span className="text-[#c4bcb4] ml-3">Des solutions adaptées à vos besoins</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <Link to={service.path} key={service.title} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-[#2e333f] rounded-3xl p-8 shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group hover:ring-2 hover:ring-[#D1A24C]"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md" style={{ background: '#c4bcb4', color: '#1c2431' }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#c4bcb4]">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WomenHealth; 