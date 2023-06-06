const express = require("express");

const {listagemLivros, detalharLivro, adicionaLivro, atualizaLivro, alteraLivro,deletaLivro} = require("./controladores/livros");

const router = express.Router();

router.get("/livros", listagemLivros);
router.get("/livros/:id", detalharLivro);
router.post("/livros", adicionaLivro);
router.put("/livros/:id", atualizaLivro);
router.patch("/livros/:id", alteraLivro);
router.delete("/livros/:id", deletaLivro);

module.exports = router;