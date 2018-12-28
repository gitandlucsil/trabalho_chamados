const mongoose = require('mongoose')
const types = mongoose.Schema.Types

const chamadoSchema = new mongoose.Schema({    
    departamento : {
        type : types.ObjectId,
        ref : 'Departamento'
    },
    descricao : String,
    data : Date,
    solicitante : String,
    status : Number
})

module.exports = mongoose.model("Chamado", chamadoSchema)