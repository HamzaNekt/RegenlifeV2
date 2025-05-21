import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// Import des pages de services Urologie
import Urologie from './pages/services/urologie/index';
import UrologieStemCellTherapy from './pages/services/urologie/StemCellTherapy';
import UrologiePRPTherapy from './pages/services/urologie/PRPTherapy';
import UrologiePeptideTherapy from './pages/services/urologie/PeptideTherapy';
import UrologieCellTherapy from './pages/services/urologie/CellTherapy';

// Import des pages de services Gynécologie
import Gynecologie from './pages/services/gynecologie/index';


// Import des pages de services Traumatologie
import Traumatologie from './pages/services/traumatologie/index';
import TraumatologieStemCellTherapy from './pages/services/traumatologie/StemCellTherapy';
import TraumatologiePRPTherapy from './pages/services/traumatologie/PRPTherapy';
import TraumatologieCryotherapy from './pages/services/traumatologie/Cryotherapy';
import TraumatologieSonicWaveTherapy from './pages/services/traumatologie/SonicWaveTherapy';
import TraumatologieCoreToFloor from './pages/services/traumatologie/CoreToFloor';

// Import des pages de services Chirurgie Plastique
import ChirurgiePlastique from './pages/services/chirurgie-plastique/index';
import ChirurgiePlastiqueStemCellTherapy from './pages/services/chirurgie-plastique/StemCellTherapy';
import ChirurgiePlastiquePRPTherapy from './pages/services/chirurgie-plastique/PRPTherapy';
import ChirurgiePlastiqueExosomeTherapy from './pages/services/chirurgie-plastique/ExosomeTherapy';
import ChirurgiePlastiqueNextBeautyAesthetics from './pages/services/chirurgie-plastique/NextBeautyAesthetics';

// Import des pages de services Radiologie
import Radiologie from './pages/services/radiologie/index';
import RadiologieABPM from './pages/services/radiologie/ABPM';
import RadiologieServices from './pages/services/radiologie/RadiologyServices';

// Import des pages de services Biologie
import Biologie from './pages/services/biologie/index';
import BiologieNADPlusTherapy from './pages/services/biologie/NADPlusTherapy';
import BiologieOzoneTherapy from './pages/services/biologie/OzoneTherapy';
import BiologieEBOOTherapy from './pages/services/biologie/EBOOTherapy';
import BiologieTherapeuticPlasmaExchange from './pages/services/biologie/TherapeuticPlasmaExchange';
import BiologieVitaminShots from './pages/services/biologie/VitaminShots';
import BiologieAdvancedMedicalServices from './pages/services/biologie/AdvancedMedicalServices';

// Import des pages de services Paramédicales
import Kinesitherapie from './pages/services/paramediacle/kinesitherapie';
import Osteopathie from './pages/services/paramediacle/osteopathie';
import SaigneesMedicales from './pages/services/paramediacle/saignees-medicales';
import Paramediacle from './pages/services/paramediacle/index';
import OxygenTherapy from './pages/services/OxygenTherapy';

// Import des pages de services Féminins
import ConsultationGynecologique from './pages/services/women/services/consultation-gynecologique';
import BienEtreFeminin from './pages/services/women/services/bien-etre-feminin';
import TherapieDeCouple from './pages/services/women/services/therapie-de-couple';
import EducationSante from './pages/services/women/services/education-sante';
import WomenServicesIndex from './pages/services/women/services/index';
import Sexologie from './pages/services/sexologie';
import SexologieDepistage from './pages/services/sexologie/Depistage';
import TherapieSexuelle from './pages/services/sexologie/TherapieSexuelle';
import Cardiologie from './pages/services/cardiologie';
import ORL from './pages/services/orl';
import MedecinePreventive from './pages/services/medecine-preventive';

