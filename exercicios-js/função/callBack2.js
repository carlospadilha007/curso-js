const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
// com call back
const notasBaixas2 = notas.filter(function (nota){ 
    return nota < 7 // se for true callback retona a nota e o filter adiciona
})

const notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas1)
console.log(notasBaixas2)
console.log(notasBaixas3)