/*Desenvolva um aplicativo que tenha um procedimento chamado 
Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos 
termos da sequência serão mostrados na tela. O seu procedimento deve receber 
esse valor e mostrar a quantidade de elementos solicitados.
Obs: Use os exercícios 70 e 75 para te ajudar na solução */
function Fibonacci(vi){
    let penultimo =  1
    let soma = 0
    let ultimo = 1
    
    for(let i = 1; i <= vi;i++){
        console.log(`${penultimo}`)
        if(soma == 0){
            soma = 1
        }else{
            soma = penultimo + ultimo
        } 
        penultimo = ultimo
        ultimo = soma
}
}
Fibonacci(10)