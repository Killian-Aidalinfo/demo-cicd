import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  return { message: 'Hello, world!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server démarré sur http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
