// criando um novo elemento
//neste exemplo um paragrafo
var novoparagrafo = document.createElement("p")

//inserindo no Body
var texto = document.createTextNode("Essse é o conteudo do Paragrafo")
novoparagrafo.appendChild(texto) //insere no HTML
console.log(novoparagrafo)

var body = document.querySelector("body");
console.log(body)
body.appendChild(novoparagrafo)

//inserindo em um container
var container = document.getElementById("container");
console.log(container)
var el = document.createElement("span")
el.appendChild(document.createTextNode("texto do span"))
console.log(el)
container.appendChild(el);
