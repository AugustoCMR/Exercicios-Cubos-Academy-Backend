const numeros = [1, 98, 100, -76, 0, 12, 19, 5, 60, 44];

let maior = numeros[0];

const maiorNumero = numeros.reduce((acumulador, valorAtual, index, array) => {
  if (array[index] > maior) {
    maior = array[index];
  }
  return maior;
});

console.log(maiorNumero);
