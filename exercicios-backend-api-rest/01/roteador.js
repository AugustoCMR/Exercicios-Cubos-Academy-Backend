const express = require("express");

const intermediario = require("./intermediarios");

const {listagemAlunos, listaAluno, cadastrarAluno, deletarAluno, atualizarCurso, alterarCurso} = require("./controladores/alunos");

const router = express.Router();

router.get("/alunos", intermediario, listagemAlunos);
router.get("/alunos/:id", intermediario, listaAluno);
router.post("/alunos", intermediario, cadastrarAluno);
router.delete("/alunos/:id", intermediario, deletarAluno);
router.put("/alunos/:id", intermediario, atualizarCurso);
router.patch("/cursos/:id", intermediario, alterarCurso);

module.exports = router;