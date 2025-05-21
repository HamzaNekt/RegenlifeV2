import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHeart, FiActivity, FiTarget, FiBarChart2, FiDroplet, FiUser, FiBook, FiThermometer, FiWind, FiSun, FiZap, FiTrendingUp, FiShield, FiRadio, FiPackage, FiCpu, FiSmile } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import urologieIcon from '../assets/icons/urologie.png';
import traumatologieIcon from '../assets/icons/traumatologie.png';
import chirurgieIcon from '../assets/icons/chirurgie-plastique.png';
import radiologieIcon from '../assets/icons/radiologie.png';
import biologieIcon from '../assets/icons/biologie.png';
import sexologieIcon from '../assets/icons/sexologie.png';
import cardiologieIcon from '../assets/icons/cardiologie.png';
import orlIcon from '../assets/icons/orl.png';
import preventionIcon from '../assets/icons/prevention.png';
import paramedicalIcon from '../assets/icons/paramedical.png';

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  path: string;
  category: 'masculine' | 'feminine' | 'both';
  icon: React.ReactNode;
}

// Service icons mapping
const serviceIcons: { [key: string]: React.ReactNode } = {
  'abpm': <FiActivity className="h-6 w-6" />,
  'advanced-medical-services': <FiTarget className="h-6 w-6" />,
  'core-to-floor': <FiActivity className="h-6 w-6" />,
  'dxa-body-composition': <FiBarChart2 className="h-6 w-6" />,
  'eboo-therapy': <FiDroplet className="h-6 w-6" />,
  'executive-physical': <FiUser className="h-6 w-6" />,
  'functional-medicine-consult': <FiBook className="h-6 w-6" />,
  'hormone-therapy': <FiHeart className="h-6 w-6" />,
  'iv-therapy': <FiDroplet className="h-6 w-6" />,
  'nad-plus-therapy': <FiZap className="h-6 w-6" />,
  'nutrition-counseling': <FiPackage className="h-6 w-6" />,
  'oxygen-therapy': <FiWind className="h-6 w-6" />,
  'ozone-therapy': <FiSun className="h-6 w-6" />,
  'peptide-therapy': <FiHeart className="h-6 w-6" />,
  'pnoe-metabolic-testing': <FiThermometer className="h-6 w-6" />,
  'prp': <FiDroplet className="h-6 w-6" />,
  'sonic-wave-therapy': <FiRadio className="h-6 w-6" />,
  'therapeutic-plasma-exchange': <FiDroplet className="h-6 w-6" />,
  'vitamin-shots': <FiPackage className="h-6 w-6" />,
  'weight-optimization': <FiTrendingUp className="h-6 w-6" />,
  'wellness-technology': <FiCpu className="h-6 w-6" />
};

