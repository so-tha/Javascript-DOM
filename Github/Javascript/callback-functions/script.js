//exibir a funçao
function exibir(num){
    console.log(num)
}
function soma(a,b, callback) {
    var operacao = a + b;
    callback(operacao)
}
function multiplicacao(a,b, cb){
    var operacao = a * b;
    cb(operacao)
}

soma(20, 40, exibir)
multiplicacao(30, 40, exibir)
// uma função que é executada depois do evento