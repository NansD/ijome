import fastify from 'fastify';
import cors from '@fastify/cors';
import { Answer, AnswerResponse, ChallengeDTO, getTodaysChallenge } from '@ijome/common';
import { compare } from '@ijome/common';

const server = fastify({ logger: true });

server.register(cors, { 
  origin: '*'
});

server.get('/daily/challenge', (): ChallengeDTO => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { possibleSolutions, ...challenge } = getTodaysChallenge();
  return challenge;
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

server.post<{ Body: Answer }>('/daily/answer', {
    schema: answerSchema,
  },
  (request): AnswerResponse => {
    const challenge = getTodaysChallenge();
    if (challenge.possibleSolutions.find(p => compare(p, request.body.answer))) return { correct: true };
    return { correct: false };
  }
);

const start = async () => {
  try {
    await server.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3000, host: '0.0.0.0' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
