import { Challenge } from '@ijome/common';
import { Themes } from "./themes";

export const challenges: Challenge[] = [
  {
    challenge: '🐀👨‍🍳',
    theme: Themes['Télévision, Émission, Série'],
    possibleSolutions: ['Ratatouille']
  },
  {
    challenge: '🐺🦷⬜',
    theme: Themes['Littérature, Écriture, Livre'],
    possibleSolutions: ['Croc blanc', 'croc blanc', 'croc blancs', 'crocs blanc', 'crocs blancs']
  },
  {
    challenge: '🦶🦶🍽️',
    theme: Themes['Expression, Langue, Dialogue - Bande Dessinée'],
    possibleSolutions: ['Mettre les pieds dans le plat', 'mettre les pieds dans le plat']
  },
  {
    challenge: '🥚🐄',
    theme: Themes['Expression, Langue, Dialogue - Bande Dessinée'],
    possibleSolutions: ['Qui vole un oeuf, vole un boeuf', 'qui vole un oeuf, vole un boeuf']
  },
  {
    challenge: '🎲🥘🏊‍♂️🤥',
    theme: Themes['Rébus'],
    possibleSolutions: ['Déménagement', 'déménagement']
  },
  {
    challenge: '⬆️🤥🗣',
    theme: Themes['Rébus'],
    subThemes: [{
      theme: Themes['Lieu, Pays, Drapeau'],
      challenge: '🟦⬜🟥'
    }],
    possibleSolutions: ['Normandie', 'normandie']
  },
  {
    challenge: '🎲🪑👑',
    theme: Themes['Télévision, Émission, Série'],
    possibleSolutions: ['Game of throne', 'le throne de fer', 'game of throne']
  },
];

export function getTodaysChallenge() {
  const today = new Date().getDate();
  const challenge = challenges[today];
  if (!challenge) return challenges[today - challenges.length];
  return challenge;
}