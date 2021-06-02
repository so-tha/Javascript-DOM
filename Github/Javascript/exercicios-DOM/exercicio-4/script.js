let botao = document.getElementById("btn-nome")
botao.addEventListener('click', function(){
   let nome = document.getElementsByClassName("nome")
   console.log(nome)
   alert(nome[0].value)
   
})

// get elements by class name retorna um array. O primeiro sendo 0 
// get elementbyId retorna apenas 1
//addEventListener, possui dois parametros o primeiro que sera o evento que ele ira escutar (ex: click), e o segundo e a funçao que ele ira executar quando o evento acontecer.