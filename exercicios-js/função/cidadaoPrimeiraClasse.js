// criar de forma literal
function fun1() {
    
}

// armazenar em uma variavel
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b) {return a * b}, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em atributo de obj
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar)

// passar função como parametro
function run(f){
    f()
}
run(fun2)
// uma função pode conter/retornar funções

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const s = soma(2, 3)
s(4)