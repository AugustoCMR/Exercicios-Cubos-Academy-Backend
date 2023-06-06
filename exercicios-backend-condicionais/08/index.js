const idade = 63;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = false;

if (idade < 12 || idade > 65 || altura < 150 || possuiPatologia) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante || idade < 18) {
    console.log("10 REAIS");
} else {
    console.log("20 REAIS");
}

