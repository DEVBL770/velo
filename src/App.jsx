import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ'; // Assurez-vous que l'import est bien présent
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Benefits />
        <FAQ /> {/* C'est très probablement cette ligne qui manquait */}
      </main>
      <Footer />
    </>
  );
}

export default App;