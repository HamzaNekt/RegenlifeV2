import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = ({ gynecoTheme = false }) => {
  return (
    <footer className={`py-12 px-4 ${gynecoTheme ? 'bg-pink-200' : 'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className={`text-xl font-bold mb-4 ${gynecoTheme ? 'text-pink-700' : 'text-white'}`}>Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Oxygénothérapie Hyperbare</a></li>
            <li><a href="#" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Thérapie Individuelle</a></li>
            <li><a href="#" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Coaching en Bien-être</a></li>
            <li><a href="#" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Art Thérapie</a></li>
          </ul>
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-4 ${gynecoTheme ? 'text-pink-700' : 'text-white'}`}>Contact</h3>
          <ul className="space-y-2">
            <li className={`${gynecoTheme ? 'text-pink-700' : 'text-gray-400'} flex items-center`}>
              <FiMapPin className="text-primary mr-2" />
              123 Avenue de la Santé, 75001 Paris
            </li>
            <li className={`${gynecoTheme ? 'text-pink-700' : 'text-gray-400'} flex items-center`}>
              <FiPhone className="text-primary mr-2" />
              +33 1 23 45 67 89
            </li>
            <li className={`${gynecoTheme ? 'text-pink-700' : 'text-gray-400'} flex items-center`}>
              <FiMail className="text-primary mr-2" />
              contact@menhealth.fr
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-4 ${gynecoTheme ? 'text-pink-700' : 'text-white'}`}>Horaires</h3>
          <ul className="space-y-2">
            <li className={gynecoTheme ? 'text-pink-700' : 'text-gray-400'}>Lundi - Vendredi: 9h - 19h</li>
            <li className={gynecoTheme ? 'text-pink-700' : 'text-gray-400'}>Samedi: 10h - 17h</li>
            <li className={gynecoTheme ? 'text-pink-700' : 'text-gray-400'}>Dimanche: Fermé</li>
          </ul>
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-4 ${gynecoTheme ? 'text-pink-700' : 'text-white'}`}>Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${gynecoTheme ? 'bg-pink-200 text-pink-600 hover:bg-pink-300 hover:text-pink-800' : 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'}`}><FiInstagram /></a>
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${gynecoTheme ? 'bg-pink-200 text-pink-600 hover:bg-pink-300 hover:text-pink-800' : 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'}`}><FiFacebook /></a>
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${gynecoTheme ? 'bg-pink-200 text-pink-600 hover:bg-pink-300 hover:text-pink-800' : 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'}`}><FiTwitter /></a>
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${gynecoTheme ? 'bg-pink-200 text-pink-600 hover:bg-pink-300 hover:text-pink-800' : 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'}`}><FiYoutube /></a>
          </div>
        </div>
      </div>
      <div className={`mt-8 text-center ${gynecoTheme ? 'text-pink-700' : 'text-gray-200'}`}>
        <p>© 2025 REGENLIFE. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer; 