// são fucões que retornão obj
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Geleia", 9.9))