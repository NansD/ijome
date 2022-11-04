import fastify from 'fastify';
import cors from '@fastify/cors';
const server = fastify({ logger: true });

server.register(cors, { 
  origin: '*'
});

server.get('/daily/challenge', async () => {
  return { id: 'b3ec53fc-d167-4356-b772-9a60f930a9a0', challenge: '🐀👨‍🍳' };
});

const answerSchema = {
  body: {
    type: 'object',
    required: ['answer'],
    properties: {
      answer: { type: 'string' }
    }
  }
};
type PostDailyAnswer = {
  answer: string
}

server.post<{ Body: PostDailyAnswer }>('/daily/answer', {
    schema: answerSchema,
  },
  async (request) => {
    if (request.body.answer === 'ratatouille') return { correct: true };
    return { correct: false };
  }
);

const start = async () => {
  try {
    await server.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();