const divisao = function(dividendo = 1, divisor = 1){
    if (Number.isFinite(dividendo/divisor)){
        console.log(dividendo/divisor)
        console.log(dividendo % divisor)
    }else{
        console.log("Erro! Divisão por 0")
    }
}

divisao(3, 4)