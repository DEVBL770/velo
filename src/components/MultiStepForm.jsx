import React, { useState } from 'react';
import styles from './MultiStepForm.module.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    postalCode: '',
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.postalCode.match(/^\d{5}$/)) {
        newErrors.postalCode = 'Veuillez entrer un code postal valide (5 chiffres).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        newErrors.email = 'Veuillez entrer une adresse email valide.';
    }
    if (!formData.phone.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)) {
        newErrors.phone = 'Veuillez entrer un numéro de téléphone valide.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
        setStep(2);
    } else if (step === 2 && validateStep2()) {
        setStep(3);
    }
  };

  const prevStep = () => setStep(s => s - 1);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('La réponse du serveur n\'est pas OK');
      }

      const result = await response.json();
      if (result.status === 'success') {
        setSubmissionStatus('success');
      } else {
        throw new Error(result.message || 'Une erreur est survenue.');
      }
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submissionStatus === 'success') {
    return (
      <div className={styles.formContainer}>
        <div className={styles.successMessage}>
          <h3>Merci !</h3>
          <p>Votre demande a bien été reçue. Un de nos conseillers vous recontactera très prochainement.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Testez votre éligibilité</h3>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className={styles.formStep}>
            <label htmlFor="postalCode">Votre code postal</label>
            <input type="tel" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} placeholder="Ex: 97200" />
            {errors.postalCode && <p className={styles.error}>{errors.postalCode}</p>}
            <button type="button" onClick={nextStep} className={styles.nextButton}>Continuer</button>
          </div>
        )}
        {step === 2 && (
          <div className={styles.formStep}>
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ex: Jean Dupont" />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Ex: jean.dupont@email.com" />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Ex: 06 96 00 00 00" />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            
            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className={styles.prevButton}>Précédent</button>
              <button type="button" onClick={nextStep} className={styles.nextButton}>Vérifier</button>
            </div>
          </div>
        )}
        {step === 3 && (
            <div className={styles.formStep}>
                <h4>Confirmez vos informations</h4>
                <ul className={styles.confirmationList}>
                    <li><strong>Code Postal :</strong> {formData.postalCode}</li>
                    <li><strong>Nom :</strong> {formData.name}</li>
                    <li><strong>Email :</strong> {formData.email}</li>
                    <li><strong>Téléphone :</strong> {formData.phone}</li>
                </ul>
                {submissionStatus === 'error' && <p className={styles.error}>Une erreur s'est produite. Veuillez réessayer.</p>}
                 <div className={styles.buttonGroup}>
                    <button type="button" onClick={prevStep} className={styles.prevButton} disabled={isSubmitting}>Modifier</button>
                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon offre à 1€'}
                    </button>
                </div>
            </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;