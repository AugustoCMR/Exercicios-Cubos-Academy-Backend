const convidados = require("../dados/bancodedados");

const listarConvidados = (req, res) => {
  
  const { nome } = req.query;

  if(nome) {
    const verificaConvidado = convidados.find((convidado) => {
      return convidado === nome
    })
    
    if(!verificaConvidado) {
      return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." });
    } else {
      return res.status(200).json({ mensagem: "Convidado presente."});
    }
  }

  res.status(200).json(convidados);
};

const adicionarConvidado = (req, res) => {

  const { nome } = req.body;

  const verificaConvidado = convidados.find((convidado) => {
    return convidado === nome;
  })

  if(!verificaConvidado) {
    convidados.push(nome);
    res.status(201).json({"mensagem": "Convidado adicionado."});
  } else {
    res.status(400).json({"mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."})
  }
}

const removerConvidado = (req, res) => {

  const { nome } = req.params;

  const verificaConvidado = convidados.find((convidado) => {
    return convidado === nome;
  })

  if(verificaConvidado) {
    convidados.splice(verificaConvidado, 1);
    res.status(200).json({
      "mensagem": "Convidado removido."
    });

  } else {
    res.status(400).json({
      "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
    })
  }
}

module.exports = {
  listarConvidados,
  adicionarConvidado,
  removerConvidado
};
