import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    q: "Comment le vélo cargo peut-il coûter seulement 1€ ?",
    a: "Le financement provient du dispositif des Certificats d'Économies d'Énergie (CEE). Les entreprises polluantes (fournisseurs d'énergie) financent des actions de transition écologique, comme l'acquisition de vélos cargos, pour compenser leurs émissions. Nous montons le dossier pour que ce financement couvre la quasi-totalité du coût."
  },
  {
    q: "Quels sont les critères pour bénéficier de cette offre ?",
    a: "L'offre est principalement destinée aux professionnels (entreprises, associations, auto-entrepreneurs) situés en Martinique. Pour les particuliers, l'éligibilité est soumise à des conditions de ressources. Remplir le formulaire est la manière la plus simple de vérifier votre situation."
  },
  {
    q: "Est-ce que le financement CEE couvre l'intégralité du coût ?",
    a: "Oui, le mécanisme des CEE est conçu pour couvrir l'intégralité du coût matériel et de la mise en service. Le reste à charge de 1€ est symbolique et valide la transaction."
  },
  {
    q: "Quels types de trajets peut-on faire avec un vélo cargo ?",
    a: "Le vélo cargo est extrêmement polyvalent : livraison du dernier kilomètre, transport d'outils pour les artisans, déplacements de matériel pour les associations, transport des enfants à l'école, ou simplement pour faire les courses de la semaine. C'est une alternative crédible à la voiture pour de nombreux usages."
  },
  {
    q: "Combien de vélos puis-je obtenir pour ma structure ?",
    a: "Le nombre de vélos dépend de la taille de votre structure, de votre secteur d'activité et de vos besoins réels en mobilité. Notre équipe vous accompagne pour définir la flotte la mieux adaptée à votre projet."
  }
];

// Sous-composant pour un élément de la FAQ
const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={onClick}>
        <span>{item.q}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.open : ''}`}></span>
      </button>
      <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.faqAnswer}>
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container" data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Vos questions, nos réponses</h2>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;