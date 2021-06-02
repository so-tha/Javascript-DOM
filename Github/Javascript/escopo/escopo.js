var x = 1; //global
var y = 3;
//var - possuo acesso em todo o codigo
console.log(x,y)

function teste(){
    //escopo local - usa-se let 
    //não possuo acesso fora desta função
    let z = 0;
    console.log(z)
}
teste();

//podem ter o mesmo nome caso forem de um escopo local