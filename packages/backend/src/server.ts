import fastify from 'fastify';
import cors from '@fastify/cors';
import { Answer, AnswerResponse, Challenge, ChallengeDTO } from '@ijome/common'
import { challenges, getTodaysChallenge } from './challenges'
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
    if (challenge.possibleSolutions.includes(request.body.answer)) return { correct: true }
    return { correct: false }
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
