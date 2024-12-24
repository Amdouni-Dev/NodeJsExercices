const intervalId = setInterval(() => {
    console.log('Bonjour ! Ceci est un message périodique.');
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Fin de l\'exécution.');
}, 10000);
