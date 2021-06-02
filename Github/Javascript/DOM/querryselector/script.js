//querrySelectorALL
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);
// o que muda é que na hora de especificar o novo elemento se colocar como no css. Por exemplo neste está pegando apenas a os itens da lista 2. 
//Ele pega todos os itens das especificações
var itensQuery = document.querySelectorAll('#lista .item');
console.log(itensQuery);

//QuerySelect - individual 
//pega apenas um elemento

var lista = document.querySelector('#lista')
console.log(lista)