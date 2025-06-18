import React from 'react';
import ServicesNavigation from '../../components/ServicesNavigation';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesNavigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Services Médicaux</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Médecine Régénérative</h2>
            <p className="text-gray-600">
              Nous utilisons les dernières avancées en médecine régénérative pour offrir des traitements innovants et personnalisés.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Approche Holistique</h2>
            <p className="text-gray-600">
              Notre approche combine médecine traditionnelle et thérapies innovantes pour des résultats optimaux.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Technologies de Pointe</h2>
            <p className="text-gray-600">
              Nous investissons dans les technologies médicales les plus avancées pour garantir les meilleurs soins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 
