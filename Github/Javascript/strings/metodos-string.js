//length - Te informa quantas letras possuem a string

let nome = 'thais'
console.log(nome.length)

//indexOf - Acessa a string por meio do indice

console.log(nome[2])

// slice - remove uma parte da string

let frase = 'A BLA DI BLA DU';
let roeu = frase.slice(3 ,4)
console.log(roeu)

//replace - Muda uma palavra da string

let novafrase = frase.replace("BLA", 'DI')
console.log(novafrase)

// toLowerCase e ToUpperCase - coloca todas em maiusculas ou minusculas

let lugar = 'Visconde do Rio Branco'
let maiusculas = lugar.toLocaleUpperCase();

console.log(maiusculas)
console.log(lugar.toLocaleLowerCase());

//trim - retira espaços desnecessarios, usado principalmente em formularios
let nome2 = '         Loui'

console.log(nome2.trim())

//split - Transforma uma string em um array
console.log(frase.split(" "));

//lastIndexOf - informa o indice da ultima palavra da string

console.log(frase.lastIndexOf(" bla"))

