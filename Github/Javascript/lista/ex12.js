/*Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma 
adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o 
maior entre eles.*/
function Maior(v1,v2,v3){

    if(v1 > v2 && v1 > v3){
    console.log(`${v1} é maior que ${v2} e ${v3}`)
}else if(v2 > v1 && v2 > v3){
    console.log(`${v2} é maior que ${v1} e ${v3}`)
}else if (v3 > v1 && v3 > v2){
    console.log(`${v3} é maior que ${v1} e ${v2}`)
}else if(v1 == v2 && v1 == v3){
    console.log(`Eles são iguais`)
}

}
Maior(10,45,80)