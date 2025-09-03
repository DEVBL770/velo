import React from 'react';
import styles from './Footer.module.css';
import Logo from '/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.footerColumn} id="logo-column">
          <img src={Logo} alt="MonVéloCargo Logo" className={styles.footerLogo} />
          <p className={styles.description}>
            MonVéloCargo facilite l'accès à une mobilité durable et économique en Martinique grâce au dispositif des Certificats d'Économies d'Énergie.
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Navigation</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#form-section">Tester mon éligibilité</a></li>
            <li><a href="#avantages">Nos avantages</a></li>
            <li><a href="#faq">Questions fréquentes</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Contact & Informations</h4>
          <ul className={styles.footerLinks}>
            <li>Email: contact@monvelocargo.fr</li>
            <li>Adresse: 123 Rue du Vélo, 97200 Fort-de-France</li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightBar}>
        <div className="container">
          <p>© {new Date().getFullYear()} MonVéloCargo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;