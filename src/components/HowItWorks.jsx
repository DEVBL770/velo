import React from 'react';
import styles from './HowItWorks.module.css';

// Nous gardons vos icônes PNG
import IconForm from '../assets/icons8-form-100.png';
import IconCheck from '../assets/icons8-check-96.png';
import IconDelivery from '../assets/icons8-delivery-96.png';

const steps = [
  {
    number: "01",
    title: "Définissons votre besoin",
    description: "Remplissez notre formulaire rapide pour que nous puissions analyser votre situation et vérifier votre éligibilité au financement CEE.",
    icon: IconForm,
    alt: "Formulaire de demande en ligne"
  },
  {
    number: "02",
    title: "Nous montons votre dossier",
    description: "Une fois l'éligibilité confirmée, notre équipe d'experts constitue votre dossier de financement et s'occupe de toutes les démarches administratives.",
    icon: IconCheck,
    alt: "Validation du dossier CEE"
  },
  {
    number: "03",
    title: "Recevez votre matériel",
    description: "Votre dossier est validé ? Parfait ! Votre vélo cargo électrique est préparé, configuré et livré directement à votre adresse, prêt à l'emploi.",
    icon: IconDelivery,
    alt: "Livraison du vélo cargo"
  }
];

const HowItWorks = () => (
  <section className={styles.howItWorks}>
    <div className="container">
      <h2 className={styles.sectionTitle}>Comment ça marche ?</h2>
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={styles.timelineItem} data-aos="fade-up">
            <div className={styles.timelineContent}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <div className={styles.timelineVisual}>
              <img src={step.icon} alt={step.alt} className={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;