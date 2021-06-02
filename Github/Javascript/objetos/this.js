//this se refere ao objeto global window
var teste = 5;
console.log(this.teste)

let pessoa = {
    nome : "Thais",
    idade : 21,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    dizernome: function(){
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function(){
        this.idade += 1;
    }
}
pessoa.dizernome();
console.log(pessoa.idade);
pessoa.aniversario();

this.alert("Olá") //abre um alert 
// ele ocupa o local do window 