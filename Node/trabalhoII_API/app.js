const express = require('express')
const cors = require('cors')

const chWS = require('./chamado/chamado.ws')
const dptoWS = require('./cad_departamento/cad_departamento.ws')

const app = express()

app.use(express.json())
app.use(cors())

chWS(app)
dptoWS(app)

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
})