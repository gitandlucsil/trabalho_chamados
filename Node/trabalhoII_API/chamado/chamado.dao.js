const db = require('../db/db');
const Chamado = require('./chamado.model');

exports.listar = (fnCallback) => {
    db.connect()

    let c = Chamado.find()
    c.sort('-data')
    c.populate('departamento')
    c.exec( (e, ret) => {
        db.disconnect()
        fnCallback(ret)
    })
}

exports.salvar = (dados, fnCallback) => {
    db.connect()

    let c = new Chamado(dados)
    c.status = 1
    c.data = new Date()
    

    c.save( (e, ret) => {
        if (e) {
            console.log(e)
        } 
        
        db.disconnect()
        fnCallback()
    })
}

exports.excluir = (id, fnCallback) => {
    db.connect()
    Chamado.findByIdAndDelete(id, (e, ret) => {
        db.disconnect()
        fnCallback()
    })
}

exports.atualizar = (tarefa, fnCallback) => {
    db.connect()

    Chamado.findByIdAndUpdate(tarefa._id, tarefa, (e, ret) => {
        if (e) {
            console.log(e)
        } 

        db.disconnect()
        fnCallback()
    })
}

exports.analisar = (tarefa, fnCallback) => {
    db.connect()

    Chamado.findByIdAndUpdate(tarefa._id, tarefa, (e, ret) => {
        if (e) {
            console.log(e)
        } 

        db.disconnect()
        fnCallback()
    })
}

exports.aceitar = (tarefa, fnCallback) => {
    db.connect()

    Chamado.findByIdAndUpdate(tarefa._id, tarefa, (e, ret) => {
        if (e) {
            console.log(e)
        } 

        db.disconnect()
        fnCallback()
    })
}

exports.rejeitar = (id, fnCallback) => {
    db.connect()
    Chamado.findByIdAndDelete(id, (e, ret) => {
        db.disconnect()
        fnCallback()
    })
}

exports.concluir = (tarefa, fnCallback) => {
    db.connect()

    Chamado.findByIdAndUpdate(tarefa._id, tarefa, (e, ret) => {
        if (e) {
            console.log(e)
        } 

        db.disconnect()
        fnCallback()
    })
}