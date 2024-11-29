const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const alunoRoutes = require('./routes/alunoRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api/alunos', alunoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
