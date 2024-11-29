const mongoose = require('mongoose');

const alunoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
