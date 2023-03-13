const mongoose = require("mongoose");

const etapasSchema = mongoose.Schema({
  id: {type: Number, required: true},
  nome: {type: String, required: true},
  concluido: {type: Boolean, required: true},
});
const tarefasSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    data: { type: String, required: true },
    prioridade: { type: Number, required: true },
    categorias: {type: [String], required: true},
    etapas:  [etapasSchema],
    concluido: { type: Boolean, required: true },
});



module.exports = mongoose.model("Tarefas", tarefasSchema);
