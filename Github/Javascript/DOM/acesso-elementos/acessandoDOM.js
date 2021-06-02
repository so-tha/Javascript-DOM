// acessando por tag
var titulo = document.getElementsByTagName("h1")[0];
//ele pega todas as tag informadas 
// [0] é pq pega o indice 0, que no caso é o primeiro 
console.log(titulo)

// acessando por id
var paragrafo = document.getElementById('paragrafo')
//metodo singular, pois ele espera apenas uma id
console.log(paragrafo)

//acessando por classe
var itensDaLista = document.getElementsByClassName('itens')
//metodo que espera varias classes
console.log(itensDaLista)

//       --------------------------------- 
