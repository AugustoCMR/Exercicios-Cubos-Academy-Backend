const express = require("express");

const router = express.Router();

const {listarConvidados, adicionarConvidado, removerConvidado} = require("./controladores/convidados");

router.get("/convidados", listarConvidados);
router.post("/convidados", adicionarConvidado);
router.delete("/convidados/:nome", removerConvidado);

module.exports = router;