function App() {
  const location = useLocation();
  const isGyneco = location.pathname.startsWith('/services/gynecologie');
  const isAppointment = location.pathname === '/appointment';
  const isWomenService = location.pathname.startsWith('/services/women/');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar gynecoTheme={isGyneco} isAppointment={isAppointment} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/oxygen-therapy" element={<OxygenTherapy />} />
          {/* Routes Urologie */}
          <Route path="/services/urologie" element={<Urologie />} />
          <Route path="/services/urologie/stem-cell-therapy" element={<UrologieStemCellTherapy />} />
          <Route path="/services/urologie/prp-therapy" element={<UrologiePRPTherapy />} />
          <Route path="/services/urologie/peptide-therapy" element={<UrologiePeptideTherapy />} />
          <Route path="/services/urologie/cell-therapy" element={<UrologieCellTherapy />} />

          {/* Routes Gynécologie */}
          <Route path="/services/gynecologie" element={<Gynecologie />} />


          {/* Routes Traumatologie */}
          <Route path="/services/traumatologie" element={<Traumatologie />} />
          <Route path="/services/traumatologie/stem-cell-therapy" element={<TraumatologieStemCellTherapy />} />
          <Route path="/services/traumatologie/prp-therapy" element={<TraumatologiePRPTherapy />} />
          <Route path="/services/traumatologie/cryotherapy" element={<TraumatologieCryotherapy />} />
          <Route path="/services/traumatologie/sonic-wave-therapy" element={<TraumatologieSonicWaveTherapy />} />
          <Route path="/services/traumatologie/core-to-floor" element={<TraumatologieCoreToFloor />} />

          {/* Routes Chirurgie Plastique */}
          <Route path="/services/chirurgie-plastique" element={<ChirurgiePlastique />} />
          <Route path="/services/chirurgie-plastique/stem-cell-therapy" element={<ChirurgiePlastiqueStemCellTherapy />} />
          <Route path="/services/chirurgie-plastique/prp-therapy" element={<ChirurgiePlastiquePRPTherapy />} />
          <Route path="/services/chirurgie-plastique/exosome-therapy" element={<ChirurgiePlastiqueExosomeTherapy />} />
          <Route path="/services/chirurgie-plastique/next-beauty-aesthetics" element={<ChirurgiePlastiqueNextBeautyAesthetics />} />

          {/* Routes Radiologie */}
          <Route path="/services/radiologie" element={<Radiologie />} />
          <Route path="/services/radiologie/abpm" element={<RadiologieABPM />} />
          <Route path="/services/radiologie/radiology-services" element={<RadiologieServices />} />

          {/* Routes Biologie */}
          <Route path="/services/biologie" element={<Biologie />} />
          <Route path="/services/biologie/nad-plus-therapy" element={<BiologieNADPlusTherapy />} />
          <Route path="/services/biologie/ozone-therapy" element={<BiologieOzoneTherapy />} />
          <Route path="/services/biologie/eboo-therapy" element={<BiologieEBOOTherapy />} />
          <Route path="/services/biologie/therapeutic-plasma-exchange" element={<BiologieTherapeuticPlasmaExchange />} />
          <Route path="/services/biologie/vitamin-shots" element={<BiologieVitaminShots />} />
          <Route path="/services/biologie/advanced-medical-services" element={<BiologieAdvancedMedicalServices />} />

          {/* Routes Paramédicales */}
          <Route path="/services/paramediacle/kinesitherapie" element={<Kinesitherapie />} />
          <Route path="/services/paramediacle/osteopathie" element={<Osteopathie />} />
          <Route path="/services/paramediacle/saignees-medicales" element={<SaigneesMedicales />} />
          <Route path="/services/paramediacle" element={<Paramediacle />} />

          {/* Services Féminins */}
          <Route path="/services/women/services/index" element={<WomenServicesIndex />} />
          <Route path="/services/women/services/consultation-gynecologique" element={<ConsultationGynecologique />} />
          <Route path="/services/women/services/bien-etre-feminin" element={<BienEtreFeminin />} />
          <Route path="/services/women/services/therapie-de-couple" element={<TherapieDeCouple />} />
          <Route path="/services/women/services/education-sante" element={<EducationSante />} />

          {/* Services standards manquants */}
          <Route path="/services/sexologie" element={<Sexologie />} />
          <Route path="/services/sexologie/depistage" element={<SexologieDepistage />} />
          <Route path="/services/sexologie/therapie-sexuelle" element={<TherapieSexuelle />} />
          <Route path="/services/cardiologie" element={<Cardiologie />} />
          <Route path="/services/orl" element={<ORL />} />
          <Route path="/services/medecine-preventive" element={<MedecinePreventive />} />

          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer gynecoTheme={isGyneco || isWomenService} />
    </div>
  );
}

export default App;
