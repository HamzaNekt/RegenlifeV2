import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectShowcase from '../components/ProjectShowcase';
import WomenHealth from '../components/WomenHealth';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom';
import { FiGlobe, FiHome } from 'react-icons/fi';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Services />
      {/* Section International & Installation */}
      <section className="py-20 bg-[#1c2431] relative">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#D1A24C] tracking-tight drop-shadow-lg">International & Installation</h2>
          <p className="text-lg md:text-xl text-[#c4bcb4] mb-14 max-w-3xl mx-auto">
            Découvrez nos services dédiés à l'accompagnement des patients internationaux et à l'installation ou la retraite à l'étranger.<br />
            Un suivi personnalisé, des démarches simplifiées et un réseau d'experts pour votre sérénité.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <Link to="/services/soins-etrangers" className="flex-1 bg-[#2e333f] hover:bg-[#232733] transition rounded-3xl p-10 shadow-xl flex flex-col items-center border-0 hover:-translate-y-2 hover:shadow-2xl duration-300 group">
              <span className="mb-4 rounded-full p-4 shadow-md" style={{ background: '#c4bcb4', color: '#1c2431' }}>
                <FiGlobe className="w-10 h-10" />
              </span>
              <span className="text-2xl font-bold text-white mb-2">Soins Étrangers</span>
              <span className="text-[#c4bcb4] mb-6">Accompagnement médical et administratif pour les patients venant de l'étranger.</span>
              <span className="inline-block mt-auto px-8 py-3 bg-[#D1A24C] text-white rounded-full font-bold shadow-lg hover:bg-[#c4bcb4] hover:text-[#1c2431] transition duration-200">Découvrir</span>
            </Link>
            <Link to="/services/installation-retraite" className="flex-1 bg-[#2e333f] hover:bg-[#232733] transition rounded-3xl p-10 shadow-xl flex flex-col items-center border-0 hover:-translate-y-2 hover:shadow-2xl duration-300 group">
              <span className="mb-4 rounded-full p-4 shadow-md" style={{ background: '#c4bcb4', color: '#1c2431' }}>
                <FiHome className="w-10 h-10" />
              </span>
              <span className="text-2xl font-bold text-white mb-2">Installation & Retraite</span>
              <span className="text-[#c4bcb4] mb-6">Conseils, démarches et accompagnement pour une installation ou une retraite sereine à l'étranger.</span>
              <span className="inline-block mt-auto px-8 py-3 bg-[#D1A24C] text-white rounded-full font-bold shadow-lg hover:bg-[#c4bcb4] hover:text-[#1c2431] transition duration-200">Découvrir</span>
            </Link>
          </div>
        </div>
      </section>
      <ProjectShowcase />
      <WomenHealth />
    </div>
  );
};

export default Home; 
