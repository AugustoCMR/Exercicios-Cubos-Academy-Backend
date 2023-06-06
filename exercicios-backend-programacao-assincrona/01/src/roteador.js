const express = require("express");
const router = express.Router();
const { listagemProdutos, listaProduto, pegaFrete } = require("./controladores/produto");

router.get("/produtos", listagemProdutos);
router.get("/produtos/:id", listaProduto);
router.get("/produtos/:idProduto/frete/:cep", pegaFrete);

module.exports = router;