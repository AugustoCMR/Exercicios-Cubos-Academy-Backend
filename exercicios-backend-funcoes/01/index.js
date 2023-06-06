const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "a",
            correta: "a"
        },
        {
            resposta: "b",
            correta: "a"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let quantidadeDeAcertos = 0;

function corrigirProva(prova) {
    for (let nota of prova.questoes) {
        if (nota.resposta === nota.correta) {
            quantidadeDeAcertos++;
        }
    }

    const notaTotal = quantidadeDeAcertos * 2

    console.log(`O aluno(a) ${prova.aluno} acertou ${quantidadeDeAcertos} e obteve nota ${notaTotal}`);
}

corrigirProva(prova);
