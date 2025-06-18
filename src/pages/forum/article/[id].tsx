import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { FaUser, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { articles } from '../../../data/articles';
import caissonHyperbare from '../../../assets/caisson_hyperbare.JPG';

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
      <div className="min-h-screen bg-[#1c2431] pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-[#c4bcb4]">Article non trouvé</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1c2431] font-montserrat">
      <style>{`
        .prose a, .prose * a, .prose [class*='title'], .prose [class*='heading'] {
          color: #D1A24C !important;
        }
      `}</style>
      {/* Hero Section épurée */}
      <div className="bg-[#1c2431] text-white pt-36 pb-10 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate('/forum')}
            className="flex items-center gap-2 bg-[#D1A24C] hover:bg-[#c4bcb4] text-[#1c2431] font-semibold rounded-full shadow-lg px-6 py-3 mb-6 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c4bcb4] focus:ring-offset-2"
          >
            <FiArrowLeft className="w-5 h-5 mr-1" />
            Retour au forum
          </motion.button>
          <span className="inline-block mb-3 px-3 py-1 bg-[#c4bcb4] text-[#1c2431] rounded-full text-xs font-medium">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-sm text-[#D1A24C]">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-[#c4bcb4] text-sm mb-2">
            <div className="flex items-center gap-2">
              <FaUser className="w-4 h-4 text-[#c4bcb4]" />
              <span>Équipe Regenlife</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4 text-[#c4bcb4]" />
              <span>{dateStr}</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center gap-2">
              <FaClock className="w-4 h-4 text-[#c4bcb4]" />
              <span>{timeStr}</span>
            </div>
          </div>
        </div>
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
          className="prose prose-xl max-w-none text-[#c4bcb4] prose-h1:text-[#D1A24C] prose-h2:text-[#D1A24C] prose-h3:text-[#D1A24C] prose-h4:text-[#D1A24C] prose-h5:text-[#D1A24C] prose-h6:text-[#D1A24C] prose-strong:text-white prose-a:text-[#D1A24C] prose-a:!text-[#D1A24C]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
};

export default ArticlePage; 