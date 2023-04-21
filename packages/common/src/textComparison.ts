import { levenstein } from './levenstein'

function clean(text: string) {
  return text
  // Remove special characters
  .replace(/[^a-zA-Z0-9 ]/g, '')
  // Replaces multiple successive white spaces by one white space
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();
}

function compare(text1: string, text2: string) {
  const cleanedText1 = clean(text1);
  const cleanedText2 = clean(text2);
  const distance = levenstein(cleanedText1,cleanedText2);
  /*
  {
    // In these options, 0 means we are totally allowing it, 1 means we are very strict about it
    insertion_cost: 0.2, // We allow a lot of additions, to prevent being too harsh with someone adding parasite words like "the", "of" etc
    deletion_cost: 1,
    substitution_cost: 0.8 // Allows replacing a couple of letters by others, e.g. keyboard fail
  }
  */
  if (distance <= 2) return true;
  return false; 
}

export { compare };