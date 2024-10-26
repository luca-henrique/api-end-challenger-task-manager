# Task Manager

### Descrição:

Além disso, o backend deverá se conectar a um banco de dados relacional (MySQL ou PostgreSQL) para persistir os dados de tarefas e usuários.

## Requisitos:

### Stack:

Javascript / NodeJS

### Backend:

**1 - API RESTful:**

- Criar endpoints para:
  - Criar um usuário (POST /users)
  - Autenticação de usuário via JWT (POST /login)
  - CRUD de tarefas:
    - Listar tarefas do usuário autenticado (GET /tasks)
    - Criar uma nova tarefa (POST /tasks)
    - Atualizar uma tarefa (PUT /tasks/:id)
    - Excluir uma tarefa (DELETE /tasks/:id)
  - Todas as rotas de tarefas devem estar protegidas e requerer um token JWT válido.
  - O usuário só deve ter acesso às suas próprias tarefas.

**2- Validações:**

- Validação de dados de entrada (ex: e-mail, senha, título da tarefa).
- Títulos de tarefas não podem ser duplicados para o mesmo usuário.

**3 - Banco de Dados:**

- Utilizar um banco relacional (PostgreSQL ou MySQL).

### O que será avaliado:

- Estrutura do código: Clareza e organização.
- Boas práticas: Seguir padrões como REST, tratamento de erros, segurança (ex: validação de input, autenticação).
- Domínio da stack: Proeficiência com Node.js, React e o banco de dados escolhido.
- Documentação: README explicando como rodar o projeto, as dependências e os principais detalhes de implementação.

### Entrega:

Enviar o link do github com os repositórios para os seguintes e-mails:

- alex.nunes@gtrademark.com.br
- denis.caldeira@gtrademark.com.br

https://medium.com/@ajayranabhatofficial/mastering-unit-testing-in-express-with-jest-a-real-world-guide-18c46724e864
https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
