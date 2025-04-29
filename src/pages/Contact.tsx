import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contactez-Nous</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos besoins de santé.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Informations de Contact</h2>
            <ul className="space-y-4">
              <li>
                <strong>Adresse :</strong>
                <p>123 Rue de la Santé, 75000 Paris</p>
              </li>
              <li>
                <strong>Téléphone :</strong>
                <p>+33 1 23 45 67 89</p>
              </li>
              <li>
                <strong>Email :</strong>
                <p>contact@centremedical.com</p>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Horaires d'Ouverture</h2>
            <ul className="space-y-2">
              <li>Lundi - Vendredi : 8h00 - 20h00</li>
              <li>Samedi : 9h00 - 17h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 