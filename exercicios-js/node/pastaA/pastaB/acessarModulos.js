const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const htpp = require("http")
htpp.createServer((req, res)=>{
    res.write("Bom dia")
    res.end()
}).listen(8080)

const c = require("./pastaC")
console.log(c.ola2)
