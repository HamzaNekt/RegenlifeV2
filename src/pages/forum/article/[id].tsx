import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { FaUser, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { articles } from '../../../data/articles';
import caissonHyperbare from '../../../assets/caisson_hyperbare.jpg';

const ArticlePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const article = articles.find(article => article.id === id);

  // Date et heure actuelles
  const now = new Date();
  const dateStr = now.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-600">Article non trouvé</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section épurée */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-36 pb-10 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 bg-blue-500/30 text-blue-100 rounded-full text-xs font-medium">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-sm">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-blue-100/90 text-sm mb-2">
            <div className="flex items-center gap-2">
              <FaUser className="w-4 h-4" />
              <span>Équipe Regenlife</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{dateStr}</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center gap-2">
              <FaClock className="w-4 h-4" />
              <span>{timeStr}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton retour attractif au-dessus de l'image */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate('/forum')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg px-6 py-3 mb-10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <FiArrowLeft className="w-5 h-5 mr-1" />
          Retour au forum
        </motion.button>
      </div>

      {/* Image importée pour l'article Oxygénothérapie Hyperbare */}
      {id === '2' && (
        <div className="max-w-3xl mx-auto px-4 mt-2">
          <img
            src={caissonHyperbare}
            alt="Chambre hyperbare médicale"
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
        </div>
      )}

      {/* Contenu principal */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="prose prose-xl max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
};

export default ArticlePage; 