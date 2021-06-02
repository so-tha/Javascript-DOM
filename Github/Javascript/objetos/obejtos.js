var obj = { 
    nome: 'Thais',
    idade: '21',
    profissao: "fã do Super Junior"
}
//se encotra dentro dos colchetes {}
// separado por virgula

console.log(obj);
console.log(typeof obj); //imprime o tipo, que no caso é objeto. 
//acessando uma propriedade no objeto
console.log('Idade: ' + obj.idade) //para acessar apenas a idade
// Para atribuir um novo valor basta chamar dnv o objeto desejado.
obj.profissao = "Programadora"
console.log(obj.profissao)
console.log(obj) // O ultimo valor atribuido se torna o principal

// Adcionando uma nova propriedade
obj.graduacao = true;
console.log(obj)

obj.graduacao = "Analise e Desenvolvimento de Sistemas"
console.log(obj)