// Service data
const services: Service[] = [
  {
    id: 'abpm',
    title: "Surveillance Ambulatoire de la Pression Artérielle",
    description: "Surveillance précise de votre pression artérielle sur 24 heures pour une évaluation complète de votre santé cardiovasculaire.",
    path: "/abpm",
    category: 'both',
    icon: serviceIcons['abpm']
  },
  {
    id: 'advanced-medical-services',
    title: "Services Médicaux Avancés",
    description: "Accédez à des services médicaux de pointe pour optimiser votre santé et votre bien-être.",
    path: "/advanced-medical-services",
    category: 'both',
    icon: serviceIcons['advanced-medical-services']
  },
  {
    id: 'core-to-floor',
    title: "Core to Floor",
    description: "Programme d'entraînement complet pour renforcer votre corps de la tête aux pieds.",
    path: "/core-to-floor",
    category: 'both',
    icon: serviceIcons['core-to-floor']
  },
  {
    id: 'dxa-body-composition',
    title: "Analyse de Composition Corporelle DXA",
    description: "Évaluation précise de votre composition corporelle pour optimiser votre santé et vos performances.",
    path: "/dxa-body-composition",
    category: 'both',
    icon: serviceIcons['dxa-body-composition']
  },
  {
    id: 'eboo-therapy',
    title: "Thérapie EBOO",
    description: "Thérapie innovante combinant oxygénation et ozonothérapie pour une santé optimale.",
    path: "/eboo-therapy",
    category: 'both',
    icon: serviceIcons['eboo-therapy']
  },
  {
    id: 'executive-physical',
    title: "Bilan de Santé Exécutif",
    description: "Évaluation complète de votre santé adaptée aux professionnels exigeants.",
    path: "/executive-physical",
    category: 'both',
    icon: serviceIcons['executive-physical']
  },
  {
    id: 'functional-medicine-consult',
    title: "Consultation en Médecine Fonctionnelle",
    description: "Approche holistique de votre santé pour identifier et traiter les causes profondes.",
    path: "/functional-medicine-consult",
    category: 'both',
    icon: serviceIcons['functional-medicine-consult']
  },
  {
    id: 'hormone-therapy',
    title: "Thérapie Hormonale",
    description: "Optimisation de vos hormones pour une meilleure santé et vitalité.",
    path: "/hormone-therapy",
    category: 'both',
    icon: serviceIcons['hormone-therapy']
  },
  {
    id: 'iv-therapy',
    title: "Thérapie Intraveineuse",
    description: "Administration directe de nutriments et vitamines pour une santé optimale.",
    path: "/iv-therapy",
    category: 'both',
    icon: serviceIcons['iv-therapy']
  },
  {
    id: 'nad-plus-therapy',
    title: "Thérapie NAD+",
    description: "Thérapie anti-âge et régénérative pour améliorer votre vitalité cellulaire.",
    path: "/nad-plus-therapy",
    category: 'both',
    icon: serviceIcons['nad-plus-therapy']
  },
  {
    id: 'nutrition-counseling',
    title: "Conseil en Nutrition",
    description: "Guidance personnalisée pour optimiser votre alimentation et votre santé.",
    path: "/nutrition-counseling",
    category: 'both',
    icon: serviceIcons['nutrition-counseling']
  },
  {
    id: 'oxygen-therapy',
    title: "Thérapie à l'Oxygène",
    description: "Améliorez votre santé cellulaire et votre énergie avec notre thérapie à l'oxygène hyperbare.",
    path: "/oxygen-therapy",
    category: 'both',
    icon: serviceIcons['oxygen-therapy']
  },
  {
    id: 'ozone-therapy',
    title: "Ozonothérapie",
    description: "Thérapie naturelle utilisant l'ozone pour stimuler votre système immunitaire.",
    path: "/ozone-therapy",
    category: 'both',
    icon: serviceIcons['ozone-therapy']
  },
  {
    id: 'peptide-therapy',
    title: "Thérapie par Peptides",
    description: "Utilisation de peptides pour optimiser votre santé et vos performances.",
    path: "/peptide-therapy",
    category: 'both',
    icon: serviceIcons['peptide-therapy']
  },
  {
    id: 'pnoe-metabolic-testing',
    title: "Test Métabolique PNOE",
    description: "Analysez votre métabolisme et optimisez vos performances avec notre test métabolique de pointe.",
    path: "/pnoe-metabolic-testing",
    category: 'both',
    icon: serviceIcons['pnoe-metabolic-testing']
  },
  {
    id: 'prp',
    title: "Thérapie PRP",
    description: "Utilisation de votre plasma riche en plaquettes pour la régénération tissulaire.",
    path: "/prp",
    category: 'both',
    icon: serviceIcons['prp']
  },
  {
    id: 'sonic-wave-therapy',
    title: "Thérapie par Ondes Sonores",
    description: "Stimulation tissulaire par ondes sonores pour la régénération et la récupération.",
    path: "/sonic-wave-therapy",
    category: 'both',
    icon: serviceIcons['sonic-wave-therapy']
  },
  {
    id: 'therapeutic-plasma-exchange',
    title: "Échange Plasmatique Thérapeutique",
    description: "Procédure avancée pour purifier votre sang et améliorer votre santé.",
    path: "/therapeutic-plasma-exchange",
    category: 'both',
    icon: serviceIcons['therapeutic-plasma-exchange']
  },
  {
    id: 'vitamin-shots',
    title: "Injections de Vitamines",
    description: "Administration directe de vitamines essentielles pour votre santé.",
    path: "/vitamin-shots",
    category: 'both',
    icon: serviceIcons['vitamin-shots']
  },
  {
    id: 'weight-optimization',
    title: "Optimisation du Poids",
    description: "Programme personnalisé pour atteindre et maintenir votre poids idéal.",
    path: "/weight-optimization",
    category: 'both',
    icon: serviceIcons['weight-optimization']
  },
  {
    id: 'wellness-technology',
    title: "Technologie de Bien-être",
    description: "Utilisation de technologies de pointe pour optimiser votre santé et votre bien-être.",
    path: "/wellness-technology",
    category: 'both',
    icon: serviceIcons['wellness-technology']
  }
];

