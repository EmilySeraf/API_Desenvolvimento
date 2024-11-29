const Aluno = require('../models/Aluno');

const listarAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const criarAluno = async (req, res) => {
  const { nome, idade, curso } = req.body;

  const aluno = new Aluno({
    nome,
    idade,
    curso,
  });

  try {
    const novoAluno = await aluno.save();
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const atualizarAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(aluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removerAluno = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.json({ message: 'Aluno removido com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { listarAlunos, criarAluno, atualizarAluno, removerAluno };
