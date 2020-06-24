const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = pessoa => pessoa.pais === 'China'
const sexo = pessoa => pessoa.genero === 'F'
const calculaMenorSalario = (fun, fAtual) =>{
    return fun.salario < fAtual ? fun: fAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    const resultado = funcionarios.filter(pais)
    .filter(sexo)
    .reduce(calculaMenorSalario)
    console.log(resultado)

})
