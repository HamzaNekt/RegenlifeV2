import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiSearch, FiUser, FiInfo, FiHeart, FiActivity, FiShield, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import LoadingSpinner from '../../../components/LoadingSpinner';
import colonImg from '../../../media/C-colorectal.jpg';

const faqs = [
  {
    question: "Pourquoi se faire dépister le cancer du côlon ?",
    answer: "Le dépistage permet de détecter les polypes ou cancers à un stade précoce, avant l'apparition de symptômes, ce qui augmente considérablement les chances de guérison."
  },
  {
    question: "À quel âge commencer le dépistage ?",
    answer: "Le dépistage est recommandé à partir de 50 ans, ou plus tôt en cas d'antécédents familiaux ou de facteurs de risque."
  },
  {
    question: "Comment se déroule le dépistage ?",
    answer: "Il repose sur un test de recherche de sang dans les selles (test immunologique) et, si besoin, une coloscopie."
  },
  {
    question: "Le dépistage est-il douloureux ?",
    answer: "Le test de selles est indolore. La coloscopie se fait sous anesthésie et est généralement bien tolérée."
  },
];

const depistageEtapes = [
  { step: 1, title: 'Consultation', desc: 'Échange avec un médecin, évaluation des facteurs de risque.' },
  { step: 2, title: 'Test de selles', desc: "Recherche de sang occulte dans les selles (test immunologique)." },
  { step: 3, title: 'Coloscopie', desc: "Si le test est positif ou en cas de risque élevé, réalisation d'une coloscopie." },
  { step: 4, title: 'Suivi', desc: 'Interprétation des résultats et plan de prévention personnalisé.' },
];

