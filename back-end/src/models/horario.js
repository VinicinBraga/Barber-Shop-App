const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const horario = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: "Salao",
    required: true,
  },
  especialidades: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Servicos",
      required: true,
    },
  ],
  Colaboradores: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Colaborador",
      required: true,
    },
  ],
  dias: {
    type: [Numbers],
    required: true,
  },
  inicio: {
    type: Date,
    requided: true,
  },
  fim: {
    type: Date,
    requided: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Horario", horario);
