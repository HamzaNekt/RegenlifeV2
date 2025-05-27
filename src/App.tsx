import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Import des pages du Forum
import Forum from './pages/forum/index';
import ArticlePage from './pages/forum/article/[id]';

// Import des pages de services Urologie
import Urologie from './pages/services/urologie/index';
import UrologieStemCellTherapy from './pages/services/urologie/StemCellTherapy';
import UrologiePRPTherapy from './pages/services/urologie/PRPTherapy';
import UrologiePeptideTherapy from './pages/services/urologie/PeptideTherapy';
import UrologieCellTherapy from './pages/services/urologie/CellTherapy';
import CancerProstate from './pages/services/urologie/cancer-prostate';

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
import IRMCorpsEntierPreventive from './pages/services/radiologie/IRMCorpsEntierPreventive';

// Import des pages de services Biologie
import Biologie from './pages/services/biologie/index';
import BiologieNADPlusTherapy from './pages/services/biologie/NADPlusTherapy';
import BiologieOzoneTherapy from './pages/services/biologie/OzoneTherapy';
import BiologieEBOOTherapy from './pages/services/biologie/EBOOTherapy';
import BiologieTherapeuticPlasmaExchange from './pages/services/biologie/TherapeuticPlasmaExchange';
import BiologieVitaminShots from './pages/services/biologie/VitaminShots';
import BiologieAdvancedMedicalServices from './pages/services/biologie/AdvancedMedicalServices';
import PrelevementsAnalysesPreventives from './pages/services/biologie/PrelevementsAnalysesPreventives';

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
import Sexologie from './pages/services/sexologie/index';
import ConsultationSexologique from './pages/services/sexologie/consultation';
import TherapieCouple from './pages/services/sexologie/therapie-couple';
import EducationSexuelle from './pages/services/sexologie/education';
import TroublesSexuels from './pages/services/sexologie/troubles';
import SanteSexuelle from './pages/services/sexologie/sante';
import Depistage from './pages/services/sexologie/Depistage';

// Import des pages de services Cardiologie
import Cardiologie from './pages/services/cardiologie/index';
import ConsultationCardiologique from './pages/services/cardiologie/consultation';
import EchographieCardiaque from './pages/services/cardiologie/echographie';
import SuiviCardiaque from './pages/services/cardiologie/suivi';
import PreventionCardiaque from './pages/services/cardiologie/prevention';
import ReadaptationCardiaque from './pages/services/cardiologie/readaptation';
import UrgencesCardiaques from './pages/services/cardiologie/urgences';

// Import des pages de services ORL
import ORL from './pages/services/orl';
import ConsultationORL from './pages/services/orl/consultation';
import Audiometrie from './pages/services/orl/audiometrie';
import Endoscopie from './pages/services/orl/endoscopie';
import ChirurgieORL from './pages/services/orl/chirurgie';
import TroublesSommeil from './pages/services/orl/troubles-sommeil';
import Vertiges from './pages/services/orl/vertiges';

// Import des pages de services Médecine Préventive
import MedecinePreventive from './pages/services/medecine-preventive/index';
import BilanSante from './pages/services/medecine-preventive/bilan';
import Vaccinations from './pages/services/medecine-preventive/vaccinations';
import DepistagePreventif from './pages/services/medecine-preventive/depistage';
import ConseilsNutrition from './pages/services/medecine-preventive/nutrition';
import ActivitePhysique from './pages/services/medecine-preventive/activite-physique';
import SuiviPersonnalise from './pages/services/medecine-preventive/suivi-personnalise';
import DepistageGastro from './pages/services/medecine-preventive/depistage-gastro';

