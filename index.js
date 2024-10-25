const fastify = require('fastify')({
  logger: true
});

let value = 1;

function responseCalculate() {
  value = value + 1;
}

function startServer() {
  fastify.get('/', async () => {
    responseCalculate();
    return { message: value };
  });

  fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Serveur démarré sur ${address}`);
  });
}

// Exporter les fonctions et `value` sans démarrer le serveur
module.exports = { responseCalculate, startServer, getValue: () => value, resetValue: () => { value = 1 } };

// Démarrer le serveur uniquement si ce fichier est exécuté directement
if (require.main === module) {
  startServer();
}
