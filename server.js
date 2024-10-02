const express = require('express');
const app = express();

// Rota para a página HTML simples http://localhost:3000
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao meu site!</h1><p>Este é um exemplo básico usando Express.</p>');
});

// Rota para a API que retorna um objeto JSON http://localhost:3000/api/data
app.get('/api/data', (req, res) => {
  res.json({
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
  });
});

app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000');
});
