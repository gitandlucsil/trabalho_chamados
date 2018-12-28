const dao = require('./cad_departamento.dao')

module.exports = (app) => {

    app.route("/cad_departamento/listar").get( (req, resp) => {
        dao.listar(req.departamento, (retorno) => {
            resp.json(retorno)
        })
    })

    app.route("/cad_departamento/salvar").post( (req, resp) => {
        dao.salvar(req.body, () => {
            resp.json({})
        })
    })
}
