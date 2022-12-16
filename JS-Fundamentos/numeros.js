const peso1 = 1.0; 
//js considera isso um numero inteiro, ele kind of elimina o zero da direita
//se fosse 1.1 ele consideraria um float
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //deixando com duas casas após a virgula
console.log(media.toString());
console.log(typeof media);

//number -> é o tipo do dado
//Number -> é uma função