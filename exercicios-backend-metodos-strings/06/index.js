const celular = 7199918888;

let stringCelular = String(celular);

if (stringCelular.length === 10) {
    let ddd = stringCelular.slice(0, 2);
    let numeroParteUm = stringCelular.slice(2, 6);
    let numeroParteDois = stringCelular.slice(6);

    console.log(`(${ddd}) 9 ${numeroParteUm}-${numeroParteDois}`);
} else if (stringCelular.length === 8) {

    let numeroParteUm = stringCelular.slice(0, 4);
    let numeroParteDois = stringCelular.slice(4);
    console.log(`9 ${numeroParteUm}-${numeroParteDois}`);
} else {
    console.log("Número inválido!");
}