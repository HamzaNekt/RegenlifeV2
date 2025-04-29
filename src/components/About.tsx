import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiSmile, FiAward } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import doctorImage from '../media/portrait-smiling-male-doctor.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        mass: 1.5,
        duration: 1.5,
      },
    },
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        mass: 1.5,
        duration: 1.5,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        mass: 1.5,
        duration: 1.5,
      },
    },
  };

  const statsVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        mass: 1.5,
        duration: 1.5,
      },
    },
  };

  const features = [
    {
      icon: <FiHeart className="w-6 h-6 text-cyan-400" />,
      title: "Santé Masculine",
      description: "Une approche spécialisée centrée sur les besoins spécifiques de la santé masculine."
    },
    {
      icon: <FiUsers className="w-6 h-6 text-cyan-400" />,
      title: "Accompagnement Personnalisé",
      description: "Des programmes sur mesure adaptés à votre profil et à vos objectifs de santé."
    },
    {
      icon: <FiSmile className="w-6 h-6 text-cyan-400" />,
      title: "Bien-être Intégral",
      description: "Une vision globale de la santé, du physique au mental, pour un équilibre optimal."
    },
    {
      icon: <FiAward className="w-6 h-6 text-cyan-400" />,
      title: "Expertise Reconnue",
      description: "Une équipe de spécialistes dédiés à votre santé et à votre bien-être."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch h-full mb-16"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative rounded-lg overflow-hidden shadow-xl h-full"
          >
            <img
              src={doctorImage}
              alt="Dr. Spécialiste - REGENLIFE"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div variants={contentVariants} className="space-y-6 flex flex-col justify-center h-full">
            <motion.h2 
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Notre Vision de la Santé Masculine
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-700"
            >
              Chez REGENLIFE, nous avons compris que la santé masculine nécessite une approche 
              unique et personnalisée. Notre mission est de transformer la façon dont les hommes 
              perçoivent et gèrent leur santé, en leur offrant des solutions adaptées à leurs besoins 
              spécifiques et à leur mode de vie.
            </motion.p>
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-700"
            >
              Notre équipe pluridisciplinaire combine expertise médicale traditionnelle et approches 
              innovantes pour traiter non seulement les symptômes, mais aussi les causes profondes 
              des problèmes de santé. Nous croyons en une médecine préventive qui vous permet de 
              maintenir une vitalité optimale à long terme.
            </motion.p>
            <motion.div
              variants={statsVariants}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <h3 className="text-2xl font-bold text-cyan-500 mb-2">10+</h3>
                <p className="text-gray-600">Années d'expérience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <h3 className="text-2xl font-bold text-cyan-500 mb-2">1000+</h3>
                <p className="text-gray-600">Patients satisfaits</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <h3 className="text-2xl font-bold text-cyan-500 mb-2">100%</h3>
                <p className="text-gray-600">Approche personnalisée</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <h3 className="text-2xl font-bold text-cyan-500 mb-2">24/7</h3>
                <p className="text-gray-600">Support disponible</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 