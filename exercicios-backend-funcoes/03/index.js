const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let valorParcial = 0;
        let somaProdutos = 0;
        let valorTotal = this.calcularTotalAPagar();
        let totalDeItens = this.calcularTotalDeItens();

        for (let compra of this.produtos) {
            somaProdutos += valorParcial;
        }

        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log(`Total de itens: ${totalDeItens} itens`);
        console.log(`Total a pagar: R$ ${valorTotal}`);
    },
    addProduto: function (carrinho, produto) {
        if (carrinho.produtos.id === produto.id) {
            carrinho.produtos.qtd += produto.qtd;
            carrinho.produtos.push(produto);
        } else {
            carrinho.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        let somaItem = 0;
        let calculaCompra = 0;

        console.log(`Cliente: ${this.nomeDoCliente}`)
        let valorTotal = this.calcularTotalAPagar();
        let totalDeItens = this.calcularTotalDeItens();
        for (let compra of carrinho.produtos) {
            calculaCompra = compra.qtd * (compra.precoUnit / 100);
            somaItem += 1;
            totalDeItens += compra.qtd;
            console.log(`Item ${somaItem} - ${compra.nome} - ${compra.qtd} - R$ ${calculaCompra}`);
        }
        console.log(`Total a pagar: R$ ${valorTotal}`)
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (let compra of carrinho.produtos) {
            totalDeItens += compra.qtd;
        }
        return totalDeItens;
    },
    calcularTotalAPagar: function () {
        let valorTotal = 0;
        for (let compra of carrinho.produtos) {
            valorTotal += compra.qtd * (compra.precoUnit / 100);
        }
        return valorTotal;
    },
    calcularDesconto: function () {

        let valorTotal = this.calcularTotalAPagar();
        let totalDeItens = this.calcularTotalDeItens();

        let menorValor = this.produtos[0].precoUnit;
        let valorComDesconto1 = 0;
        let valorComdesconto2 = 0;
        let valorEmReal = 0;

        if (totalDeItens > 4) {
            for (let compra of carrinho.produtos) {
                if (compra.precoUnit < menorValor) {
                    menorValor = compra.precoUnit;

                }
            }
        }

        valorEmReal = menorValor / 100;

        if (valorTotal > 100) {
            valorComdesconto2 = valorTotal * 0.1;
            if (valorEmReal > valorComdesconto2) {
                console.log(`R$ ${valorEmReal}`);
            } else {
                console.log(`R$ ${valorComdesconto2}`);
            }
        }

    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(carrinho, novaBermuda);
carrinho.addProduto(carrinho, novoTenis);
carrinho.calcularDesconto();
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

