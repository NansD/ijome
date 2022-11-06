import { Challenge } from '@ijome/common';
import { Themes } from "./themes";

/**
 * Write the least possible words necessary for the solution to be correct,
 * avoid parasite words like "the", "my" etc unless they are VERY important
 * for the solution to be accepted
 */
export const challenges: Challenge[] = [
  {
    challenge: '🐀👨‍🍳',
    theme: Themes['Télévision, Émission, Série'],
    possibleSolutions: ['ratatouille']
  },
  {
    challenge: '🐺🦷⬜',
    theme: Themes['Littérature, Écriture, Livre'],
    possibleSolutions: ['croc blanc']
  },
  {
    challenge: '🦶🦶🍽️',
    theme: Themes['Expression, Langue, Dialogue - Bande Dessinée'],
    possibleSolutions: ['mettre pied plat']
  },
  {
    challenge: '🥚🐄',
    theme: Themes['Expression, Langue, Dialogue - Bande Dessinée'],
    possibleSolutions: ['vole oeuf vole boeuf']
  },
  {
    challenge: '🎲🥘🏊‍♂️🤥',
    theme: Themes['Rébus'],
    possibleSolutions: ['déménagement']
  },
  {
    challenge: '⬆️🤥🗣',
    theme: Themes['Rébus'],
    subThemes: [{
      theme: Themes['Lieu, Pays, Drapeau'],
      challenge: '🟦⬜🟥'
    }],
    possibleSolutions: ['normandie']
  },
  {
    challenge: '🎲🪑👑',
    theme: Themes['Télévision, Émission, Série'],
    possibleSolutions: ['game throne', 'trone fer']
  },
];

export function getTodaysChallenge() {
  const today = new Date().getDate();
  const challenge = challenges[today];
  if (!challenge) return challenges[today - challenges.length];
  return challenge;
}