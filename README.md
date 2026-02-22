# 📝 Todo App - Backend

Backend de uma aplicação Todo (lista de tarefas) desenvolvido com Node.js, Express e MongoDB.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Cors
- Nodemon (dev)

---

## 📂 Estrutura do Projeto

todo-app-backend/
│
|
│── Controllers/
│ └── todo.controller.js
│
│── Models/
│ └── todo.model.js
│ 
│── Routes/
│ └── todo.routes.js
│ 
│── Database/
│ └── db.js
│ 
│── Server.js
│
├── .env
├── package.json
└── server.js
|__ README.md


---

## ⚙️ Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-app-backend.git
2️⃣ Entre na pasta do projeto
cd todo-app-backend
3️⃣ Instale as dependências
npm install
4️⃣ Configure o arquivo .env

Crie um arquivo .env na raiz do projeto:

PORT=5000
MONGO_URI=sua_string_de_conexao_mongodb
▶️ Rodando o Projeto
Modo desenvolvimento
npm run dev
Modo produção
npm start

Servidor rodando em:

http://localhost:5000
📌 Endpoints da API
🔹 Criar uma nova tarefa

POST /api/todos/add

{
  "title": "Estudar Node.js",
  "completed": false
}

🔹 Listar todas as tarefas

GET /api/todos/getAll

🔹 Buscar tarefa por ID

GET /api/todos/getOne/:id

🔹 Atualizar tarefa

PUT /api/todos/update/:id

{
  "title": "Estudar Express",
  "completed": true
}
🔹 Deletar tarefa

DELETE /api/todos/delete/:id

🧠 Modelo da Tarefa (Mongoose)
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
📦 Scripts Disponíveis
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}


📄 Licença

Este projeto está sob a licença MIT.

👨‍💻 Autor

Desenvolvido por [Italo Marcelo]