const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor * 100;
        let valorEmCentavos = valor * 100;
        this.historicos.push({ tipo: "Depósito", valor: valorEmCentavos });
        console.log(`Deposito de R$${valor} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        let valorEmCentavos = valor * 100;
        if (valorEmCentavos > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valor * 100;

            this.historicos.push({ tipo: "Saque", valor: valorEmCentavos });
            console.log(`Saque de R$${valor} realizado para o cliente: ${this.nome}`);
        }
    },
    extrato: function () {
        let valorEmReal = this.saldo / 100;
        console.log(`Extrato de Maria - Saldo: R$${valorEmReal}`);
        console.log(`Histórico:`)

        for (let i = 0; i < this.historicos.length; i++) {
            let historicoEmReal = this.historicos[i].valor / 100;
            if (this.historicos[i].tipo === "Depósito") {
                console.log(`Depósito de R$${historicoEmReal}`);
            } else {
                console.log(`Saque de R$${historicoEmReal}`);
            }
        }
    }
}

contaBancaria.depositar(100);
contaBancaria.sacar(500);
contaBancaria.sacar(50);
contaBancaria.depositar(200);
contaBancaria.sacar(100);
contaBancaria.extrato();

