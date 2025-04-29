import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectShowcase from '../components/ProjectShowcase';
import WomenHealth from '../components/WomenHealth';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Services />
      <ProjectShowcase />
      <WomenHealth />
    </div>
  );
};

export default Home; 