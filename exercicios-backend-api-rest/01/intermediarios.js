const verificaSenha = (req, res, next) => {
    const { senha } = req.query;

    if(!senha) {
        return res.status(401).send({"mensagem": "Por favor digite a senha."})
    }

    if(senha !== "cubos123") {
        return res.status(401).send({"mensagem": "Senha inválida."})
    }

    next();
}

module.exports = verificaSenha;