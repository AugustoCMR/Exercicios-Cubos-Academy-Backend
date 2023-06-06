const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// frutas.reverse();
let novaLista = frutas.join(", ");

let listaCortada = frutas.slice(1, frutas.length - 1);
listaCortada.push("Melão");

console.log(listaCortada);