const filaDeDentro = ["Jose", "Maria"];
const filaDeFora = ["Renata", "Roberta", "Augusto"];

let fila = true;

while (fila) {
    if (filaDeDentro.length === 5 || filaDeFora.length === 0) {
        console.log(filaDeDentro);
        console.log(filaDeFora);
        fila = false;
    } else {
        filaDeDentro.push(filaDeFora.shift());
    }
}





