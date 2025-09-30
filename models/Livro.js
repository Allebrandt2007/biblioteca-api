import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Livro = sequelize.define("Livro", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  anoPublicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: "livros"
});

export default Livro;
