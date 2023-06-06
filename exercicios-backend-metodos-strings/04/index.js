let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0");
console.log(identificador);

let pegaNome = nome.split(" ");

let nomeFormatado = "";

for (let nome of pegaNome) {
    let primeiraLetra = nome.slice(0, 1);
    let restoDoNome = nome.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + " ";
}

console.log(nomeFormatado);

email = email.trim();

console.log(email);



