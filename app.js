import app from "./server/server.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;