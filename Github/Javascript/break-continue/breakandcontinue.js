for(var i = 10; i > 0; i --){
    console.log(i);

    if(i===5){
        break;
    }
//break manipula o loop, parando ele no valor atribuido
}
console.log("Deu break");

var x = 10;

while(x<100){

    x += 10;
    if(x === 60 || x === 100){
        continue;
    } // O continue pula o valor atribuido dentro do if, que neste caso foi o 60
   
    console.log("Testando continue " + x); 
}