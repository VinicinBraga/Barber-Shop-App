const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cliente = new Schema({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    enum: ["M", "F"],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
    default: "active",
  },
  documento: {
    tipo: {
      type: String,
      enum: ["cpf", "cnpj"],
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
    required: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cliente", cliente);
