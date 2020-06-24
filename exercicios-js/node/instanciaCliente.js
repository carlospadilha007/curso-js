const intanciaA = require('./instanciaUnica')
const intanciab = require('./instanciaUnica')

const intanciaC = require('./instanciaUnica')()
const intanciaD = require('./instanciaUnica')()

intanciaA.inc()
intanciaA.inc()
console.log(intanciab)

intanciaC.inc()
intanciaC.inc()
console.log(intanciaD)