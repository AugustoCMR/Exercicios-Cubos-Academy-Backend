const numeros = [8, 11, 4, 15];

let maiorValor = numeros[0];
let menorValor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }

    if (numeros[i] < menorValor) {
        menorValor = numeros[i];
    }
}

console.log(maiorValor - menorValor);