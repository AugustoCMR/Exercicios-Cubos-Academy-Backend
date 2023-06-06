const primeiroNome = "";
const sobrenome = "Bros";
const apelido = "Mariozinho";

if (apelido) {
    console.log(apelido);
} else if (primeiroNome && sobrenome) {
    console.log(primeiroNome + sobrenome);
} else if (primeiroNome) {
    console.log(primeiroNome);
} else {
    console.log("O primeiro nome é obrigatório!");
}

