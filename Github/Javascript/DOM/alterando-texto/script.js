//selecionar o elemento
var title = document.querySelector('#title');

//alterarando o texto
//innerHTML
title.innerHTML = "Testando o texto alterado!";

//textContent - mais recomendavel e utilizado
var subtitle = document.querySelector(".subtitle");
console.log(subtitle);

subtitle.textContent = "Testando o textContent"