let lista = document.getElementById("lista-nome")
//console.log(lista.childNodes)
let botao = document.getElementsByClassName("button")
botao[0].addEventListener("click", function(){
    lista.childNodes.forEach(element => {
    let nome = element.textContent
    let tamanho = nome.length
    element.innerText = `${nome} - ${tamanho}`
});
})

