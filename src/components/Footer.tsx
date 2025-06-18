import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import logoFooter from '../assets/logo/Logo footer.png';

const Footer = ({ gynecoTheme = false }) => {
  return (
    <footer className={`relative py-12 px-4 font-montserrat bg-[#1c2431] text-white`}>
      {/* Logo en background */}
      <img 
        src={logoFooter} 
        alt="Logo Regenlife footer" 
        className="pointer-events-none select-none absolute left-[5vw] bottom-0 w-[40vw] max-w-[500px] opacity-30 z-0" 
        style={{objectFit: 'contain'}}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#D1A24C]">Spécialités</h3>
          <div className="flex flex-row gap-8">
            <ul className="space-y-2">
              <li><a href="/services/urologie" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Urologie</a></li>
              <li><a href="/services/traumatologie" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Traumatologie</a></li>
              <li><a href="/services/radiologie" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Radiologie</a></li>
              <li><a href="/services/paramediacle" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Paramédical</a></li>
              <li><a href="/services/cardiologie" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Cardiologie</a></li>
              <li><a href="/services/medecine-preventive" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Médecine Préventive</a></li>
              <li><a href="/services/soins-etrangers" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Soins Etrangers</a></li>
              <li><a href="/services/installation-retraite" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Installation & Retraite</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="/services/women/services/index" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Services Féminins</a></li>
              <li><a href="/services/chirurgie-plastique" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Chirurgie Plastique</a></li>
              <li><a href="/services/biologie" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Biologie</a></li>
              <li><a href="/services/sexologie" className="text-gray-300 hover:text-[#D1A24C] transition-colors">Sexologie</a></li>
              <li><a href="/services/orl" className="text-gray-300 hover:text-[#D1A24C] transition-colors">ORL</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#D1A24C]">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-300 flex items-center">
              <FiPhone className="mr-2 text-[#D1A24C]" />
              +212 7 74 77 93 85
            </li>
            <li className="text-gray-300 flex items-center">
              <FiMail className="mr-2 text-[#D1A24C]" />
              regenlifemaroc@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#D1A24C]">Horaires</h3>
          <ul className="space-y-2">
            <li>Lundi - Vendredi: 9h - 19h</li>
            <li>Samedi: 10h - 17h</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#D1A24C]">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#232b3e] text-gray-300 hover:text-[#D1A24C] hover:bg-[#232b3e]">
              <FiInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#232b3e] text-gray-300 hover:text-[#D1A24C] hover:bg-[#232b3e]">
              <FiFacebook />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#232b3e] text-gray-300 hover:text-[#D1A24C] hover:bg-[#232b3e]">
              <FiTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#232b3e] text-gray-300 hover:text-[#D1A24C] hover:bg-[#232b3e]">
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-300">
        <p>© 2025 REGENLIFE. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer; 