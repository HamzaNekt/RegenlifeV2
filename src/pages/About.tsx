import React, { useState } from 'react';
import { FiUsers, FiAward, FiTarget, FiHeart, FiSmile, FiShield, FiClock, FiInfo, FiChevronDown } from 'react-icons/fi';
import Team from '../components/Team';

const faqAbout = [
  {
    question: "Comment prendre rendez-vous chez Regenlife ?",
    answer: "Vous pouvez prendre rendez-vous en ligne via notre formulaire de contact, ou par téléphone. Notre équipe vous accompagne à chaque étape pour choisir le bon spécialiste et le créneau adapté."
  },
  {
    question: "Quels types de spécialités sont proposés ?",
    answer: "Notre équipe regroupe des médecins, chirurgiens, biologistes, paramédicaux, psychologues, nutritionnistes et bien d'autres, pour une prise en charge globale et personnalisée."
  },
  {
    question: "La confidentialité de mes données est-elle garantie ?",
    answer: "Oui, la confidentialité et la sécurité de vos informations sont une priorité absolue. Toutes vos données sont protégées et traitées dans le respect du secret médical."
  },
  {
    question: "Puis-je bénéficier d'un accompagnement personnalisé ?",
    answer: "Absolument ! Chaque patient bénéficie d'un suivi sur-mesure, adapté à ses besoins, avec une équipe dédiée et à l'écoute."
  },
];

const avantages = [
  { icon: <FiAward className="text-green-600 w-8 h-8 mb-2" />, title: 'Excellence médicale', desc: 'Des professionnels reconnus et des soins de pointe.' },
  { icon: <FiSmile className="text-blue-600 w-8 h-8 mb-2" />, title: 'Accompagnement humain', desc: 'Une écoute attentive et un suivi personnalisé.' },
  { icon: <FiShield className="text-pink-500 w-8 h-8 mb-2" />, title: 'Sécurité & confidentialité', desc: 'Vos données et votre santé sont entre de bonnes mains.' },
  { icon: <FiClock className="text-blue-400 w-8 h-8 mb-2" />, title: 'Disponibilité', desc: 'Des créneaux adaptés et une équipe réactive.' },
];

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero/Intro avec fond coloré */}
      <section className="relative max-w-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-800 to-blue-500" style={{zIndex:0}} />
        <div className="relative max-w-4xl mx-auto px-4 pt-32 pb-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">À propos de Regenlife</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6 drop-shadow">
            Regenlife, c'est l'excellence médicale au service de votre santé. Notre centre réunit une équipe pluridisciplinaire de professionnels passionnés, experts dans leurs domaines, pour vous offrir un accompagnement global, humain et personnalisé.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <div className="flex items-center bg-white rounded-xl shadow px-6 py-3">
              <FiUsers className="text-blue-600 w-7 h-7 mr-2" />
              <span className="font-semibold text-blue-800">Équipe pluridisciplinaire</span>
            </div>
            <div className="flex items-center bg-white rounded-xl shadow px-6 py-3">
              <FiAward className="text-green-600 w-7 h-7 mr-2" />
              <span className="font-semibold text-blue-800">Expertise & innovation</span>
            </div>
            <div className="flex items-center bg-white rounded-xl shadow px-6 py-3">
              <FiHeart className="text-pink-500 w-7 h-7 mr-2" />
              <span className="font-semibold text-blue-800">Approche humaine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Regenlife ? */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center">Pourquoi choisir Regenlife&nbsp;?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {avantages.map((a, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              {a.icon}
              <div className="font-semibold text-lg mt-2 mb-1 text-blue-900">{a.title}</div>
              <div className="text-gray-600 text-sm">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mise en avant équipe */}
      <section className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Une équipe professionnelle, compétente et à votre écoute</h2>
        <p className="text-gray-700 text-base md:text-lg mb-2">
          Notre force réside dans la diversité et la complémentarité de nos spécialistes : médecins, chirurgiens, paramédicaux, biologistes, psychologues, nutritionnistes…
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          Ensemble, nous collaborons pour vous garantir un parcours de soins sur-mesure, fondé sur l'expertise, l'innovation et la bienveillance.
        </p>
      </section>

      {/* Section équipe */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Team />
      </div>

      {/* Mission & Vision modernisées */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <FiTarget className="text-blue-600 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Notre Mission</h3>
          <p className="text-gray-700">
            Offrir des soins médicaux de la plus haute qualité, en associant expertise, technologies de pointe et accompagnement humain, pour améliorer durablement la santé et la qualité de vie de nos patients.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <FiAward className="text-green-600 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Notre Vision</h3>
          <p className="text-gray-700">
            Être une référence au Maroc en matière de médecine régénérative, de prévention et de soins personnalisés, grâce à une équipe engagée et à l'innovation continue.
          </p>
        </div>
      </section>

      {/* FAQ moderne */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-bold text-blue-700 mb-8 text-center">Questions fréquentes</h3>
          <div className="space-y-5">
            {faqAbout.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
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
                    <span
                      className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <FiChevronDown className="w-5 h-5 text-blue-400" />
                    </span>
                  </div>
                  <div
                    id={`faq-panel-${idx}`}
                    className={`overflow-hidden px-6 transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {isOpen && (
                      <div className="pb-5 text-gray-700 text-sm">
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

export default About; 