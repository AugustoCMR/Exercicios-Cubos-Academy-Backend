//valor do produto comprado.
const valorDoProduto = 50000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 200;

const valorEmReal = valorDoProduto / 100;

const valorDaParcela = valorEmReal / quantidadeDoParcelamento;

const restoParcelas = (valorEmReal - valorPago) / valorDaParcela;

console.log(`Restam ${restoParcelas} parcelas de R$${valorDaParcela}`);