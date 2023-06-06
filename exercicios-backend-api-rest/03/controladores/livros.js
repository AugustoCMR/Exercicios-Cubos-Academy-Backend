let { livros, identificadorLivro } = require("../dados/bancodedados");


const listagemLivros = (req, res) => {
    res.status(200).json(livros);
}

const detalharLivro = (req, res) => {
    const { id } = req.params;

    const pegaLivro = livros.find((livro) => {
        return livro.id === Number(id);
    })

    if(isNaN(id)) {
        res.status(404).json({"mensagem": "O valor do parâmetro ID da URL não é um número válido."});
    }

    if(!pegaLivro) {
        res.status(404).json({"mensagem": "Não existe livro para o ID informado."});
    }

    res.status(200).json(pegaLivro);
}

const adicionaLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body;

    if(!titulo) {
        return res.status(400).json({"mensagem": "O titulo é obrigatório."})
    }

    if(!autor) {
        return res.status(400).json({"mensagem": "O autor é obrigatório."})
    }

    if(!ano) {
        return res.status(400).json({"mensagem": "O ano é obrigatório."})
    }

    if(!numPaginas) {
        return res.status(400).json({"mensagem": "O Número de páginas é obrigatório."})
    }

    const cadastraLivro = {
        id: identificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(cadastraLivro);

    res.status(201).json({"mensagem": "Livro adicionado com sucesso."});

}

const atualizaLivro = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    
    if(!titulo) {
        return res.status(400).json({"mensagem": "O titulo é obrigatório."})
    }

    if(!autor) {
        return res.status(400).json({"mensagem": "O autor é obrigatório."})
    }

    if(!ano) {
        return res.status(400).json({"mensagem": "O ano é obrigatório."})
    }

    if(!numPaginas) {
        return res.status(400).json({"mensagem": "O Número de páginas é obrigatório."})
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    })

    if(!livro) {
        return res.status(400).json({"mensagem": "Não existe livro a ser substituído para o ID informado." });
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    res.status(200).json({"mensagem": "Livro substituído."});
}

const alteraLivro = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    })

    if(!livro) {
        return res.status(404).json({"mensagem": "Não existe livro para o ID informado."});
    }

    if(titulo) {
        livro.titulo = titulo;
    }

    if(autor) {
        livro.autor = autor;
    }

    if(ano) {
        livro.ano = ano;
    }

    if(numPaginas) {
        livro.numPaginas = numPaginas
    }

    res.status(200).json({
        "mensagem": "Livro alterado."
      });
}

const deletaLivro = (req, res) => {
    const { id } = req.params;

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    })

    if(!livro) {
        return res.status(404).json({
            "mensagem": "Não existe livro a ser removido para o ID informado."
          });
    }

    livros.splice(livro, 1);

    res.status(200).json({
        "mensagem": "Livro removido."
      });
}


module.exports = {
    listagemLivros,
    detalharLivro,
    adicionaLivro,
    atualizaLivro,
    alteraLivro,
    deletaLivro
}