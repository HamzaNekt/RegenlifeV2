import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiUserCheck, FiHeart, FiArrowRight, FiPhone, FiFileText, FiHome, FiMapPin, FiMessageCircle, FiShield, FiClock, FiCheckCircle } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const practicalServices = [
  {
    icon: <FiPhone className="text-blue-600 w-8 h-8 mb-2" />,
    title: 'Prise de rendez-vous rapide',
    desc: 'Organisation de vos consultations et examens en priorité.'
  },
  {
    icon: <FiFileText className="text-yellow-500 w-8 h-8 mb-2" />,
    title: 'Assistance administrative',
    desc: 'Aide pour assurances, formalités médicales et séjours.'
  },
  {
    icon: <FiMessageCircle className="text-blue-500 w-8 h-8 mb-2" />,
    title: 'Traduction & interprétariat',
    desc: 'Équipe multilingue pour faciliter chaque étape.'
  },
  {
    icon: <FiHome className="text-yellow-500 w-8 h-8 mb-2" />,
    title: 'Logement & transport',
    desc: 'Aide à la réservation d\'hébergement et organisation des transferts.'
  },
  {
    icon: <FiMapPin className="text-blue-600 w-8 h-8 mb-2" />,
    title: 'Coordination médicale',
    desc: 'Lien direct avec les meilleurs hôpitaux et cliniques partenaires.'
  },
  {
    icon: <FiClock className="text-yellow-500 w-8 h-8 mb-2" />,
    title: 'Suivi post-soins à distance',
    desc: 'Restez en contact avec nos équipes après votre retour.'
  },
];

const highlights = [
  {
    icon: <FiUserCheck className="text-blue-600 w-7 h-7 mb-2" />,
    title: 'Équipe multilingue & expérimentée',
    desc: 'Des professionnels à votre écoute, parlant votre langue.'
  },
  {
    icon: <FiShield className="text-yellow-500 w-7 h-7 mb-2" />,
    title: 'Confidentialité & sécurité',
    desc: 'Vos données et votre santé sont protégées à chaque étape.'
  },
  {
    icon: <FiHeart className="text-pink-500 w-7 h-7 mb-2" />,
    title: 'Accompagnement humain',
    desc: 'Un suivi personnalisé, bienveillant et rassurant.'
  },
  {
    icon: <FiGlobe className="text-blue-500 w-7 h-7 mb-2" />,
    title: 'Réseau médical d\'excellence',
    desc: 'Accès aux meilleurs spécialistes et établissements du Maroc.'
  },
  {
    icon: <FiCheckCircle className="text-green-500 w-7 h-7 mb-2" />,
    title: 'Assistance 24/7',
    desc: 'Une équipe disponible à tout moment pour répondre à vos besoins.'
  },
];

const steps = [
  {
    title: 'Premier contact',
    desc: 'Échangez avec notre équipe pour exprimer vos besoins et attentes.'
  },
  {
    title: 'Préparation du séjour',
    desc: 'Nous organisons vos rendez-vous, hébergement et transferts.'
  },
  {
    title: 'Accueil & accompagnement',
    desc: 'Prise en charge dès votre arrivée, assistance continue.'
  },
  {
    title: 'Soins & suivi',
    desc: 'Accès à des soins de qualité, suivi personnalisé.'
  },
  {
    title: 'Retour & suivi à distance',
    desc: 'Nous restons à vos côtés même après votre retour.'
  },
];

const SoinsEtrangers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[45vh] bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center pt-32 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-500/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Prise en charge médicale des étrangers au Maroc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-white/90 mb-4 drop-shadow"
          >
            Regenlife accompagne les patients internationaux pour un parcours de soins serein, humain et sur-mesure au Maroc.
          </motion.p>
          <button
            onClick={() => navigate('/contact', { state: { specialite: 'soins-etrangers', service: 'Générique' } })}
            className="inline-flex items-center bg-gradient-to-r from-yellow-300 via-white to-blue-100 text-blue-800 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-blue-200 transition-all duration-300 text-lg border-2 border-blue-200"
          >
            Prendre contact <FiArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* SERVICES PRATIQUES */}
      <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Nos services pratiques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {practicalServices.map((srv, idx) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {srv.icon}
                <div className="font-semibold text-lg mt-2 mb-1 text-blue-900">{srv.title}</div>
                <div className="text-gray-600 text-sm">{srv.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Pourquoi choisir Regenlife&nbsp;?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-white via-blue-50 to-yellow-50 rounded-3xl shadow-lg p-7 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {item.icon}
                <div className="font-semibold text-lg mt-2 mb-1 text-blue-900">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Votre parcours avec nous</h2>
          <ol className="relative border-l-4 border-blue-200 ml-4">
            {steps.map((step, idx) => (
              <li key={step.title} className="mb-12 ml-6">
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 via-yellow-200 to-blue-100 rounded-full shadow-lg ring-4 ring-white">
                  <span className="text-2xl font-bold text-blue-900">{idx + 1}</span>
                </span>
                <div className="bg-white rounded-xl shadow p-6 ml-2 border border-blue-100">
                  <h3 className="font-semibold text-lg text-blue-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-500 to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow">Prêt à démarrer votre parcours santé au Maroc&nbsp;?</h2>
          <button
            onClick={() => navigate('/contact', { state: { specialite: 'soins-etrangers', service: 'Générique' } })}
            className="inline-flex items-center bg-gradient-to-r from-yellow-300 via-white to-blue-100 text-blue-800 font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:from-yellow-400 hover:to-blue-200 transition-all duration-300 text-xl border-2 border-blue-200"
          >
            Contactez-nous <FiArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SoinsEtrangers; 