let m = 90000, n = 24, c = 60000;

let i = ((m / c) ** (1 / 24) - 1) * 100;
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}% pois após 24 meses você teve que pagar ${m} reais`);