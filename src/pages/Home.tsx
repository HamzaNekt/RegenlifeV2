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
      <section className="py-20 bg-gradient-to-b from-blue-50/60 to-pink-50/60 relative">
        {/* Séparation visuelle */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-gray-100 to-transparent z-0" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700 tracking-tight drop-shadow-lg">International & Installation</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
            Découvrez nos services dédiés à l'accompagnement des patients internationaux et à l'installation ou la retraite à l'étranger.<br />
            Un suivi personnalisé, des démarches simplifiées et un réseau d'experts pour votre sérénité.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <Link to="/services/soins-etrangers" className="flex-1 bg-white/80 hover:bg-blue-100/80 transition rounded-3xl p-10 shadow-xl flex flex-col items-center border border-blue-100 hover:-translate-y-2 hover:shadow-2xl duration-300 group">
              <span className="mb-4 bg-blue-100 group-hover:bg-blue-200 text-blue-700 rounded-full p-4 shadow-md">
                <FiGlobe className="w-10 h-10" />
              </span>
              <span className="text-2xl font-bold text-blue-700 mb-2">Soins Étrangers</span>
              <span className="text-gray-600 mb-6">Accompagnement médical et administratif pour les patients venant de l'étranger.</span>
              <span className="inline-block mt-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-200 ring-2 ring-blue-100 group-hover:ring-blue-300">Découvrir</span>
            </Link>
            <Link to="/services/installation-retraite" className="flex-1 bg-white/80 hover:bg-pink-100/80 transition rounded-3xl p-10 shadow-xl flex flex-col items-center border border-pink-100 hover:-translate-y-2 hover:shadow-2xl duration-300 group">
              <span className="mb-4 bg-pink-100 group-hover:bg-pink-200 text-pink-700 rounded-full p-4 shadow-md">
                <FiHome className="w-10 h-10" />
              </span>
              <span className="text-2xl font-bold text-pink-700 mb-2">Installation & Retraite</span>
              <span className="text-gray-600 mb-6">Conseils, démarches et accompagnement pour une installation ou une retraite sereine à l'étranger.</span>
              <span className="inline-block mt-auto px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-full font-bold shadow-lg hover:from-pink-700 hover:to-pink-600 transition duration-200 ring-2 ring-pink-100 group-hover:ring-pink-300">Découvrir</span>
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