import { Challenge } from './Challenge'
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
    possibleSolutions: ['mettre les pieds dans le plat']
  },
  {
    challenge: '🥚🐄',
    theme: Themes['Expression, Langue, Dialogue - Bande Dessinée'],
    possibleSolutions: ['qui vole un oeuf vole un boeuf']
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
    possibleSolutions: ['game throne', 'trone fer', 'throne fer']
  },
  {
    challenge: '🗓🌦🧥🪡 ',
    theme: Themes['Expression, Langue, Dialogue - Bande Dessinée'],
    possibleSolutions: ['en avril ne te découvre pas d\'un fil', 'avril découvre fil']
  },
  {
    challenge: '🌽🥀🪺',
    theme: Themes['Rébus'],
    subThemes: [{
      theme: Themes['Date, Événement, Jour'],
      challenge: '1'
    }],
    possibleSolutions: ['epiphanie', 'epifanie']
  },
  {
    challenge: '✝️ 🪺🥤',
    theme: Themes['Rébus'],
    subThemes: [{
      theme: Themes['Date, Événement, Jour'],
      challenge: '🎅'
    }],
    possibleSolutions: ['st nicolas', 'saint nicolas']
  },
  {
    challenge: '🔌🏛⚔️🎆',
    theme: Themes['Rébus'],
    subThemes: [{
      theme: Themes['Date, Événement, Jour'],
      challenge: '14'
    }],
    possibleSolutions: ['prise bastille', 'prise de la bastille']
  },
  {
    challenge: '🦃🇺🇸🙏',
    theme: Themes['Date, Événement, Jour'],
    possibleSolutions: ['thanksgiving']
  },
  {
    challenge: '🍻 🍀 🌈 ✝️',
    theme: Themes['Date, Événement, Jour'],
    possibleSolutions: ['st patrick', 'saint patrick']
  },
  {
    challenge: '🪑👨🗳️🍫',
    theme: Themes['Cinéma, Film, Caméra'],
    possibleSolutions: ['forest gump', 'forrest gump']
  },
  {
    "challenge": "🦁👑",
    "theme": Themes["Cinéma, Film, Caméra"],
    "possibleSolutions": ["le roi lion", "lion king"]
  },
  {
    "challenge": "🦇👨‍🌆",
    "theme": Themes["Cinéma, Film, Caméra"],
    "possibleSolutions": ["batman"]
  },
  {
    "challenge": "🔎🧔📜",
    "theme": Themes["Littérature, Écriture, Livre"],
    "possibleSolutions": ["sherlock holmes"]
  },
  {
    "challenge": "👸❄️",
    "theme": Themes["Cinéma, Film, Caméra"],
    "possibleSolutions": ["la reine des neiges", "frozen"]
  },
  {
    "challenge": "🧙‍♂️💍",
    "theme": Themes["Cinéma, Film, Caméra"],
    "possibleSolutions": ["le seigneur des anneaux", "lord of the rings"]
  },
  {
    "challenge": "👠🛳️🧊",
    "theme": Themes["Cinéma, Film, Caméra"],
    "possibleSolutions": ["titanic"]
  },
  {
    "challenge": "🍎🐍👫",
    "theme": Themes["Littérature, Écriture, Livre"],
    "possibleSolutions": ["adam et ève", "adam and eve"]
  },
  {
    "challenge": "🧙‍♂️🪄👓⚡🎩",
    "theme": Themes["Littérature, Écriture, Livre"],
    "possibleSolutions": ["harry potter"]
  },
  {
    "challenge": "🚢🧔‍♂️🏝️📖",
    "theme": Themes["Littérature, Écriture, Livre"],
    "possibleSolutions": ["robinson crusoe", "vendredi", "vendredi ou la vie sauvage"]
  },
  {
    "challenge": "🧚🧒 🏴‍☠️🪝",
    "theme": Themes["Littérature, Écriture, Livre"],
    "possibleSolutions": ["peter pan"]
  },
  {
    "challenge": "🐉🧙‍♂️",
    "theme": Themes["Cinéma, Film, Caméra"],
    "possibleSolutions": ["le hobbit", "the hobbit"]
  },
  {
    "challenge": "👑💂‍♂️🫖",
    "theme": Themes["Lieu, Pays, Drapeau"],
    "possibleSolutions": ["royaume-uni", "united kingdom"]
  }
];

export function getTodaysChallenge() {
  const today = new Date().getDate();
  const challenge = challenges[today];
  if (!challenge) return challenges[today - challenges.length];
  return challenge;
}
