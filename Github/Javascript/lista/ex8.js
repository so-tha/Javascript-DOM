/*Faça um programa que tenha um procedimento chamado Contador() que recebe 
três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
programa principal deve solicitar a digitação desses valores e passá-los ao 
procedimento, que vai mostrar a contagem na tela.*/

function Contador(v1,v2,v3){
    for(v1 = v1;v1 <= v2;v1 += v3){
        console.log(`${v1}`)
    }
}
Contador(1,6,2)
Contador(0,10,1)