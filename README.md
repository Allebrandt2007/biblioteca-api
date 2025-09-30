📚 Biblioteca API

API RESTful para gerenciamento de livros de uma biblioteca, construída com **Node.js, Express, Sequelize e SQLite**.  
Este projeto é uma atividade prática para aplicar conceitos de **CRUD**, organização em camadas e boas práticas de desenvolvimento.

Tecnologias
- Node.js
- Express
- Sequelize
- SQLite

Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/Allebrandt2007/biblioteca-api.git
   cd biblioteca-api

Instale as dependencias: npm install

Inicie o servidor: npm start

O servidor estará disponivel em: http://localhost:3000

📌 Endpoints
🔹 Listar livros
GET /livros

🔹 Buscar livro por ID
GET /livros/:id

🔹 Cadastrar livro
POST /livros


Body (JSON):

{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "descricao": "Romance clássico da literatura brasileira."
}

🔹 Atualizar livro
PUT /livros/:id

🔹 Remover livro
DELETE /livros/:id


