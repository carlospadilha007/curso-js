// node faz cache de valores (mantem como uma unica instancia)
// se o objeto ja tiver cido cridado ele retorna sempre a mesma instancia
module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}
