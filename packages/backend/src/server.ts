import fastify from 'fastify';
const server = fastify({ logger: true });

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
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();