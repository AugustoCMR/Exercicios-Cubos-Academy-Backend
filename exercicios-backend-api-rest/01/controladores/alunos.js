let { IdentificadorAluno, alunos } = require("../dados/bancoAlunos");
const {
  listarAlunos,
  buscarAluno,
  validaAluno,
  deletaAluno,
  atualizaCurso,
  alteraCurso
} = require("../servicos/serviceAluno");

const listagemAlunos = (req, res) => {
  listarAlunos(req, res);
};

const listaAluno = (req, res) => {
  buscarAluno(alunos, req, res);
};

const cadastrarAluno = (req, res) => {
  validaAluno(alunos, req, res);
};

const deletarAluno = (req, res) => {
  deletaAluno(req, res);
};

const atualizarCurso = (req, res) => {
    atualizaCurso(req, res);
}

const alterarCurso = (req, res) => {
    alteraCurso(req, res);
}

module.exports = {
  listagemAlunos,
  listaAluno,
  cadastrarAluno,
  deletarAluno,
  atualizarCurso,
  alterarCurso
};
