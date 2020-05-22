function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    console.log(soma)
}

soma()
soma(1)
soma(1.1, 2.2, 3.3)

soma(1.1, 2.2, "teste")
soma('a', 'b', 'c')