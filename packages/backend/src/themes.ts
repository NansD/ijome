// ouais c'est un peu moche de tout avoir en doublon,
// mais si on fait enum truc { 'ma clé' }, la valeur JS de truc['ma clé] c'est 0 et non une chaine de caractères
// on trouvera sûrement un truc plus joli à faire en tout cas



// this enum is based off concept-cheatsheet.pdf
export enum Themes {
  'Object, Paquet, Carton' = 'Object, Paquet, Carton',
  'Télévision, Émission, Série' = 'Télévision, Émission, Série',
  'Littérature, Écriture, Livre' = 'Littérature, Écriture, Livre',
  'Expression, Langue, Dialogue - Bande Dessinée' = 'Expression, Langue, Dialogue - Bande Dessinée',
  'Rébus' = 'Rébus',
  'Lieu, Pays, Drapeau' = 'Lieu, Pays, Drapeau'
}