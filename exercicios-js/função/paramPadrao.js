// estrategia 1
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    console.log(a + b + c)
} // buga com o zero de é falso

soma1()
soma1(3)
soma1(1, 2, 3)
soma1(0, 0 , 0)

// estrategia 2, 3 e 4
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    console.log(a + b + c)
}

soma2()
soma2(3)
soma2(1, 2, 3)
soma2(0, 0 , 0)

// valor padrão do es2015
function soma2(a = 1, b = 1, c = 1){
    console.log(a + b + c)
}

