/*Melhore o exercício 96, criando além da função Media() uma outra função 
chamada Situacao(), que vai retornar para o programa principal se o aluno está 
APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como 
parâmetro o resultado retornado pela função Media()*/


function Media(n1,n2){

    let media = (n1 + n2)/2
    console.log(`A media de ${n1} e ${n2} é de ${media}`)
}
 function Situacao( media = s1,s2,s3){
  s1 = 'APROVADO'
  s2 = 'RECUPERAÇÃO'
  s3 = 'REPROVADO'
  
 
 if (media <= 3){
     console.log(`O aluno está ${s3}`)
 }else if (media >= 4 && media <= 6){
     console.log(`O aluno está de ${s2}`)
 }else{
     console.log(`O aluno esta ${s1}`)
 }
}

Media(5,7)
Situacao(5,7)
