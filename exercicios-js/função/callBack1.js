// são funncões que são chamadas
//quando são disparados algum evento
// ele chama de volta
const fabricantes = ["mercedes", "audi", "bmw"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))