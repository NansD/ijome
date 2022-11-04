import { Challenge, Routes } from '@ijome/common';
import { API_URL, queryAndReturnBody } from "../../api";
export function getDailyChallenge(): Promise<Challenge> {
  return queryAndReturnBody(`${API_URL}/${Routes.DAILY_CHALLENGE}`)
}
