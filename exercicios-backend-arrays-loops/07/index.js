const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComA = [];

for (let nome of nomes) {
    if (nome.charAt(0) === "A" || nome.charAt(0) === "a") {
        nomesComA.push(nome);
    }
}

console.log(nomesComA);