// Import des pages de services Soins Etrangers
import SoinsEtrangers from './pages/services/soins-etrangers/index';
import InstallationRetraite from './pages/services/installation-retraite/index';

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
          <Route path="/services/urologie/cancer-prostate" element={<CancerProstate />} />


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
          <Route path="/services/radiologie/irm-corps-entier-preventive" element={<IRMCorpsEntierPreventive />} />

          {/* Routes Biologie */}
          <Route path="/services/biologie" element={<Biologie />} />
          <Route path="/services/biologie/nad-plus-therapy" element={<BiologieNADPlusTherapy />} />
          <Route path="/services/biologie/ozone-therapy" element={<BiologieOzoneTherapy />} />
          <Route path="/services/biologie/eboo-therapy" element={<BiologieEBOOTherapy />} />
          <Route path="/services/biologie/therapeutic-plasma-exchange" element={<BiologieTherapeuticPlasmaExchange />} />
          <Route path="/services/biologie/vitamin-shots" element={<BiologieVitaminShots />} />
          <Route path="/services/biologie/advanced-medical-services" element={<BiologieAdvancedMedicalServices />} />
          <Route path="/services/biologie/prelevements-analyses-preventives" element={<PrelevementsAnalysesPreventives />} />

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

          {/* Routes Sexologie */}
          <Route path="/services/sexologie" element={<Sexologie />} />
          <Route path="/services/sexologie/consultation" element={<ConsultationSexologique />} />
          <Route path="/services/sexologie/therapie-couple" element={<TherapieCouple />} />
          <Route path="/services/sexologie/education" element={<EducationSexuelle />} />
          <Route path="/services/sexologie/troubles" element={<TroublesSexuels />} />
          <Route path="/services/sexologie/sante" element={<SanteSexuelle />} />
          <Route path="/services/sexologie/depistage" element={<Depistage />} />

          {/* Routes Cardiologie */}
          <Route path="/services/cardiologie" element={<Cardiologie />} />
          <Route path="/services/cardiologie/consultation" element={<ConsultationCardiologique />} />
          <Route path="/services/cardiologie/echographie" element={<EchographieCardiaque />} />
          <Route path="/services/cardiologie/suivi" element={<SuiviCardiaque />} />
          <Route path="/services/cardiologie/prevention" element={<PreventionCardiaque />} />
          <Route path="/services/cardiologie/readaptation" element={<ReadaptationCardiaque />} />
          <Route path="/services/cardiologie/urgences" element={<UrgencesCardiaques />} />

          {/* Routes ORL */}
          <Route path="/services/orl" element={<ORL />} />
          <Route path="/services/orl/consultation" element={<ConsultationORL />} />
          <Route path="/services/orl/audiometrie" element={<Audiometrie />} />
          <Route path="/services/orl/endoscopie" element={<Endoscopie />} />
          <Route path="/services/orl/chirurgie" element={<ChirurgieORL />} />
          <Route path="/services/orl/troubles-sommeil" element={<TroublesSommeil />} />
          <Route path="/services/orl/vertiges" element={<Vertiges />} />

          {/* Routes Médecine Préventive */}
          <Route path="/services/medecine-preventive" element={<MedecinePreventive />} />
          <Route path="/services/medecine-preventive/bilan" element={<BilanSante />} />
          <Route path="/services/medecine-preventive/vaccinations" element={<Vaccinations />} />
          <Route path="/services/medecine-preventive/depistage" element={<DepistagePreventif />} />
          <Route path="/services/medecine-preventive/nutrition" element={<ConseilsNutrition />} />
          <Route path="/services/medecine-preventive/activite-physique" element={<ActivitePhysique />} />
          <Route path="/services/medecine-preventive/suivi-personnalise" element={<SuiviPersonnalise />} />
          <Route path="/services/medecine-preventive/depistage-gastro" element={<DepistageGastro />} />

          {/* Routes Soins Etrangers */}
          <Route path="/services/soins-etrangers" element={<SoinsEtrangers />} />
          <Route path="/services/installation-retraite" element={<InstallationRetraite />} />

          {/* Routes du Forum */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/article/:id" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer gynecoTheme={isGyneco || isWomenService} />
    </div>
  );
}

export default App;
