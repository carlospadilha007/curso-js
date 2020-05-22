const pessoa = {
    saudacao: 'bao dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito dos paragmas funcional e obj

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()