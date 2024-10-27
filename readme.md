# Task Manager

### Descrição:

Além disso, o backend deverá se conectar a um banco de dados relacional (MySQL ou PostgreSQL) para persistir os dados de tarefas e usuários.

# Projeto Node com Express e PostgreSQL

## Descrição

Este projeto é uma aplicação Node.js utilizando o Express para criação de uma API RESTful. O banco de dados utilizado é o PostgreSQL, e as queries são feitas diretamente em SQL.

## Instalação

### Requisitos

- Node.js
- PostgreSQL

### Passos

1. Clone este repositório: `git clone https://github.com/luca-henrique/api-end-challenger-task-manager`
2. Instale as dependências: `npm install`
3. Configure o banco de dados PostgreSQL:
   - Crie um banco de dados no PostgreSQL.
   - Execute a query abaixo no banco de dados para criar as tabelas necessárias:

```sql
create table users (
  id serial primary key,
  email text not null unique,
  password text not null,
  date timestamp default now()
);

create table task(
  id serial primary key,
  title text not null,
  content text not null,
  date timestamp default now()
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```

4. Configure as variáveis de ambiente no arquivo .env:
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=seu_banco_de_dados
   PRIVATE_KEY=sua_chave_privada
5. Inicie a aplicação: npm start

# API Endpoints

## Autenticação

### `POST /sign-in`

Autentica o usuário com email e senha.

- **Requisição**

  - Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- **Resposta**
  - **200 OK**:
    ```json
    {
      "data": {
        "user": {
          // Informações do usuário
        },
        "token": "string"
      }
    }
    ```
  - **401 Unauthorized**: Usuário não encontrado ou credenciais incorretas.
  - **Erro 500**: Em caso de erro no servidor.

---

## Tarefas

### `GET /task`

Retorna todas as tarefas do usuário autenticado.

- **Requisição**
  - Headers:
    - `Authorization: Bearer <token>`
- **Resposta**
  - **200 OK**:
    ```json
    {
      "data": [
        // Lista de tarefas do usuário
      ]
    }
    ```

### `GET /task/:id`

Retorna uma tarefa específica pelo seu ID.

- **Requisição**
  - Headers:
    - `Authorization: Bearer <token>`
  - URL Params:
    - `id`: ID da tarefa
- **Resposta**
  - **200 OK**:
    ```json
    {
      "data": {
        // Dados da tarefa
      }
    }
    ```

### `POST /task`

Cria uma nova tarefa para o usuário autenticado.

- **Requisição**

  - Headers:
    - `Authorization: Bearer <token>`
  - Body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Resposta**
  - **200 OK**:
    ```json
    {
      "data": {
        // Dados da tarefa criada
      }
    }
    ```

### `PUT /task/:id`

Atualiza uma tarefa específica pelo ID.

- **Requisição**

  - Headers:
    - `Authorization: Bearer <token>`
  - URL Params:
    - `id`: ID da tarefa
  - Body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Resposta**
  - **200 OK**:
    ```json
    {
      "data": {
        // Dados da tarefa atualizada
      }
    }
    ```

### `DELETE /task/:id`

Deleta uma tarefa específica pelo ID.

- **Requisição**
  - Headers:
    - `Authorization: Bearer <token>`
  - URL Params:
    - `id`: ID da tarefa
- **Resposta**
  - **200 OK**:
    ```json
    {
      "message": "Foi de arrasta"
    }
    ```

---

## Usuário

### `POST /user`

Registra um novo usuário com email e senha.

- **Requisição**

  - Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- **Resposta**
  - **201 Created**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **401 Unauthorized**: Email já cadastrado.
