const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

var schemaDepartamento = new Schema({
    nome : String
});

module.exports = mongoose.model("Departamento", schemaDepartamento);