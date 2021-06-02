var lista = ['Donghae', 'Hyukjae','Heechul','Kyuhyun']

var listaUL = document.createElement("ul")
//Cria um elemento onde o array é apresentado como uma lista não ordenada.

var body = document.getElementsByTagName('body');
//Insere a ul no html, neste caso por meio da tag Body (Pode ser outra)

console.log(body[0]) 
//Tem acesso a tag body de fato, mostrando ela

body[0].appendChild(listaUL);
//Insere o elemento filho na tag Body

var listaNoBody = document.getElementsByTagName('ul')
//Usando a tag pois é o unico elemento criado no html
console.log(listaNoBody[0]);
//Mostra a lista que esta na ul (ainda vazia no html)

for(var i = 0; i < lista.length; i++){
    //Inserindo o appendchild de todos os itens, criando o elemento Li.
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i])
    //Cria um outro elemento de texto
    liFor.appendChild(textoLi);
    //Uni os elementos li e texto, formando a lista com os itens
    listaNoBody[0].appendChild(liFor);
    //Adiciona a lista ja em conjunto no html
}
//