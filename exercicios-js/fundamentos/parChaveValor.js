// par nome/valor
const saudacao = "opa" // contexto lexico 1

function exec(){
    const saudacao = "fallaaaa"
    return saudacao
}

// objetos são aninhados de pares nome/valor
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)