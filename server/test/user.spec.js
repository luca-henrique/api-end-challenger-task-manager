import request from "supertest";
import app from "../../app.js";

// Mock de banco de dados para evitar interações reais durante os testes
jest.mock("../data/user.js", () => ({
  getUserByEmail: jest.fn(),
  createUser: jest.fn(),
}));

const { getUserByEmail, createUser } = require("../data/user.js");

describe("POST /user", () => {
  it("Deve registrar um usuário novo com sucesso", async () => {
    getUserByEmail.mockResolvedValueOnce(null); // simula e-mail inexistente
    createUser.mockResolvedValueOnce({});

    const response = await request(app).post("/user").send({
      email: "novo@exemplo.com",
      password: "senha123",
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
    expect(createUser).toHaveBeenCalled();
  });

  it("Deve retornar erro ao registrar um e-mail já existente", async () => {
    getUserByEmail.mockResolvedValueOnce({ email: "existente@exemplo.com" });

    const response = await request(app).post("/user").send({
      email: "existente@exemplo.com",
      password: "senha123",
    });

    expect(response.status).toBe(401);
    expect(response.text).toBe("E-mail já existe!");
    expect(createUser).not.toHaveBeenCalled();
  });
});
