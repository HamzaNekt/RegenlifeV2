import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { articles } from '../../data/articles';

const Forum: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1c2431] font-montserrat">
      {/* Hero Section */}
      <div className="bg-[#1c2431] text-white py-20 pt-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#D1A24C]">Forum Regenlife</h1>
            <p className="text-xl md:text-2xl text-[#c4bcb4]">
              Découvrez nos articles et actualités sur la santé et le bien-être
            </p>
          </motion.div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              className="bg-[#2e333f] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/forum/article/${article.id}`)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#c4bcb4] text-[#1c2431] text-sm font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-[#D1A24C]">{article.title}</h2>
                <p className="text-[#c4bcb4] mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-[#c4bcb4]">
                  <div className="flex items-center">
                    <FaUser className="mr-2 text-[#c4bcb4]" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-[#c4bcb4]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-[#c4bcb4]">
                  <FaCalendarAlt className="mr-2 text-[#c4bcb4]" />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#c4bcb4]">Aucun article disponible pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forum; 
