const resultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("Top")
            break
        case 8: case 7: case 6:
            console.log("Aprovado")
            break
        case 5: case 4:
            console.log("Recuperação") 
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
    }
}
resultado(8.1)
resultado(6)