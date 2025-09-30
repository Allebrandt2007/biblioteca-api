import express from "express";
import sequelize from "./config/database.js";
import livrosRoutes from "./routes/livros.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Rotas
app.use("/livros", livrosRoutes);

// Middleware de erro (sempre no final)
app.use(errorHandler);

// Conectar banco e iniciar servidor
sequelize.sync()
  .then(() => {
    console.log("✅ Banco sincronizado com sucesso!");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Erro ao conectar no banco:", err);
  });
