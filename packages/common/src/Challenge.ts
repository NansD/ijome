export interface Challenge {
  challenge: string,
  theme: string,
  subThemes?: {
    challenge: string,
    theme: string,
  }[],
  possibleSolutions: string[]
}

export type ChallengeDTO = Omit<Challenge, 'possibleSolutions'>;