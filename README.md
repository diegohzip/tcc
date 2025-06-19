TCC

site para visualização: https://diegohzip.github.io/tcc/telas%20-%20html%20e%20css/index.html

Use o site na sua máquina com essas funções no seu terminal:

**1. Clone o repositório
**
git clone https://github.com/diegohzip/tcc.git
cd tcc

**2. Instale as Dependências
**
npm install package.json express body-parser mysql2 express-session

**3. Instale o banco de dados a seguir:
**
CREATE DATABASE sistema;
USE sistema;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  nascimento DATE,
  email VARCHAR(100),
  telefone VARCHAR(20),
  genero VARCHAR(20),
  senha VARCHAR(100)
);

**4. Atualize as credenciais no server.js com suas informações
**
**4.1 Substitua isso
**
// Configurar conexão MySQL (mantendo seu código)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vrumvrum',
  database: 'sistema'
});

**4.2 Pelo seu user e sua senha
**
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sistema'
});

**5. Inicie o servidor
**
node server.js

**6. Acesse o servidor
**
Entre em localhost:3000 no seu navegador
