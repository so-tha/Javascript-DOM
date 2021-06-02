/*) Crie uma lógica que leia um número inteiro e passe para um procedimento
ParOuImpar() que vai verificar e mostrar na tela se o valor passado como 
parâmetro é PAR ou ÍMPAR.*/

function Inteiro(n){
    console.log(`[${n}]`)
    if(n%2==0){
        console.log(`${n} é um numero par`)
    }else{
        console.log(`${n} é um numero impar`)
    }
}
Inteiro(6)