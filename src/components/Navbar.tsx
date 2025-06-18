import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiCalendar, 
  FiChevronDown,
  FiChevronRight,
  FiActivity,
  FiUsers,
  FiSettings,
  FiHelpCircle,
  FiArrowRight,
  FiHeart,
  FiDroplet,
  FiZap,
  FiSun,
  FiTarget,
  FiThermometer,
  FiTrendingUp,
  FiRefreshCw,
  FiPackage,
  FiFeather,
  FiWind,
  FiRadio,
  FiCpu,
  FiBook,
  FiShield,
  FiGlobe,
  FiPhone
} from 'react-icons/fi';
import logoBlanc from '../assets/logo/regenlife-logo-blanc.png';
import logoBleu from '../assets/logo/regenlife-logo-blanc.png';
import logoRose from '../assets/logo/regenlife-logo-blanc.png';

// Styles for custom scrollbar
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.7);
  }
`;

const Navbar = ({ gynecoTheme = false, isAppointment = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const serviceDropdowns = [
    {
      label: 'Urologie',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiDroplet /></span>,
      path: '/services/urologie',
      subMenu: [
        { label: 'Thérapie Cellulaire', path: '/services/urologie/cell-therapy' },
        { label: 'Thérapie PRP', path: '/services/urologie/prp-therapy' },
        { label: 'Thérapie par Peptides', path: '/services/urologie/peptide-therapy' },
        { label: 'Thérapie par Cellules Souches', path: '/services/urologie/stem-cell-therapy' },
        { label: 'Cancer de la Prostate', path: '/services/urologie/cancer-prostate' },
      ],
    },
    {
      label: 'Services Féminins',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiHeart /></span>,
      path: '/services/women/services/index',
      subMenu: [
        { label: 'Consultation Gynécologique', path: '/services/women/services/consultation-gynecologique' },
        { label: 'Bien-être Féminin', path: '/services/women/services/bien-etre-feminin' },
        { label: 'Thérapie de Couple', path: '/services/women/services/therapie-de-couple' },
        { label: 'Éducation à la Santé', path: '/services/women/services/education-sante' },
      ],
    },
    {
      label: 'Traumatologie',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiActivity /></span>,
      path: '/services/traumatologie',
      subMenu: [
        { label: 'Thérapie PRP', path: '/services/traumatologie/prp-therapy' },
        { label: 'Cryothérapie', path: '/services/traumatologie/cryotherapy' },
        { label: 'Thérapie par Ondes Sonores', path: '/services/traumatologie/sonic-wave-therapy' },
        { label: 'Core to Floor', path: '/services/traumatologie/core-to-floor' },
        { label: 'Thérapie par Cellules Souches', path: '/services/traumatologie/stem-cell-therapy' },
      ],
    },
    {
      label: 'Chirurgie Plastique',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiUsers /></span>,
      path: '/services/chirurgie-plastique',
      subMenu: [
        { label: 'Thérapie par Exosomes', path: '/services/chirurgie-plastique/exosome-therapy' },
        { label: 'Next Beauty Aesthetics', path: '/services/chirurgie-plastique/next-beauty-aesthetics' },
        { label: 'Thérapie par Cellules Souches', path: '/services/chirurgie-plastique/stem-cell-therapy' },
        { label: 'Thérapie PRP', path: '/services/chirurgie-plastique/prp-therapy' },
      ],
    },
    {
      label: 'Radiologie',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiRadio /></span>,
      path: '/services/radiologie',
      subMenu: [
        { label: 'ABPM', path: '/services/radiologie/abpm' },
        { label: 'Services de Radiologie', path: '/services/radiologie/radiology-services' },
        { label: 'IRM Corps Entier Préventive', path: '/services/radiologie/irm-corps-entier-preventive' },
      ],
    },
    {
      label: 'Biologie',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiCpu /></span>,
      path: '/services/biologie',
      subMenu: [
        { label: 'Thérapie NAD+', path: '/services/biologie/nad-plus-therapy' },
        { label: 'Ozonothérapie', path: '/services/biologie/ozone-therapy' },
        { label: 'Thérapie EBOO', path: '/services/biologie/eboo-therapy' },
        { label: 'Échange Plasmatique Thérapeutique', path: '/services/biologie/therapeutic-plasma-exchange' },
        { label: 'Injections de Vitamines', path: '/services/biologie/vitamin-shots' },
        { label: 'Services Médicaux Avancés', path: '/services/biologie/advanced-medical-services' },
        { label: 'Prélèvements & Analyses Préventives', path: '/services/biologie/prelevements-analyses-preventives' },
      ],
    },
    {
      label: 'Paramédical',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiFeather /></span>,
      path: '/services/paramediacle',
      subMenu: [
        { label: 'Ostéopathie', path: '/services/paramediacle/osteopathie' },
        { label: 'Saignées Médicales', path: '/services/paramediacle/saignees-medicales' },
        { label: 'Kinésithérapie', path: '/services/paramediacle/kinesitherapie' },
      ],
    },
    {
      label: 'Sexologie',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiActivity /></span>,
      path: '/services/sexologie',
      subMenu: [
        { label: 'Consultation Sexologique', path: '/services/sexologie/consultation' },
        { label: 'Thérapie de Couple', path: '/services/sexologie/therapie-couple' },
        { label: 'Éducation Sexuelle', path: '/services/sexologie/education' },
        { label: 'Troubles Sexuels', path: '/services/sexologie/troubles' },
        { label: 'Santé Sexuelle', path: '/services/sexologie/sante' },
        { label: 'Dépistage', path: '/services/sexologie/depistage' },
      ],
    },
    {
      label: 'Cardiologie',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiHeart /></span>,
      path: '/services/cardiologie',
      subMenu: [
        { label: 'Consultation Cardiologique', path: '/services/cardiologie/consultation' },
        { label: 'Échographie Cardiaque', path: '/services/cardiologie/echographie' },
        { label: 'Suivi Cardiaque', path: '/services/cardiologie/suivi' },
        { label: 'Prévention Cardiaque', path: '/services/cardiologie/prevention' },
        { label: 'Réadaptation Cardiaque', path: '/services/cardiologie/readaptation' },
        { label: 'Urgences Cardiaques', path: '/services/cardiologie/urgences' },
      ],
    },
    {
      label: 'ORL',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiBook /></span>,
      path: '/services/orl',
      subMenu: [
        { label: 'Consultation ORL', path: '/services/orl/consultation' },
        { label: 'Audiométrie', path: '/services/orl/audiometrie' },
        { label: 'Endoscopie', path: '/services/orl/endoscopie' },
        { label: 'Chirurgie ORL', path: '/services/orl/chirurgie' },
        { label: 'Troubles du Sommeil', path: '/services/orl/troubles-sommeil' },
        { label: 'Vertiges', path: '/services/orl/vertiges' },
      ],
    },
    {
      label: 'Médecine Préventive',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiShield /></span>,
      path: '/services/medecine-preventive',
      subMenu: [
        { label: 'Bilan de Santé', path: '/services/medecine-preventive/bilan' },
        { label: 'Vaccinations', path: '/services/medecine-preventive/vaccinations' },
        { label: 'Dépistage', path: '/services/medecine-preventive/depistage' },
        { label: 'Conseils Nutrition', path: '/services/medecine-preventive/nutrition' },
        { label: 'Activité Physique', path: '/services/medecine-preventive/activite-physique' },
        { label: 'Suivi Personnalisé', path: '/services/medecine-preventive/suivi-personnalise' },
        { label: 'Dépistage Gastro-Intestinal', path: '/services/medecine-preventive/depistage-gastro' },
      ],
    },
    {
      label: 'Soins Etrangers',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiGlobe /></span>,
      path: '/services/soins-etrangers',
      subMenu: undefined,
    },
    {
      label: 'Installation & Retraite',
      icon: <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c4bcb4] text-[#1c2431] transition-colors duration-200"><FiGlobe /></span>,
      path: '/services/installation-retraite',
      subMenu: undefined,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add scrollbar styles to head
    const styleElement = document.createElement('style');
    styleElement.textContent = scrollbarStyles;
    document.head.appendChild(styleElement);

    // Cleanup
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // La fonction de nettoyage ne retourne rien d'autre
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
    setActiveDropdown('Services');
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
      setActiveDropdown(null);
    }, 120); // délai court pour éviter la fermeture instantanée
  };

  const renderDropdownContent = (item: any) => {
    switch (item.type) {
      case 'grid':
        return (
          <div className="p-4 custom-scrollbar max-h-[80vh] overflow-y-auto">
            {item.subItems.map((subItem: any) => (
              <div key={subItem.label}>
              <motion.a
                href={subItem.path}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col p-4 rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'bg-gray-50 hover:bg-blue-50'
                    : 'bg-gray-800/50 hover:bg-gray-800/70'
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className={`p-2 rounded-lg mr-3 ${
                    isScrolled
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-700 text-white'
                  }`}>
                    {subItem.icon}
                  </div>
                  <span className={`font-semibold ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    {subItem.label}
                  </span>
                </div>
                <p className={`text-sm ${
                  isScrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {subItem.description}
                </p>
              </motion.a>
                {subItem.subMenu && subItem.subMenu.length > 0 && (
                  <div className="mt-2 ml-4">
                    <div className="grid grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {subItem.subMenu.map((subMenuItem: any, index: number) => {
                        const icons = [
                          <FiHeart />, <FiDroplet />, <FiZap />, 
                          <FiSun />, <FiTarget />, <FiThermometer />,
                          <FiTrendingUp />, <FiRefreshCw />, <FiPackage />,
                          <FiFeather />, <FiWind />, <FiActivity />,
                          <FiSettings />, <FiHelpCircle />, <FiUsers />
                        ];
                        const icon = icons[index % icons.length];
                        
                        return (
                          <motion.a
                            key={subMenuItem.label}
                            href={subMenuItem.path}
                            whileHover={{ scale: 1.02 }}
                            className={`p-3 rounded-lg transition-all duration-200 flex flex-col ${
                              isScrolled
                                ? 'bg-gray-50 hover:bg-blue-50'
                                : 'bg-gray-800/50 hover:bg-gray-800/70'
                            }`}
                          >
                            <div className={`mb-2 ${
                              isScrolled ? 'text-blue-600' : 'text-blue-400'
                            }`}>
                              {icon}
                            </div>
                            <h4 className={`font-medium mb-1 ${
                              isScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                              {subMenuItem.label}
                            </h4>
                            <p className={`text-xs ${
                              isScrolled ? 'text-gray-600' : 'text-gray-300'
                            }`}>
                              {subMenuItem.description}
                            </p>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'with-image':
        return (
          <div className="p-4">
            {item.subItems.map((subItem: any) => (
              <motion.a
                key={subItem.label}
                href={subItem.path}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 rounded-lg transition-all duration-200 mb-2 ${
                  isScrolled
                    ? 'bg-gray-50 hover:bg-blue-50'
                    : 'bg-gray-800/50 hover:bg-gray-800/70'
                }`}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                  <img
                    src={subItem.image}
                    alt={subItem.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    {subItem.label}
                  </h3>
                  <p className={`text-sm ${
                    isScrolled ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    {subItem.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        );

      case 'with-description':
        return (
          <div className="p-4">
            {item.subItems.map((subItem: any) => (
              <motion.a
                key={subItem.label}
                href={subItem.path}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 mb-2 ${
                  isScrolled
                    ? 'bg-gray-50 hover:bg-blue-50'
                    : 'bg-gray-800/50 hover:bg-gray-800/70'
                }`}
              >
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    {subItem.label}
                  </h3>
                  <p className={`text-sm ${
                    isScrolled ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    {subItem.description}
                  </p>
                </div>
                <div className={`ml-4 ${
                  isScrolled ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {subItem.icon}
                </div>
              </motion.a>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const isWomenService = location.pathname.startsWith('/services/women/');

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed w-full z-50 transition-all duration-500 font-montserrat tracking-wide
          ${isAppointment
            ? 'bg-blue-600'
            : isScrolled
              ? gynecoTheme
                ? 'bg-pink-300/90 backdrop-blur-lg shadow-2xl shadow-pink-200/40'
                : 'bg-gradient-to-r from-[#181F2A]/90 via-[#181F2A]/40 to-[#181F2A]/90 backdrop-blur-lg shadow-2xl shadow-blue-900/40'
              : 'bg-transparent backdrop-blur-none'}
        `}
      >
        <div className="flex items-center justify-between h-24 w-full">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer flex items-center pl-2"
              onClick={() => navigate('/')}
            >
              <img
                src={isAppointment ? logoBlanc : (isScrolled && !gynecoTheme ? (isWomenService ? logoRose : logoBleu) : logoBlanc)}
                alt="Regenlife Logo"
              className="h-16 w-auto transition-all duration-300"
              style={{ maxHeight: 64 }}
              />
            <span className="ml-2 text-2xl font-baskerville text-white select-none">Regenlife</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 h-full">
              {/* Accueil */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/')}
              className={`relative px-5 py-2 mx-2 text-base font-bold font-montserrat transition-all duration-300 overflow-hidden group h-full flex items-center hover:text-[#D1A24C] ${
                  isAppointment
                    ? 'text-white'
                  : isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                Accueil
              </motion.button>

              {/* Services Dropdown Multi-niveaux */}
              <div
                className="relative group"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setDropdownOpen((open) => !open);
                    setActiveDropdown(dropdownOpen ? null : 'Services');
                  }}
                className={`relative px-5 py-2 mx-2 text-base font-bold font-montserrat transition-all duration-300 overflow-hidden group h-full flex items-center hover:text-[#D1A24C] ${
                  isScrolled ? 'text-white' : 'text-white'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                <span className="flex items-center font-montserrat">
                    Services
                    <FiChevronDown className={`ml-1 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                </motion.button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-xl shadow-xl z-50 bg-[#1c2431]/90 text-white backdrop-blur-md font-montserrat"
                    >
                      {/* Liste des spécialités */}
                    <div>
                        {serviceDropdowns.map((spec, idx) => (
                          <div
                            key={spec.label}
                            className="relative group/sub"
                            onMouseEnter={() => setActiveDropdown(spec.label)}
                            onMouseLeave={() => setActiveDropdown('Services')}
                          >
                            <div className="flex items-center">
                              <button
                                onClick={() => {
                                  navigate(spec.path);
                                  setDropdownOpen(false);
                                  setActiveDropdown(null);
                                }}
                              className="flex-1 flex items-center px-6 py-4 text-left transition-colors group/sub hover:text-[#D1A24C] hover:bg-[#232b3e]"
                              style={{ background: activeDropdown === spec.label ? 'rgba(255,255,255,0.04)' : undefined }}
                              >
                                <span className="mr-3">{spec.icon}</span>
                                <span className="font-semibold">{spec.label}</span>
                              </button>
                              {spec.subMenu && spec.subMenu.length > 0 && (
                                <button
                                  onClick={e => {
                                    e.stopPropagation();
                                    setActiveDropdown(spec.label);
                                  }}
                                  onMouseEnter={() => setActiveDropdown(spec.label)}
                                className="px-3 py-4 hover:text-[#D1A24C] transition-colors"
                                  aria-label={`Voir les services de ${spec.label}`}
                                >
                                  <FiChevronRight />
                                </button>
                              )}
                            </div>
                            {/* Sous-menu des services de la spécialité */}
                            {spec.subMenu && spec.subMenu.length > 0 && (
                              <AnimatePresence>
                                {activeDropdown === spec.label && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                  className="absolute top-0 left-full ml-2 w-72 rounded-xl shadow-xl z-50 bg-[#1c2431]/90 text-white backdrop-blur-md font-montserrat"
                                    onMouseEnter={() => setActiveDropdown(spec.label)}
                                    onMouseLeave={() => setActiveDropdown('Services')}
                                  >
                                    <div className="py-2">
                                      {spec.subMenu.map((srv) => (
                                        <button
                                          key={srv.label}
                                          onClick={() => { navigate(srv.path); setDropdownOpen(false); setActiveDropdown(null); }}
                                        className="w-full text-left px-6 py-3 transition-colors hover:text-[#D1A24C] hover:bg-[#232b3e]"
                                        >
                                          {srv.label}
                                        </button>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* À propos */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/about')}
              className={`relative px-5 py-2 mx-2 text-base font-bold font-montserrat transition-all duration-300 overflow-hidden group h-full flex items-center hover:text-[#D1A24C] ${
                isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                À propos
              </motion.button>

              {/* Forum */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/forum')}
              className={`relative px-5 py-2 mx-2 text-base font-bold font-montserrat transition-all duration-300 overflow-hidden group h-full flex items-center hover:text-[#D1A24C] ${
                isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                Forum
              </motion.button>
            </div>

          {/* Téléphone */}
          <div className="hidden md:flex items-center pr-20">
              <a
                href="tel:0774779385"
              className="flex items-center text-white font-bold text-base hover:text-[#D1A24C]"
                style={{ textDecoration: 'none' }}
              >
              <FiPhone className="w-5 h-5 mr-2" />
                0774779385
              </a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`${
                isScrolled
                  ? 'bg-white/90 backdrop-blur-lg'
                  : 'bg-black/50 backdrop-blur-lg'
              } shadow-xl`}
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                {/* Accueil */}
                <motion.button
                  onClick={() => {
                    navigate('/');
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-xl font-bold transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:bg-gray-50 hover:text-primary'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Accueil
                </motion.button>

                {/* Services Dropdown */}
                <div className="relative">
                  <motion.button
                    onClick={() => {
                      setActiveDropdown(activeDropdown === 'Services' ? null : 'Services');
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xl font-bold transition-colors duration-300 flex items-center justify-between ${
                      isScrolled
                        ? 'text-gray-800 hover:bg-gray-50 hover:text-primary'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Services</span>
                    <FiChevronDown className={`transition-transform duration-300 ${activeDropdown === 'Services' ? 'rotate-180' : ''}`} />
                  </motion.button>

                  {activeDropdown === 'Services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-6 space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar"
                    >
                      {serviceDropdowns.map((item) => (
                        <div key={item.label} className="relative">
                          <motion.button
                            onClick={() => {
                              if (item.subMenu) {
                                setActiveSubDropdown(activeSubDropdown === item.label ? null : item.label);
                              } else {
                                navigate(item.path);
                                setIsOpen(false);
                              }
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-bold transition-colors duration-300 flex items-center justify-between ${
                              isScrolled
                                ? 'text-gray-700 hover:text-primary'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            <span>{item.label}</span>
                            {item.subMenu && (
                              <span className="ml-2 cursor-pointer">
                                <FiChevronDown className={`transition-transform duration-300 ${activeSubDropdown === item.label ? 'rotate-180' : ''}`} />
                              </span>
                            )}
                          </motion.button>

                          {item.subMenu && activeSubDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar"
                            >
                              {item.subMenu.map((subItem: any) => (
                                <motion.a
                                  key={subItem.label}
                                  href={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-4 py-3 text-base font-medium ${
                                    isScrolled
                                      ? 'text-gray-600 hover:text-primary'
                                      : 'text-gray-400 hover:text-white'
                                  }`}
                                >
                                  {subItem.label}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* À propos */}
                <motion.button
                  onClick={() => {
                    navigate('/about');
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-xl font-bold transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:bg-gray-50 hover:text-primary'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  À propos
                </motion.button>

                {/* Forum */}
                <motion.button
                  onClick={() => {
                    navigate('/forum');
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-xl font-bold transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:bg-gray-50 hover:text-primary'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Forum
                </motion.button>

                {/* Bouton téléphone mobile */}
                <a
                  href="tel:0774779385"
                  className="w-full mt-4 flex items-center justify-center text-white font-bold text-base hover:text-[#D1A24C]"
                  style={{ textDecoration: 'none' }}
                >
                  <FiPhone className="w-5 h-5 mr-2" />
                  0774779385
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
