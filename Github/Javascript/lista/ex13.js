/*Crie um programa que tenha uma função SuperSomador(), que vai receber dois 
números como parâmetro e depois vai retornar a soma de todos os valores no 
intervalo entre os valores recebidos.
Ex: 
SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85*/
let soma = 0
function SuperSomador(n1,n2){
   
    for(let i = n1;i <= n2; i++){
        
        console.log(i)
        soma = (n1 += i) - 10
    }
    console.log(soma)
}
SuperSomador(10,20)