const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar sessão para expirar ao fechar navegador
app.use(session({
  secret: 'chave_super_secreta',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // Segurança: cookie não acessível via JS
    // maxAge NÃO definido, o que torna o cookie de sessão (expira ao fechar navegador)
  }
}));

// Middleware para proteger todas as rotas em /admin/painel/
app.use('/admin/painel', (req, res, next) => {
  if (req.session.autenticado) {
    next();
  } else {
    res.redirect('/admin/seguranca.html');
  }
});

// Rota para processar o login de segurança
app.post('/seguranca', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'adm1234') {
    req.session.autenticado = true;
    res.redirect('/admin/painel/painel.html');
  } else {
    res.send('<h3>Usuário ou senha incorretos. <a href="/admin/seguranca.html">Tentar novamente</a></h3>');
  }
});

// Rota para logout (destrói sessão)
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Erro ao sair');
    }
    res.redirect('/admin/seguranca.html');
  });
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar conexão MySQL (mantendo seu código)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vrumvrum',
  database: 'sistema'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

// Rota para cadastrar usuário
app.post('/cadastrar', (req, res) => {
  const { nome, nascimento, email, telefone, genero, senha } = req.body;
  const sql = 'INSERT INTO usuarios (nome, nascimento, email, telefone, genero, senha) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nome, nascimento, email, telefone, genero, senha], (err, result) => {
    if (err) return res.status(500).send('Erro ao cadastrar');
    res.redirect('/login/login.html');
  });
});

// Rota para buscar usuários (usado no painel)
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send('Erro ao buscar usuários');
    res.json(results);
  });
});

// Rota para editar usuários
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const sql = 'UPDATE usuarios SET nome = ? WHERE id = ?';
  db.query(sql, [nome, id], (err, result) => {
    if (err) return res.status(500).send('Erro ao editar usuário');
    res.send('Usuário atualizado com sucesso');
  });
});

// Rota para deletar usuários
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM usuarios WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send('Erro ao deletar usuário');
    res.send('Usuário excluído com sucesso');
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
