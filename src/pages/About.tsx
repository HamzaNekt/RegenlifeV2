import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">À Propos de Nous</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Notre centre médical est dédié à l'excellence en matière de soins de santé, combinant expertise médicale et technologies de pointe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-gray-600">
              Offrir des soins médicaux de la plus haute qualité en utilisant les dernières avancées technologiques et thérapeutiques.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Notre Vision</h2>
            <p className="text-gray-600">
              Devenir un leader dans le domaine de la médecine régénérative et des soins personnalisés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 