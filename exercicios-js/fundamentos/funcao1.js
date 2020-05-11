function imprimeSoma(a, b){
    console.log(a + b)
}

imprimeSoma(2, 3)

// retorno

function soma(a, b=0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))