const express = require("express");
const app = express();
const {rodada, remover, adicionar} = require("./controladores/jogo");

app.get("/", rodada);
app.get("/remover", remover);
app.get("/adicionar", adicionar)

app.listen(8000);