import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiSearch, FiUser, FiPhone, FiInfo, FiHeart, FiActivity, FiShield, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import prostateImg from '../../../media/prostate.jpg';
import LoadingSpinner from '../../../components/LoadingSpinner';

const faqs = [
  {
    question: "Qu'est-ce que la prostate ?",
    answer: "La prostate est une glande masculine située sous la vessie, jouant un rôle clé dans la fertilité."
  },
  {
    question: "Quels sont les premiers signes du cancer de la prostate ?",
    answer: "Souvent, il n'y a pas de symptômes au début. Plus tard, on peut observer des troubles urinaires, du sang dans les urines ou le sperme, ou des douleurs pelviennes."
  },
  {
    question: "Comment se fait le dépistage ?",
    answer: "Le dépistage repose sur le dosage du PSA (antigène prostatique spécifique) et le toucher rectal. Si besoin, une biopsie peut être proposée."
  },
  {
    question: "Le cancer de la prostate est-il guérissable ?",
    answer: "Oui, détecté tôt, il est souvent guérissable. Les traitements sont adaptés à chaque patient selon le stade et l'agressivité de la maladie."
  },
];

const avantages = [
  { icon: <FiCheckCircle className="text-green-600 w-7 h-7" />, title: 'Guérison élevée', desc: 'Détecté tôt, le cancer de la prostate se soigne très bien.' },
  { icon: <FiSearch className="text-blue-600 w-7 h-7" />, title: 'Dépistage simple', desc: 'Un test PSA et un examen clinique suffisent souvent.' },
  { icon: <FiHeart className="text-pink-500 w-7 h-7" />, title: 'Accompagnement humain', desc: 'Nos urologues au Maroc vous guident à chaque étape.' },
];

const symptomes = [
  { icon: <FiAlertCircle className="text-red-500 w-6 h-6" />, text: 'Troubles urinaires (envie fréquente, difficulté à uriner, jet faible)' },
  { icon: <FiAlertCircle className="text-red-500 w-6 h-6" />, text: 'Sang dans les urines ou le sperme' },
  { icon: <FiAlertCircle className="text-red-500 w-6 h-6" />, text: 'Douleurs pelviennes ou lombaires' },
  { icon: <FiAlertCircle className="text-red-500 w-6 h-6" />, text: 'Fatigue, perte de poids inexpliquée' },
  { icon: <FiAlertCircle className="text-red-500 w-6 h-6" />, text: 'Parfois aucun symptôme au début' },
];

const risques = [
  { icon: <FiUser className="text-blue-600 w-6 h-6" />, text: 'Âge (après 50 ans)' },
  { icon: <FiShield className="text-blue-600 w-6 h-6" />, text: 'Antécédents familiaux' },
  { icon: <FiActivity className="text-blue-600 w-6 h-6" />, text: 'Mode de vie et alimentation' },
  { icon: <FiHeart className="text-pink-500 w-6 h-6" />, text: 'Origine ethnique' },
];

const depistageEtapes = [
  { step: 1, title: 'Consultation', desc: 'Échange avec un urologue, antécédents et symptômes.' },
  { step: 2, title: 'Test PSA', desc: "Prise de sang pour mesurer l'antigene prostatique specifique." },
  { step: 3, title: 'Examen clinique', desc: 'Toucher rectal pour évaluer la prostate.' },
  { step: 4, title: 'IRM ou biopsie', desc: 'Si besoin, examens complémentaires pour confirmer le diagnostic.' },
];

const traitements = [
  { icon: <FiShield className="text-blue-600 w-6 h-6" />, title: 'Surveillance active', desc: 'Pour les formes peu agressives.' },
  { icon: <FiActivity className="text-blue-600 w-6 h-6" />, title: 'Chirurgie', desc: 'Prostatectomie réalisée par des spécialistes.' },
  { icon: <FiHeart className="text-pink-500 w-6 h-6" />, title: 'Radiothérapie', desc: 'Traitement ciblé pour détruire les cellules cancéreuses.' },
  { icon: <FiCheckCircle className="text-green-600 w-6 h-6" />, title: 'Hormonothérapie', desc: 'Pour ralentir la progression du cancer.' },
];

