const numeros = [0, 122, 4, 6, 8, 44];

const pegaArray = (array) => {
    const validaNumeros = array.every((numero) => {
        return numero % 2 === 0
    });

    if (validaNumeros) {
        console.log("Array válido");
    } else {
        console.log("Array inválido");
    }
}

pegaArray(numeros);