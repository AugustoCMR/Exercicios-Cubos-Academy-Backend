const letras = ["A", "a", "B", "C", "a", "e"];

let somaE = 0;

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        somaE++
    }
}

if (somaE === 0) {
    console.log(`Nenuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${somaE} letras "E" ou "e"`);
}