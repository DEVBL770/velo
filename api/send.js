export default async function handler(req, res) {
  // Gère la requête "pre-flight" CORS des navigateurs
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  // On n'accepte que les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Méthode non autorisée' });
  }

  // On récupère l'URL secrète depuis les variables d'environnement de Vercel
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!googleScriptUrl) {
    console.error('La variable d\'environnement GOOGLE_SCRIPT_URL n\'est pas définie.');
    return res.status(500).json({ status: 'error', message: 'Erreur de configuration du serveur.' });
  }

  try {
    // On relaie la demande au script Google avec les données du formulaire
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Erreur de la part du script Google : ${response.statusText}`);
    }

    const googleResponse = await response.json();

    // ==================================================================
    // == LA CORRECTION EST ICI ==
    // On vérifie la réponse de Google et on la formate pour le frontend.
    // ==================================================================
    if (googleResponse.result === 'success') {
      // Si Google dit "success", on renvoie le format que le formulaire attend.
      res.status(200).json({ status: 'success', message: 'Données enregistrées.' });
    } else {
      // Si Google renvoie une erreur, on la transmet.
      throw new Error(googleResponse.message || 'Une erreur est survenue lors de l\'enregistrement.');
    }

  } catch (error) {
    console.error("Erreur dans l'API /api/send:", error);
    res.status(500).json({ status: 'error', message: error.message || 'Une erreur est survenue sur le serveur.' });
  }
}