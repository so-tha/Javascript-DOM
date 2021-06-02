// criar um elemento
var el = document.createElement("h3");

el.classList = "testando-classe" //classlist cria uma classe
el.classList.add("testando-classe2" ) //adciona mais uma classe
el.classList.remove("testando-classe2") // remove a classe do array
console.log(el.classList)
var texto = document.createTextNode("Este é um titulo nivel h3")//Cria um elemento(node) do tipo texto 

el.appendChild(texto)//adcionando o filho do tipo texto (node)

// selecionar o elemento que quero trocar

var title = document.querySelector("#title");
console.log(title);

//selecionar o pai de el
var pai = title.parentNode; //parentN

//trocar elementos
pai.replaceChild(el, title); // coloca o h3 no lugar do titulo

// tentativa

var paragrafo = document.createElement("h4")
paragrafo.classList = "test"
var texto3 = document.createTextNode("Eu espero que funcione")
paragrafo.appendChild(texto3)
let body = document.querySelector("body")
body.appendChild(paragrafo)
//frameworks facilita 