import React from 'react';
import styles from './Header.module.css';
// Placez votre logo.svg dans le dossier public
const Logo = () => <img src="/logo.png" alt="MonVéloCargo Logo" className={styles.logo} />;

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Logo />
        <a href="#form-section" className={styles.ctaButton}>
          Obtenir mon offre
        </a>
      </div>
    </header>
  );
};

export default Header;