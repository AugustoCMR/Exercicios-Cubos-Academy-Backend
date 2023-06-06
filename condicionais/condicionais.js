// const x = -1;

// if (x) {
//     console.log("teste");

// } else {
//     console.log("Erro");
// }

const valorProduto = 100;

const formaDePagamento = "parcelado";
const numeroDeParcelas = 7;

if (formaDePagamento === "dinheiro") {
    const desconto = valorProduto * 0.1;
    const valorTotal = valorProduto - desconto;

    console.log(`Forma de pagamento: À vista. Valor total de R$${valorTotal}`);
} else if (numeroDeParcelas <= 6) {
    const parcelado = (valorProduto / numeroDeParcelas).toFixed(2);
    console.log(`Forma de pagamento: Parcelado. Valor total de R$${parcelado}`);
} else if (numeroDeParcelas <= 12) {
    const montante = valorProduto * Math.pow((1 + 1 / 100), numeroDeParcelas).toFixed(2);
    const dividido = (montante / numeroDeParcelas).toFixed(2);
    console.log(`Forma de pagamento: Parcelado de ${numeroDeParcelas}, valor por mês de ${dividido}. Valor total de R$${montante}`);
} else {
    console.log("Número de parcelas inválidos");
}

