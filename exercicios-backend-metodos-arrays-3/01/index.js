const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const arrayCrescente = numeros.sort((a, b) => {
  return a - b;
});

const arrayDecrescente = numeros.sort((a, b) => {
  return b - a;
});

const unicode = numeros.sort();

const ordenaString = frutas.sort((a, b) => {
  return a.localeCompare(b);
});

const ordenaStringDecrescente = frutas.sort((a, b) => {
  return b.localeCompare(a);
});

const contaCaracteres = frutas.sort((a, b) => {
  return a.length - b.length;
});

console.log(arrayCrescente);
console.log(arrayDecrescente);
console.log(unicode);
console.log(ordenaString);
console.log(ordenaStringDecrescente);
console.log(contaCaracteres);
