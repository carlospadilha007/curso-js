function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * 1 - this.desc}`
}

const produto = {
    nome: "note",
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco)

const carro = {preco: 50000, desc: 0.2}
// o call e o appla permitem passar os valores
// e o contexto de execção de uma funcao
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
// sendo que no caso do applay os parametros devem ser passados dentro de um array
console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro, [0.17, "$"]))
