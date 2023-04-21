import { ChallengeDTO, getTodaysChallenge } from '@ijome/common';
export async function getDailyChallenge(): Promise<ChallengeDTO> {
  return getTodaysChallenge();
}
