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
function run(fun){
    fun()
}
