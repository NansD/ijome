import { ChallengeDTO, Routes } from '@ijome/common';
import { API_URL, queryAndReturnBody } from "../../api";
export function getDailyChallenge(): Promise<ChallengeDTO> {
  return queryAndReturnBody(`${API_URL}/${Routes.DAILY_CHALLENGE}`)
}
