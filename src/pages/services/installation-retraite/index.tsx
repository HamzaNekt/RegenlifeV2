import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUserCheck, FiHeart, FiArrowRight, FiGlobe, FiFileText, FiMapPin, FiMessageCircle, FiShield, FiSmile, FiCheckCircle, FiUsers, FiCalendar, FiBriefcase } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const practicalServices = [
  {
    icon: <FiHome className="text-pink-500 w-8 h-8 mb-2" />,
    title: 'Logement & installation',
    desc: 'Recherche de logement, installation, démarches administratives locales.'
  },
  {
    icon: <FiFileText className="text-yellow-500 w-8 h-8 mb-2" />,
    title: 'Ouverture de compte & formalités',
    desc: 'Aide pour ouvrir un compte bancaire, obtenir la résidence, gérer la fiscalité.'
  },
  {
    icon: <FiCalendar className="text-pink-400 w-8 h-8 mb-2" />,
    title: 'Accès aux soins',
    desc: 'Mise en relation avec médecins, spécialistes, et réseau de santé.'
  },
  {
    icon: <FiMessageCircle className="text-pink-500 w-8 h-8 mb-2" />,
    title: 'Assistance administrative',
    desc: 'Gestion des papiers, assurances, sécurité sociale, mutuelle.'
  },
  {
    icon: <FiUsers className="text-yellow-500 w-8 h-8 mb-2" />,
    title: 'Intégration sociale & culturelle',
    desc: "Clubs, activités, réseau d'expatriés, accompagnement à l'intégration."
  },
  {
    icon: <FiBriefcase className="text-pink-400 w-8 h-8 mb-2" />,
    title: 'Services sur-mesure',
    desc: 'Aide personnalisée selon vos besoins (mobilité, loisirs, etc.).'
  },
];

const highlights = [
  {
    icon: <FiUserCheck className="text-pink-500 w-7 h-7 mb-2" />,
    title: 'Accompagnement global',
    desc: 'Santé, vie quotidienne, intégration : tout est pris en charge.'
  },
  {
    icon: <FiShield className="text-yellow-500 w-7 h-7 mb-2" />,
    title: 'Sécurité & sérénité',
    desc: 'Un environnement sûr, un suivi administratif et médical rigoureux.'
  },
  {
    icon: <FiSmile className="text-pink-400 w-7 h-7 mb-2" />,
    title: 'Qualité de vie',
    desc: 'Climat, culture, gastronomie, coût de la vie : profitez du meilleur du Maroc.'
  },
  {
    icon: <FiGlobe className="text-yellow-500 w-7 h-7 mb-2" />,
    title: 'Réseau d\'expatriés',
    desc: "Rencontrez d'autres retraités, bénéficiez d'un réseau solidaire."
  },
  {
    icon: <FiCheckCircle className="text-green-500 w-7 h-7 mb-2" />,
    title: 'Conseillers dédiés',
    desc: 'Un interlocuteur unique pour chaque étape de votre installation.'
  },
];

const steps = [
  {
    title: 'Premier contact',
    desc: 'Nous échangeons sur vos besoins, vos envies et votre projet de vie.'
  },
  {
    title: 'Préparation & planification',
    desc: 'Nous organisons votre venue, vos démarches et votre installation.'
  },
  {
    title: 'Accueil & installation',
    desc: 'Accompagnement dès votre arrivée, installation dans votre nouveau logement.'
  },
  {
    title: 'Intégration & suivi',
    desc: 'Aide à l\'intégration, accès aux soins, activités, suivi personnalisé.'
  },
  {
    title: 'Vie au Maroc',
    desc: 'Nous restons à vos côtés pour garantir votre bien-être au quotidien.'
  },
];

const InstallationRetraite = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white relative overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[45vh] bg-gradient-to-r from-pink-700 to-pink-500 flex items-center justify-center pt-32 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/60 to-pink-500/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Installation & Retraite au Maroc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4 drop-shadow"
          >
            Regenlife organise l'installation globale des retraités étrangers au Maroc : santé, démarches, logement, vie quotidienne.
          </motion.p>
          <button
            onClick={() => navigate('/contact', { state: { specialite: 'installation-retraite', service: 'Installation & Retraite' } })}
            className="inline-flex items-center bg-gradient-to-r from-yellow-200 via-white to-pink-100 text-pink-700 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-pink-200 transition-all duration-300 text-lg border-2 border-pink-200"
          >
            Prendre contact <FiArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* SERVICES PRATIQUES */}
      <section className="py-16 bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-700 mb-10 text-center">Services pratiques pour votre installation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {practicalServices.map((srv, idx) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center text-center border border-pink-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {srv.icon}
                <div className="font-semibold text-lg mt-2 mb-1 text-pink-900">{srv.title}</div>
                <div className="text-gray-600 text-sm">{srv.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-700 mb-10 text-center">Pourquoi choisir Regenlife&nbsp;?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-white via-pink-50 to-yellow-50 rounded-3xl shadow-lg p-7 flex flex-col items-center text-center border border-pink-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {item.icon}
                <div className="font-semibold text-lg mt-2 mb-1 text-pink-900">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-700 mb-10 text-center">Votre accompagnement pas à pas</h2>
          <ol className="relative border-l-4 border-pink-200 ml-4">
            {steps.map((step, idx) => (
              <li key={step.title} className="mb-12 ml-6">
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-400 via-yellow-200 to-pink-100 rounded-full shadow-lg ring-4 ring-white">
                  <span className="text-2xl font-bold text-pink-900">{idx + 1}</span>
                </span>
                <div className="bg-white rounded-xl shadow p-6 ml-2 border border-pink-100">
                  <h3 className="font-semibold text-lg text-pink-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-pink-700 via-pink-400 to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow">Envisagez votre retraite au Maroc en toute sérénité&nbsp;!</h2>
          <button
            onClick={() => navigate('/contact', { state: { specialite: 'installation-retraite', service: 'Installation & Retraite' } })}
            className="inline-flex items-center bg-gradient-to-r from-yellow-200 via-white to-pink-100 text-pink-700 font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:from-yellow-300 hover:to-pink-200 transition-all duration-300 text-xl border-2 border-pink-200"
          >
            Contactez-nous <FiArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstallationRetraite; 