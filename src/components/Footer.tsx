import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = ({ gynecoTheme = false }) => {
  return (
    <footer className={`py-12 px-4 ${gynecoTheme ? 'bg-pink-200' : 'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className={`text-xl font-bold mb-4 ${gynecoTheme ? 'text-pink-700' : 'text-white'}`}>Spécialités</h3>
          <div className="flex flex-row gap-8">
            <ul className="space-y-2">
              <li><a href="/services/urologie" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Urologie</a></li>
              <li><a href="/services/traumatologie" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Traumatologie</a></li>
              <li><a href="/services/radiologie" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Radiologie</a></li>
              <li><a href="/services/paramediacle" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Paramédical</a></li>
              <li><a href="/services/cardiologie" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Cardiologie</a></li>
              <li><a href="/services/medecine-preventive" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Médecine Préventive</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="/services/women/services/index" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Services Féminins</a></li>
              <li><a href="/services/chirurgie-plastique" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Chirurgie Plastique</a></li>
              <li><a href="/services/biologie" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Biologie</a></li>
              <li><a href="/services/sexologie" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>Sexologie</a></li>
              <li><a href="/services/orl" className={`${gynecoTheme ? 'text-pink-600 hover:text-pink-800' : 'text-gray-400 hover:text-primary'} transition-colors`}>ORL</a></li>
            </ul>
          </div>
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