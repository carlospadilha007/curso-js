const funcoes = []
funcoes.push(function (capital, taxa_juros, tempo_aplicacao){
    let soma = 0
    for(let i = 0; i < tempo_aplicacao; i++){
        soma += capital * taxa_juros
    }
    return capital + soma
})

funcoes.push(function (capital, taxa_juros, tempo_aplicacao){
    for(let i = 0; i < tempo_aplicacao; i++){
        capital += capital * taxa_juros
    }
    return capital
})

console.log(funcoes[0](1000, 0.004, 120))
console.log(funcoes[1](1000, 0.004, 120))
