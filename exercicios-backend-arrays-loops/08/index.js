const numeros = [3, 24, 1, 8, 50, 87, 15];

let maiorValor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }
}

console.log(maiorValor);