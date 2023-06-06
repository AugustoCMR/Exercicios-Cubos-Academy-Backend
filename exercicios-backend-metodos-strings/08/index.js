let cpf = "011.022.033-44";

let removePontuacao = "";

while (cpf !== cpf.replace(".", removePontuacao) || cpf !== cpf.replace("-", removePontuacao)) {
    cpf = cpf.replace(".", removePontuacao);
    cpf = cpf.replace("-", removePontuacao);
}

console.log(cpf);

