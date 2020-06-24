const pesso1 = (ctx, next) =>{
    ctx.valar1 = "mid1"
    next()
}
const pesso2 = (ctx, next) =>{
    ctx.valar2 = "mid2"
    next()
}

const pesso3 = (ctx) => ctx.valar3 = "mid3"

const exec = (ctx, ...midlewares) => {
    const execPasso = indice =>{
        midlewares && indice < midlewares.length
        && midlewares[indice](ctx, ()=> execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, pesso1, pesso2, pesso3)
console.log(ctx)
