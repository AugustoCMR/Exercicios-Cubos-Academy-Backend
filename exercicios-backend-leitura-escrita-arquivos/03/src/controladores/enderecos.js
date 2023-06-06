const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const listaEndereco = async (req, res) => {
  const { cep } = req.params;

  try {
    const endereco = await fs.readFile("./03/src/enderecos.json");

    const enderecoJSON = JSON.parse(endereco);

    const pegaEndereco = enderecoJSON.find((endereco) => {
        return endereco.cep.split("-").join("") === cep;
    });
    
    if(pegaEndereco) {
        return res.status(200).json(pegaEndereco);
    }
    
    const novoEndereco = await buscarEndereco(cep);

    if(novoEndereco.erro) {
      return res.status(404).json({ "mensagem": "Cep inválido." });
    }

    enderecoJSON.push(novoEndereco);

    const enderecoStringify = JSON.stringify(enderecoJSON);

    await fs.writeFile("./03/src/enderecos.json", enderecoStringify);

    return res.status(200).json(novoEndereco);
     
  }catch(error) {

    return res.status(500).json({ "mensagem": `Ocorreu um erro: ${error}` });
  }
  

 
};

module.exports = listaEndereco;
