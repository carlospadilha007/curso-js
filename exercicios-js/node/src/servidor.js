const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const dB = require("./bancoDeDados")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/produtos", (req, res, next) =>{
    res.send(db.getProdutos())
})

app.get("/produtos/:id", (req, res, next) =>{
    res.send(db.getProduto(req))
})

app.post("/produtos", (req, res, next) =>{
    const produto = dB.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executado na porta ${porta}`)
})