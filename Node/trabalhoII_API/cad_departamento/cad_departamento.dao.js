const db = require('../db/db')
const Departamento = require('./cad_departamento.model')

const mongoose = require('mongoose')

exports.salvar = (departamento, fnCallback) => {
    db.connect()
    
    let p = new Departamento(departamento)

    p.save( (e, res) => {        
        db.disconnect()
        fnCallback()
    })
}

exports.listar = (departamento, fnCallback) => {
    db.connect()

    let q = Departamento.find( { departamento : departamento })   
    q.exec( (e, ret) => {
        db.disconnect()
        fnCallback(ret)
    })
}
