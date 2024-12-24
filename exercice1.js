const http = require('http');

// Créer le serveur
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bienvenue sur la page d\'accueil !');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée !');
    }
});

// Démarrer le serveur
server.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
