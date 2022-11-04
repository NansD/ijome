import { Challenge, Routes } from '@ijome/common';
import { queryAndReturnBody } from "../api";
const API_URL = import.meta.env.VITE_API_URL;
export function getDailyChallenge(): Promise<Challenge> {
  return queryAndReturnBody(`${API_URL}/${Routes.DAILY_CHALLENGE}`)
}