const CancerProstate: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[48vh] flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden pt-32">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Prostate Hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Cancer de la Prostate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-white/90 mb-8 drop-shadow"
          >
            Le cancer masculin le plus fréquent au Maroc. Un dépistage précoce et un accompagnement personnalisé optimisent vos chances de guérison.
          </motion.p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 text-lg">
            Prendre rendez-vous <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Avantages clés */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center"
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
                className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                {a.icon}
                <div className="font-semibold text-lg mt-3 mb-1 text-blue-900">{a.title}</div>
                <div className="text-gray-600 text-sm">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprendre le cancer de la prostate */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-bold text-blue-800 mb-4"
            >
              Comprendre le cancer de la prostate
            </motion.h2>
            <p className="text-gray-700 mb-2">
              Le cancer de la prostate se développe lentement dans la majorité des cas. Il touche principalement les hommes de plus de 50 ans. Un diagnostic précoce permet des traitements efficaces et une qualité de vie préservée.
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-sm">
              <li>Guérissable dans la majorité des cas détectés tôt</li>
              <li>Dépistage simple et accessible au Maroc</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={prostateImg} alt="Illustration prostate" className="rounded-xl shadow-lg w-64 h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* Symptômes */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-blue-700 mb-6 text-center"
          >
            Signes et symptômes à surveiller
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptomes.map((s, i) => (
              <div key={i} className="flex items-center bg-blue-50 rounded-xl p-4 shadow-sm mb-2">
                {s.icon}
                <span className="ml-3 text-gray-700 text-sm">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs de risque */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-blue-700 mb-6 text-center"
          >
            Facteurs de risque
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risques.map((r, i) => (
              <div key={i} className="flex items-center bg-white rounded-xl p-4 shadow-sm mb-2">
                {r.icon}
                <span className="ml-3 text-gray-700 text-sm">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dépistage & diagnostic timeline */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-blue-700 mb-8 text-center"
          >
            Dépistage et diagnostic&nbsp;: les étapes clés
          </motion.h3>
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {depistageEtapes.map((etape, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow mb-2">
                  {etape.step}
                </div>
                <div className="font-semibold text-blue-800 mb-1">{etape.title}</div>
                <div className="text-gray-600 text-sm text-center">{etape.desc}</div>
                {i < depistageEtapes.length - 1 && (
                  <div className="hidden md:block w-1 h-8 bg-blue-200 mx-auto my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prise en charge & traitements */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-blue-700 mb-8 text-center"
          >
            Prise en charge et traitements
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traitements.map((t, i) => (
              <div key={i} className="flex items-center bg-white rounded-xl p-5 shadow-sm mb-2">
                {t.icon}
                <div className="ml-4">
                  <div className="font-semibold text-blue-900">{t.title}</div>
                  <div className="text-gray-600 text-sm">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vivre avec et après */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-blue-700 mb-6 text-center"
          >
            Vivre avec et après le cancer
          </motion.h3>
          <div className="bg-blue-50 rounded-2xl shadow p-6 text-center">
            <div className="text-blue-800 font-semibold mb-2">Un accompagnement global</div>
            <div className="text-gray-700 text-sm mb-2">Suivi médical régulier, gestion des effets secondaires, soutien psychologique et familial, groupes de parole au Maroc.</div>
            <Link to="/contact" className="inline-flex items-center bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-800 transition-all duration-300 mt-2">
              Prendre rendez-vous <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ améliorée */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold text-blue-700 mb-8 text-center"
          >
            Questions fréquentes
          </motion.h3>
          <div className="space-y-5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`bg-white rounded-3xl shadow-lg transition-all duration-300 cursor-pointer border border-blue-100 hover:shadow-xl ${isOpen ? 'ring-2 ring-blue-200' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpenFaq(isOpen ? null : idx); }}
                >
                  <div className="flex items-center px-6 py-5 select-none">
                    <FiInfo className="text-blue-500 mr-3 flex-shrink-0" />
                    <span className="font-semibold text-blue-700 text-base flex-1">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      <FiChevronDown className="w-5 h-5 text-blue-400" />
                    </motion.span>
                  </div>
                  <motion.div
                    id={`faq-panel-${idx}`}
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6"
                  >
                    {isOpen && (
                      <div className="pb-5 text-gray-700 text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default CancerProstate; 