// Importation du module HTTP pour faire des requêtes
const http = require('http');

// Définir les options de la requête HTTP
const options = {
    host: 'localhost', // Adresse du serveur (ici, la machine locale)
    port: 3000,        // Port sur lequel le serveur écoute
    path: '/'          // Chemin de la ressource demandée (la racine)
};

// Fonction de rappel (callback) qui traite la réponse du serveur
http.get(options, (res) => {
    let data = ''; // Variable pour stocker les données reçues en morceaux

    // Événement déclenché lorsqu'un morceau de données est reçu
    res.on('data', (chunk) => {
        data += chunk; // Ajouter le morceau au contenu existant
    });

    // Événement déclenché lorsque toutes les données ont été reçues
    res.on('end', () => {
        console.log('Contenu reçu :');
        console.log(data); // Afficher le contenu reçu dans la console
    });
});
//node client.js
