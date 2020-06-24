const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') // a saida padrão
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // quando entramos com o dados pelo teclado damos enter
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}