// Regroupement des services par spécialité
const specialties = [
  {
    name: 'Urologie',
    ids: [
      'abpm', 'prp', 'peptide-therapy', 'cell-therapy', 'core-to-floor',
    ],
  },
  {
    name: 'Traumatologie',
    ids: [
      'sonic-wave-therapy', 'prp', 'core-to-floor', 'cell-therapy',
    ],
  },
  {
    name: 'Chirurgie Plastique',
    ids: [
      'prp', 'exosome-therapy', 'next-beauty-aesthetics', 'cell-therapy',
    ],
  },
  {
    name: 'Radiologie',
    ids: [
      'dxa-body-composition', 'abpm',
    ],
  },
  {
    name: 'Biologie',
    ids: [
      'advanced-medical-services', 'therapeutic-plasma-exchange', 'vitamin-shots', 'nutrition-counseling', 'wellness-technology', 'eboo-therapy', 'ozone-therapy', 'iv-therapy', 'nad-plus-therapy', 'oxygen-therapy', 'pnoe-metabolic-testing', 'weight-optimization', 'executive-physical', 'functional-medicine-consult', 'hormone-therapy',
    ],
  },
];

function getServicesByIds(ids: string[]) {
  return services.filter((service) => ids.includes(service.id));
}

// Liste des spécialités avec leur chemin d'index et une image illustrative
const specialtiesLinks = [
  {
    name: 'Urologie',
    path: '/services/urologie',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={urologieIcon} alt="Urologie" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Traumatologie',
    path: '/services/traumatologie',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={traumatologieIcon} alt="Traumatologie" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Chirurgie Plastique',
    path: '/services/chirurgie-plastique',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={chirurgieIcon} alt="Chirurgie Plastique" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Radiologie',
    path: '/services/radiologie',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={radiologieIcon} alt="Radiologie" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Biologie',
    path: '/services/biologie',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={biologieIcon} alt="Biologie" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Sexologie',
    path: '/services/sexologie',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={sexologieIcon} alt="Sexologie" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Cardiologie',
    path: '/services/cardiologie',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={cardiologieIcon} alt="Cardiologie" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'ORL',
    path: '/services/orl',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={orlIcon} alt="ORL" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Médecine Préventive',
    path: '/services/medecine-preventive',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={preventionIcon} alt="Médecine Préventive" className="w-16 h-16 object-contain" />,
  },
  {
    name: 'Paramédicale',
    path: '/services/paramediacle',
    color: 'bg-white border border-primary',
    iconBg: 'bg-primary',
    icon: <img src={paramedicalIcon} alt="Paramédicale" className="w-16 h-16 object-contain" />,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Nos Spécialités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
            Découvrez nos pôles d'expertise médicale et accédez à l'ensemble de nos services par spécialité.
          </p>
        </motion.div>
        {/* Liste des spécialités avec logos stylés */}
        <div className="grid md:grid-cols-3 gap-10">
          {specialtiesLinks.map((spec) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
              className={`rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full w-full flex flex-col items-center justify-center ${spec.color}`}
            >
              <Link
                to={spec.path}
                className="block h-full w-full flex flex-col items-center justify-center py-16 px-8 group text-center"
                aria-label={`Découvrir la spécialité ${spec.name}`}
              >
                <div className={`flex items-center justify-center rounded-full shadow-lg mb-8 ${spec.iconBg} w-24 h-24 group-hover:scale-110 transition-transform duration-300`}>
                  {spec.icon}
                </div>
                <h3 className="text-2xl font-semibold font-montserrat mb-4 text-gray-900 group-hover:text-primary group-hover:underline">{spec.name}</h3>
                <span className="inline-flex items-center text-primary font-medium font-montserrat mt-auto">
                  Accéder
                  <FiArrowRight className="ml-2" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 