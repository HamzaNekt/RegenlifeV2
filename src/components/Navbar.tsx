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
  FiShield
} from 'react-icons/fi';
import logoBlanc from '../assets/logo/regenlife-logo-blanc.png';
import logoBleu from '../assets/logo/regenlife-logo-bleu.png';
import logoRose from '../assets/logo/regenlife-logo-rose.png';

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
  const navigate = useNavigate();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const serviceDropdowns = [
    {
      label: 'Urologie',
      icon: <FiDroplet />,
      path: '/services/urologie',
      subMenu: [
        { label: 'Thérapie Cellulaire', path: '/services/urologie/cell-therapy' },
        { label: 'Thérapie PRP', path: '/services/urologie/prp-therapy' },
        { label: 'Thérapie par Peptides', path: '/services/urologie/peptide-therapy' },
        { label: 'Thérapie par Cellules Souches', path: '/services/urologie/stem-cell-therapy' },
      ],
    },
    {
      label: 'Services Féminins',
      icon: <FiHeart className="text-pink-500" />,
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
      icon: <FiActivity />,
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
      icon: <FiUsers />,
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
      icon: <FiRadio />,
      path: '/services/radiologie',
      subMenu: [
        { label: 'ABPM', path: '/services/radiologie/abpm' },
        { label: 'Services de Radiologie', path: '/services/radiologie/radiology-services' },
      ],
    },
    {
      label: 'Biologie',
      icon: <FiCpu />,
      path: '/services/biologie',
      subMenu: [
        { label: 'Thérapie NAD+', path: '/services/biologie/nad-plus-therapy' },
        { label: 'Ozonothérapie', path: '/services/biologie/ozone-therapy' },
        { label: 'Thérapie EBOO', path: '/services/biologie/eboo-therapy' },
        { label: 'Échange Plasmatique Thérapeutique', path: '/services/biologie/therapeutic-plasma-exchange' },
        { label: 'Injections de Vitamines', path: '/services/biologie/vitamin-shots' },
        { label: 'Services Médicaux Avancés', path: '/services/biologie/advanced-medical-services' },
      ],
    },
    {
      label: 'Paramédical',
      icon: <FiFeather />,
      path: '/services/paramediacle',
      subMenu: [
        { label: 'Ostéopathie', path: '/services/paramediacle/osteopathie' },
        { label: 'Saignées Médicales', path: '/services/paramediacle/saignees-medicales' },
        { label: 'Kinésithérapie', path: '/services/paramediacle/kinesitherapie' },
      ],
    },
    {
      label: 'Sexologie',
      icon: <FiActivity className="text-blue-500" />,
      path: '/services/sexologie',
    },
    {
      label: 'Cardiologie',
      icon: <FiHeart className="text-blue-500" />,
      path: '/services/cardiologie',
    },
    {
      label: 'ORL',
      icon: <FiBook className="text-blue-500" />,
      path: '/services/orl',
    },
    {
      label: 'Médecine Préventive',
      icon: <FiShield className="text-blue-500" />,
      path: '/services/medecine-preventive',
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
        className={`fixed w-full z-50 transition-all duration-500 ${
          isAppointment
            ? 'bg-blue-600'
            : isScrolled
              ? gynecoTheme ? 'bg-pink-300/90 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 cursor-pointer w-1/4 flex items-center"
              onClick={() => navigate('/')}
            >
              <img
                src={isAppointment ? logoBlanc : (isScrolled && !gynecoTheme ? (isWomenService ? logoRose : logoBleu) : logoBlanc)}
                alt="Regenlife Logo"
                className="h-20 w-auto transition-all duration-300"
                style={{ maxHeight: 80 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 h-full">
              {/* Accueil */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/')}
                className={`relative px-8 py-2 mx-2 text-lg font-bold transition-all duration-300 overflow-hidden group h-full flex items-center ${
                  isAppointment
                    ? 'text-white'
                    : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white'
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
                  className={`relative px-8 py-2 mx-2 text-lg font-bold transition-all duration-300 overflow-hidden group h-full flex items-center ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <span className="flex items-center">
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
                      className={`absolute top-full left-0 mt-2 w-80 rounded-xl shadow-xl border z-50 ${
                        isScrolled
                          ? 'bg-white border-gray-200 text-gray-900'
                          : 'bg-white/70 backdrop-blur-md shadow-xl text-blue-900 border-gray-200'
                      }`}
                    >
                      {/* Liste des spécialités */}
                      <div className="divide-y divide-gray-200">
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
                                className="flex-1 flex items-center px-6 py-4 text-left hover:bg-blue-50 hover:text-primary transition-colors group/sub"
                                style={{ background: activeDropdown === spec.label ? 'rgba(255,255,255,0.08)' : undefined }}
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
                                  className="px-3 py-4 hover:text-primary transition-colors"
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
                                    className={`absolute top-0 left-full ml-2 w-72 rounded-xl shadow-xl border z-50 ${
                                      isScrolled
                                        ? 'bg-white border-gray-200 text-gray-900'
                                        : 'bg-white/70 backdrop-blur-md shadow-xl text-blue-900 border-gray-200'
                                    }`}
                                    onMouseEnter={() => setActiveDropdown(spec.label)}
                                    onMouseLeave={() => setActiveDropdown('Services')}
                                  >
                                    <div className="py-2">
                                      {spec.subMenu.map((srv) => (
                                        <button
                                          key={srv.label}
                                          onClick={() => { navigate(srv.path); setDropdownOpen(false); setActiveDropdown(null); }}
                                          className="w-full text-left px-6 py-3 hover:bg-blue-50 hover:text-primary transition-colors"
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
                onClick={() => navigate('/a-propos')}
                className={`relative px-8 py-2 mx-2 text-lg font-bold transition-all duration-300 overflow-hidden group h-full flex items-center ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white'
                }`}
              >
                À propos
              </motion.button>
            </div>

            {/* Button - Right */}
            <div className="hidden md:block w-1/4 text-right">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: gynecoTheme
                    ? '0 10px 15px -3px rgba(244, 114, 182, 0.3)'
                    : isWomenService
                      ? '0 10px 15px -3px rgba(236, 72, 153, 0.3)'
                      : '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
                }}
                onClick={() => navigate('/contact')}
                className={`relative flex items-center px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ml-auto ${
                  gynecoTheme
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : isWomenService
                      ? 'bg-pink-600 text-white hover:bg-pink-700'
                      : isScrolled
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <FiCalendar className="w-5 h-5 mr-2" />
                  Prendre RDV
                </span>
              </motion.button>
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
                {serviceDropdowns.map((item) => (
                  <div key={item.label}>
                    <motion.button
                      onClick={() => {
                        if (item.subMenu) {
                          handleDropdownEnter();
                        } else {
                          navigate(item.path);
                          setIsOpen(false);
                        }
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-xl font-bold transition-colors duration-300 relative overflow-hidden group ${
                        isScrolled
                          ? 'text-gray-800 hover:bg-gray-50 hover:text-primary'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        {item.subMenu && (
                          <FiChevronDown className={`transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        )}
                      </div>
                    </motion.button>

                    {item.subMenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 space-y-1"
                      >
                        {item.subMenu.map((subItem: any) => (
                          <motion.a
                            key={subItem.label}
                            href={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-lg font-medium ${
                              isScrolled
                                ? 'text-gray-700 hover:text-primary'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {subItem.label}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate('/contact');
                    setIsOpen(false);
                  }}
                  className="w-full mt-4 flex items-center justify-center px-6 py-3 rounded-full text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  <FiCalendar className="w-6 h-6 mr-2" />
                  Prendre RDV
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;