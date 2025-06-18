import React from 'react';
import Link from 'next/link';

const services = [
  { name: 'Urologie', path: '/services/urologie' },
  { name: 'Gynécologie', path: '/services/gynecologie' },
  { name: 'Traumatologie', path: '/services/traumatologie' },
  { name: 'Chirurgie Plastique', path: '/services/chirurgie-plastique' },
  { name: 'Radiologie', path: '/services/radiologie' },
  { name: 'Biologie', path: '/services/biologie' },
];

const ServicesNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <li key={service.path}>
              <Link 
                href={service.path}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ServicesNavigation; 
