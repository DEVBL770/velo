import React from 'react';
import styles from './TrustBar.module.css';

// MODIFIÉ : Importation des fichiers avec les noms corrects
import logoCEE from '../assets/logoTB/cee-removebg-preview.png';
import logoSVG from '../assets/logoTB/logo.svg';
import logoVelo from '../assets/logoTB/velo-removebg-preview.png';
import logoWM from '../assets/logoTB/wmremove-transformed-removebg-preview.png';
import logoZFE from '../assets/logoTB/ZFE-removebg-preview.png';

// Le tableau utilise les mêmes variables, donc il est automatiquement mis à jour
const logos = [logoCEE, logoSVG, logoVelo, logoWM, logoZFE];

const TrustBar = () => {
  return (
    <div className={styles.trustBar}>
      <p className={styles.title}>ILS NOUS FONT CONFIANCE</p>
      <div className={styles.logosContainer}>
        <div className={styles.logosSlide}>
          {/* Première série de logos */}
          {logos.map((logo, index) => <img key={index} src={logo} alt={`Partenaire ${index + 1}`} />)}
          {/* Seconde série (la duplication) */}
          {logos.map((logo, index) => <img key={`duplicate-${index}`} src={logo} alt={`Partenaire ${index + 1}`} />)}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;