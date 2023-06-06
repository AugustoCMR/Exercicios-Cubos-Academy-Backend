const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

let maior = cidades[0];

const pegaArray = cidades.reduce((acumulador, valorAtual, indice, array) => {
  if (array[indice].length > maior.length) {
    maior = array[indice];
  }

  return maior;
});

console.log(pegaArray);
