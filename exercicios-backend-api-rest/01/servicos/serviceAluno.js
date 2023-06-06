let { IdentificadorAluno, alunos } = require("../dados/bancoAlunos");
const cursos = require("../dados/bancoCursos");
const { verificaFloat } = require("../validacao/validacao");

const listarAlunos = (req, res) => {
  return res.status(200).json(alunos);
};
const buscarAluno = (alunos, req, res) => {
  const { id } = req.params;

  if (isNaN(id) || verificaFloat(id)) {
    return res.status(400).send({ mensagem: "O ID deve ser um número válido" });
  }

  const buscaAluno = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });

  if (!buscaAluno) {
    return res
      .status(404)
      .send({ mensagem: "O ID informado não foi encontrado" });
  }

  return res.status(200).json(buscaAluno);
};

const validaAluno = (alunos, req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  const buscaCurso = cursos.find((cursoCadastrado) => {
    return cursoCadastrado.curso === curso;
  })

  if (!nome) {
    return res.status(400).send({ mensagem: "O nome não foi informado." });
  }

  if (!sobrenome) {
    return res.status(400).send({ mensagem: "O sobrenome não foi informado." });
  }

  if (!idade) {
    return res.status(400).send({ mensagem: "O idade não foi informada." });
  }

  if (!curso) {
    return res.status(400).send({ mensagem: "O curso não foi informado." });
  }

  if(!buscaCurso) {
    return res.status(400).send({ mensagem: "O curso informado não existe." });
  }

  if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
    return res
      .status(400)
      .send({ mensagem: "Preencha corretamente as propriedades." });
  }

  if (idade < 18) {
    return res.status(400).send({ mensagem: "Idade não permitida." });
  }

  const cadastraAluno = {
    id: IdentificadorAluno++,
    nome,
    sobrenome,
    idade,
    curso,
  };

  alunos.push(cadastraAluno);

  res.status(201).json(alunos);
};

const deletaAluno = (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || verificaFloat(id)) {
    return res.status(400).send({ mensagem: "O ID deve ser um número válido" });
  }

  const buscaAluno = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });

  if (!buscaAluno) {
    return res
      .status(404)
      .send({ mensagem: "O ID informado não foi encontrado" });
  }

  alunos.splice(buscaAluno, 1);

  res.status(204).send();
};

const atualizaCurso = (req, res) => {
  const {id} = req.params;
  const {curso} = req.body;

  const buscaCurso = cursos.find((cursoCadastrado) => {
    return cursoCadastrado.curso === curso;
  })

  const aluno = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });

  if (!curso) {
    return res.status(400).send({ mensagem: "O curso não foi informado." });
  }

  if(!buscaCurso) {
    return res.status(400).send({ mensagem: "O curso informado não existe." });
  }

  if (isNaN(id) || verificaFloat(id)) {
    return res.status(400).send({ mensagem: "O ID deve ser um número válido" });
  }

  if (!aluno) {
    return res
      .status(404)
      .send({ mensagem: "O ID informado não foi encontrado" });
  }

  aluno.curso = curso;

  res.status(200).send();

}

const alteraCurso = (req, res) => {
  const { id } = req.params;
  const {curso} = req.body;

  if (isNaN(id) || verificaFloat(id)) {
    return res.status(400).send({ mensagem: "O ID deve ser um número válido" });
  }

  const buscaCurso = cursos.find((curso) => {
    return curso.id === Number(id);
  });

  if (!buscaCurso) {
    return res
      .status(404)
      .send({ mensagem: "O ID informado não foi encontrado" });
  }

  if (!curso) {
    return res.status(400).send({ mensagem: "O curso não foi informado." });
  }


  buscaCurso.curso = curso;

  res.status(200).send();
}

module.exports = {
  buscarAluno,
  validaAluno,
  listarAlunos,
  deletaAluno,
  atualizaCurso,
  alteraCurso
};
