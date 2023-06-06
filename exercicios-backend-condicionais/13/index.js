//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const valorEmReal = valorDoProduto / 100;

if (tipoDePagamento == "credito") {
    const desconto = valorEmReal * 0.05;
    const valorTotal = valorEmReal - desconto;
    console.log(`Valor a ser pago: R$${valorTotal}`);
} else if (tipoDePagamento == "cheque") {
    desconto = valorEmReal * 0.03;
    valorTotal = valorEmReal - desconto;
    console.log(`Valor a ser pago: R$${valorTotal}`);
} else if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro") {
    desconto = valorEmReal * 0.1;
    valorTotal = valorEmReal - desconto;
    console.log(`Valor a ser pago: R$${valorTotal}`);
} else {
    console.log("Informe um tipo de pagamento válido!");
}
