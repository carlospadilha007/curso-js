// amarrando o this a uma constante
function Pessoa1(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa1

// amarrando com bind
function Pessoa2(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(self.idade)
    }.bind(this), 1000)
}

new Pessoa2