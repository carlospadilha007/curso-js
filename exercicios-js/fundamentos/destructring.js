// apartir do ES 2015

const pessoa = {
    nome: "Dara",
    idade: 19,
    endereco:{
        bairro: "penha",
        rua: "tal"
    }
}

const {nome, idade} = pessoa // pega todos as atribtos das chaves de uma vez
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco:{ bairro, rua}} = pessoa
console.log(bairro, rua)

