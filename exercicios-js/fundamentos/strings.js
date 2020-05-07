const escola = "Cod3r"

console.log(escola.charAt(4)) // pega o caracteri na posição
console.log(escola.charCodeAt(3)) // pega o caracteri no tabela unicode
console.log(escola.indexOf('3')) // verifica se o caracteri esta na string
console.log(escola.substring(1)) // vai apatir do um
console.log(escola.substring(1, 3)) // intervalo

console.log("Escola ".concat(escola.concat("!"))) // concatena
console.log(escola.replace(3, 'e')) // susbtitui o 3 pelo e

console.log('Ana, Maria, Pedro'.split(','))
