/**
 * Point d'entrée de notre API Vercel.
 * Agit comme un proxy sécurisé entre le site et Google Sheets.
 */
export default async function handler(req, res) {
  // Gère la requête "pre-flight" CORS des navigateurs
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Pour le dev, plus tard à changer pour votre domaine
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Autorise les requêtes de n'importe quelle origine.
  // En production, il est recommandé de remplacer '*' par votre nom de domaine pour plus de sécurité
  // ex: res.setHeader('Access-Control-Allow-Origin', 'https://www.votre-domaine.com');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // On n'accepte que les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Méthode non autorisée' });
  }

  try {
    // On vérifie que la variable d'environnement avec l'URL secrète est bien définie sur Vercel
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!googleScriptUrl) {
      console.error('La variable d\'environnement GOOGLE_SCRIPT_URL n\'est pas définie.');
      return res.status(500).json({ status: 'error', message: 'Erreur de configuration du serveur.' });
    }

    // On relaie les données du formulaire vers le script Google en utilisant fetch
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`La réponse de Google Script n'est pas OK : ${response.statusText}`);
    }

    // On attend la réponse de Google Script et on la renvoie au frontend
    const googleResponse = await response.json();
    return res.status(200).json(googleResponse);

  } catch (error) {
    console.error('Erreur dans la fonction serverless:', error);
    return res.status(500).json({ status: 'error', message: 'Échec de la communication avec le service de données.' });
  }
}