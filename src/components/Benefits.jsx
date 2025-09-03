import React from 'react';
import styles from './Benefits.module.css';

const IconMoney = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414-.336.75-.75.75h-1.5a.75.75 0 01-.75-.75V4.5m0 0h-9a.75.75 0 00-.75.75v11.25c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75M3.75 12h.008v.008H3.75V12zm1.5 0h.008v.008H5.25V12z" /></svg>
);
const IconLeaf = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
);
const IconRocket = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-5.84 7.38v-4.82m5.84-2.56l-4.82-5.84m-2.56 5.84l-4.82-5.84m-2.56 5.84A6 6 0 017.63 4.22m12.38 5.84l-4.82-5.84M7.63 4.22A6 6 0 0114.37 15.6l-5.84-4.82M14.37 15.6l-4.82-5.84" /></svg>
);
const IconBox = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
);

const benefitsData = [
  {
    icon: <IconMoney />,
    title: "Réduction des Coûts",
    description: "Divisez par 10 vos frais de déplacement en ville par rapport à un véhicule thermique. Le financement CEE couvre le coût du vélo, vous ne payez que 1€."
  },
  {
    icon: <IconLeaf />,
    title: "Image de Marque Positive",
    description: "Adopter une mobilité douce renforce votre engagement RSE (Responsabilité Sociétale des Entreprises) et valorise votre image auprès de vos clients et partenaires."
  },
  {
    icon: <IconRocket />,
    title: "Gain de Productivité",
    description: "Soyez plus agile en ville : accédez aux zones restreintes, évitez les embouteillages et stationnez facilement. Un véritable atout pour optimiser vos journées."
  },
  {
    icon: <IconBox />,
    title: "Grande Capacité",
    description: "Avec une capacité de charge pouvant aller jusqu'à 180 kg, le vélo cargo est un outil de travail polyvalent pour le transport de matériel, de marchandises ou pour les trajets du quotidien."
  }
];

const Benefits = () => {
  return (
    <section className={styles.benefits} id="avantages">
      <div className="container" data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Les avantages d'une mobilité optimisée</h2>
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;