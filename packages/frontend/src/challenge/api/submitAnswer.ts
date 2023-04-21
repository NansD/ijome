import { Answer, AnswerResponse, compare, getTodaysChallenge } from "@ijome/common";

export async function submitAnswer({ answer }: Answer): Promise<AnswerResponse> {
  const challenge = getTodaysChallenge();
  if (challenge.possibleSolutions.some(p => compare(p, answer))) return { correct: true };
  return { correct: false };
}
