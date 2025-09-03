import React from 'react';
import styles from './Hero.module.css';
import MultiStepForm from './MultiStepForm';

const Hero = () => {
  return (
    <section id="form-section" className={styles.hero}>
      <div className={`${styles.heroContent} container`}>
        <div className={styles.leftPanel} data-aos="fade-up">
          <h1 className={styles.title}>Votre Vélo Cargo Électrique à 1€ en Martinique.</h1>
          <p className={styles.subtitle}>
            Bénéficiez du dispositif CEE : financez votre mobilité durable, réduisez vos coûts et transformez vos trajets quotidiens.
          </p>
          <ul className={styles.benefitsList}>
            <li><span className={styles.check}>✔</span> Financement quasi-intégral (reste à charge 1€).</li>
            <li><span className={styles.check}>✔</span> Éligibilité vérifiée en moins de 2 minutes.</li>
            <li><span className={styles.check}>✔</span> Idéal pro & famille : écologie et économies garanties.</li>
          </ul>
        </div>
        <div className={styles.rightPanel} data-aos="fade-up" data-aos-delay="200">
            <MultiStepForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;