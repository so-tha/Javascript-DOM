let x = 5; //variavel de escopo local

const y = 10 // não se pode mudar o valor de uma constante

x = 12;
console.log(x)

if(true){
    let x = 20;
    console.log(x);

    const y = 50;
    console.log(y) //apenas se pode criar uma outra const dentro de outro escopo
    
}

console.log(x)