const DepistageGastro: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // Tableaux contenant du JSX doivent être ici
  const avantages = [
    { icon: <FiCheckCircle className="text-[#D1A24C] w-7 h-7" />, title: 'Prévention efficace', desc: 'Le dépistage permet d\'éviter la majorité des cancers du côlon.' },
    { icon: <FiSearch className="text-[#D1A24C] w-7 h-7" />, title: 'Détection précoce', desc: 'Un diagnostic tôt augmente les chances de guérison.' },
    { icon: <FiHeart className="text-[#D1A24C] w-7 h-7" />, title: 'Accompagnement humain', desc: 'Notre équipe vous guide à chaque étape du dépistage.' },
  ];
  const symptomes = [
    { icon: <FiAlertCircle className="text-[#D1A24C] w-6 h-6" />, text: 'Sang dans les selles' },
    { icon: <FiAlertCircle className="text-[#D1A24C] w-6 h-6" />, text: 'Troubles du transit (diarrhée, constipation persistante)' },
    { icon: <FiAlertCircle className="text-[#D1A24C] w-6 h-6" />, text: 'Douleurs abdominales inexpliquées' },
    { icon: <FiAlertCircle className="text-[#D1A24C] w-6 h-6" />, text: 'Perte de poids ou fatigue inexpliquée' },
    { icon: <FiAlertCircle className="text-[#D1A24C] w-6 h-6" />, text: 'Parfois aucun symptôme au début' },
  ];
  const risques = [
    { icon: <FiUser className="text-[#D1A24C] w-6 h-6" />, text: 'Âge (après 50 ans)' },
    { icon: <FiShield className="text-[#D1A24C] w-6 h-6" />, text: 'Antécédents familiaux de polypes ou cancer colorectal' },
    { icon: <FiActivity className="text-[#D1A24C] w-6 h-6" />, text: 'Sédentarité, alimentation pauvre en fibres' },
    { icon: <FiHeart className="text-[#D1A24C] w-6 h-6" />, text: 'Maladies inflammatoires chroniques de l\'intestin' },
  ];

  return (
    <div className="min-h-screen bg-[#1c2431]">
      {/* Hero Section */}
      <section className="relative h-[90vh] pt-22 flex items-center overflow-hidden" style={{ backgroundImage: 'url(/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-montserrat"
          >
            Dépistage Gastro-intestinal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-white/90 mb-8 drop-shadow font-montserrat"
          >
            Prévenir le cancer du côlon grâce à un dépistage simple, efficace et accessible.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact', { state: { specialite: 'medecine-preventive', service: 'Dépistage Gastro-intestinal' } })}
            className="bg-[#D1A24C] text-[#1c2431] px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#c4bcb4] hover:shadow-xl transition-shadow duration-300"
          >
            Prendre Rendez-vous
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
        {/* Flou/débordement bas du hero */}
        <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none z-20" style={{background: 'linear-gradient(180deg, rgba(44,49,63,0) 0%, rgba(28,36,49,0.7) 60%, #1c2431 100%)', backdropFilter: 'blur(12px)'}} />
      </section>

      {/* Avantages clés */}
      <section className="py-12 bg-[#1c2431]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-[#D1A24C] mb-8 text-center font-montserrat"
          >
            Pourquoi se faire dépister&nbsp;?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#2e333f] rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                {a.icon}
                <div className="font-semibold text-lg mt-3 mb-1 text-[#D1A24C] font-montserrat">{a.title}</div>
                <div className="text-[#c4bcb4] text-sm">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Regenlife mis en valeur */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#2e333f] border-l-8 border-[#D1A24C] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center mb-8"
          >
            <FiHeart className="text-[#D1A24C] w-10 h-10 mb-3" />
            <h3 className="text-2xl font-bold text-[#D1A24C] mb-2 font-montserrat">Le service Regenlife&nbsp;: un dépistage expert et humain</h3>
            <p className="text-[#c4bcb4] text-base md:text-lg mb-2">
              Chez Regenlife, vous bénéficiez d'un accompagnement personnalisé à chaque étape du dépistage gastro-intestinal. Nos spécialistes expérimentés vous accueillent dans un environnement rassurant, avec du matériel moderne et des protocoles validés.
            </p>
            <p className="text-[#c4bcb4] text-base md:text-lg">
              En cas de résultat positif, une prise en charge rapide et coordonnée vous est proposée, pour maximiser vos chances de prévention et de guérison. Notre équipe est à votre écoute pour répondre à toutes vos questions et vous guider sereinement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comprendre le cancer colorectal */}
      <section className="py-12 bg-[#2e333f]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-bold text-[#D1A24C] mb-4 font-montserrat"
            >
              Comprendre le cancer colorectal
            </motion.h2>
            <p className="text-[#c4bcb4] mb-2">
              Le cancer colorectal est l'un des cancers les plus fréquents, mais aussi l'un des plus évitables grâce au dépistage. Il se développe à partir de polypes qui peuvent être retirés avant de devenir cancéreux.
            </p>
            <ul className="list-disc pl-6 text-[#c4bcb4] text-sm">
              <li>Le dépistage permet d'éviter la majorité des cancers du côlon</li>
              <li>Un diagnostic précoce améliore considérablement le pronostic</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={colonImg} alt="Illustration colon" className="rounded-xl shadow-lg w-64 h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* Symptômes */}
      <section className="py-12 bg-[#1c2431]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-[#D1A24C] mb-6 text-center font-montserrat"
          >
            Signes et symptômes à surveiller
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptomes.map((s, i) => (
              <div key={i} className="flex items-center bg-[#2e333f] rounded-xl p-4 shadow-sm mb-2">
                {s.icon}
                <span className="ml-3 text-[#c4bcb4] text-sm">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs de risque */}
      <section className="py-12 bg-[#2e333f]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-[#D1A24C] mb-6 text-center font-montserrat"
          >
            Facteurs de risque
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risques.map((r, i) => (
              <div key={i} className="flex items-center bg-[#1c2431] rounded-xl p-4 shadow-sm mb-2">
                {r.icon}
                <span className="ml-3 text-[#c4bcb4] text-sm">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes du dépistage */}
      <section className="py-12 bg-[#1c2431]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-[#D1A24C] mb-6 text-center font-montserrat"
          >
            Étapes du dépistage
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {depistageEtapes.map((e, i) => (
              <div key={i} className="flex items-start bg-[#2e333f] rounded-xl p-4 shadow-sm mb-2">
                <span className="font-bold text-[#D1A24C] mr-4">{e.step}.</span>
                <div>
                  <div className="font-semibold text-[#D1A24C] font-montserrat">{e.title}</div>
                  <div className="text-[#c4bcb4] text-sm">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#2e333f]">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[#D1A24C] mb-8 text-center">Questions fréquentes</h3>
          <div className="space-y-5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-[#1c2431] rounded-3xl shadow-lg transition-all duration-300 cursor-pointer border border-[#2e333f] hover:shadow-xl ${isOpen ? 'ring-2 ring-[#D1A24C]' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpenFaq(isOpen ? null : idx); }}
                >
                  <div className="flex items-center px-6 py-5 select-none">
                    <FiInfo className="text-[#D1A24C] mr-3 flex-shrink-0" />
                    <span className="font-semibold text-[#D1A24C] text-base flex-1">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <FiChevronDown className="w-5 h-5 text-[#D1A24C]" />
                    </span>
                  </div>
                  <div
                    id={`faq-panel-${idx}`}
                    className={`overflow-hidden px-6 transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {isOpen && (
                      <div className="pb-5 text-[#c4bcb4] text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepistageGastro; 
