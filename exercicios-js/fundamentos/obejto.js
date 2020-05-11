const prod1 = {}
prod1.nome = "Celular sultra mega"
prod1.preco = 5000
prod1["Desconto legal"] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa polo",
    preco: 80.90,
    obj:{
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

console.log(prod2)