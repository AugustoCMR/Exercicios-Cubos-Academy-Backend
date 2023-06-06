const express = require("express");
const rota = express.Router();
const listaEndereco = require("./controladores/enderecos");

rota.get("/endereco/:cep", listaEndereco);

module.exports = rota;
