const produtos = require("../bancodedados/produtos");
const {getStateFromZipcode} = require("utils-playground");

const listagemProdutos = async (req, res) => {
    res.status(200).json(produtos);
}

const listaProduto = async (req, res) => {
    const { id } = req.params;

    const buscaProduto = produtos.find((produto) => {
        return produto.id === Number(id);
    })

    if(isNaN(id) || id.includes(".")) {
        return res.status(400).json({"mensagem": "Informe um ID válido."})
    }

    if(!buscaProduto) {
        return res.status(404).json({"mensagem": "ID informado não foi encontrado."})
    }

    res.status(200).json(buscaProduto);
    
}

const pegaFrete =  async (req, res) => {
    const {idProduto, cep} = req.params;

    let porcentagemFrete;
    let calculaFrete;

    const buscaProduto =  produtos.find((produto) => {
        return produto.id === Number(idProduto);
    }) 
    
    const estado = await getStateFromZipcode(cep).catch((erro) => {
        return;
    });

    if(!estado) {
        return res.status(400).json({"mensagem": "CEP não existe."})
    } 

    if(isNaN(cep)) {
        return res.status(400).json({"mensagem": "Informe um CEP válido."})
    }

    if(isNaN(idProduto) || idProduto.includes(".")) {
        return res.status(400).json({"mensagem": "Informe um ID válido."})
    }

    if(!buscaProduto) {
        return res.status(404).json({"mensagem": "ID informado não foi encontrado."})
    }

    if(estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
        porcentagemFrete = 0.1;
    } else if(estado === "SP" || estado === "RJ") {
        porcentagemFrete = 0.15;
    } else {
        porcentagemFrete = 0.12;
    }

    calculaFrete = porcentagemFrete * buscaProduto.valor;


    const mensagem = {
        buscaProduto,
        estado,
        calculaFrete
    }


    res.status(200).json(mensagem);    
}

module.exports = {
    listagemProdutos,
    listaProduto,
    pegaFrete
}