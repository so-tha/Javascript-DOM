/* Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses 
valores para um procedimento Maior() que vai verificar qual deles é o maior e 
mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem 
informando essa característica.*/

function Maior(v1,v2){

    console.log(`${v1} ${v2}`)
    if(v1 > v2){
    console.log(`${v1} é maior que ${v2}`)
}else if(v1 < v2){
    console.log(`${v2} é maior que ${v1}`)
}else if(v1 == v2){
    console.log(`Eles são iguais`)
}

}
Maior(6,8)
Maior(20,20)
Maior(10,5)
