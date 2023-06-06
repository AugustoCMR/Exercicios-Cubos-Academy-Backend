const numeros = [12, 13, 14, 16, 10, 90];

let pegaArray;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        pegaArray = i;
        break;
    }
}

if (pegaArray >= 0) {
    console.log(pegaArray);
} else {
    console.log(-1);
}
