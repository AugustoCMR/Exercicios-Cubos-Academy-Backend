//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 59;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 170000000;

const valorTotal = (rendaMensalEmCentavos / 100) * 0.18;

if (mesesDecorridos > 60) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois os 60 meses foram batidos.`);
} else if (totalJaPagoPeloAluno >= 180000000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o estudande pagou o curso inteiro.`);
} else if (rendaMensalEmCentavos < 200000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else {
    console.log(`O valor da parcela desse mês é R$ ${valorTotal} reais`);
}