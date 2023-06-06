const jogadores = require("./jogadores");

let i = 0;

const rodada = (req, res) => {
  res.send(`É a vez de ${jogadores[i]}`);

  i++;

  if (i > jogadores.length - 1) {
    i = 0;
  }
};

const remover = (req, res) => {
    const {indice} = req.query

    if(indice) {
        const pegajogador = jogadores.find(jogador => jogador === jogadores[Number(indice)]);

        if(!pegajogador) {
            res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
        } else {
            jogadores.splice(indice, 1);
            res.send(jogadores);
        }
    }
}

const adicionar = (req, res) => {
    const {nome, indice} = req.query;

    if(nome && indice) {
        if(indice > jogadores.length - 1) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado`);
        } else {
            jogadores.splice(indice, 0, nome)
            res.send(jogadores);
        }
    } else if(nome) {
        jogadores.push(nome);
        res.send(jogadores);
    } else {
        res.send("Insira parâmetros válidos")
    }

   
}

module.exports = {
    rodada,
    remover,
    adicionar
}
