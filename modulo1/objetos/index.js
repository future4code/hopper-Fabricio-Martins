


//1. 

// a) O que vai ser impresso no console?

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// Matheus Nachtergaele 
// Virginia Cavendish
// canal: "Globo", horario: "14h"

//2. 

//a)

//console.log(cachorro)
// nome: "Juca", idade: 3, 	raca: "SRD"

//console.log(gato)
//nome: "Juba", idade: 3, 	raca: "SRD"

//console.log(tartaruga)
//nome: "Juco", idade: 3, 	raca: "SRD"

//b) os ... pontos copia  o objeto chamado assim formando mesmo objeto com nome diferente.

//3.

//a)

// console.log(minhaFuncao(pessoa, "backender"))


// false 

// console.log(minhaFuncao(pessoa, "altura"))

// undefine

//b)

//no primeiro console encontramos uma chamada pra objeto pesso com backender onde guarda valor false

// no segundo como objeto pessoa não possui categoria altura sua resposta sera undefine .


//Exercícios de escrita de código

//1.Resolva os passos a seguir: 

let ficha = {nome:"fabricio",apelidos:["kbcao","sakis","negao"]}

function transformador(){

    return console.log(`Eu sou ${ficha.nome}, mas pode me chamar de: ${ficha.apelidos[0]}, ${ficha.apelidos[1]} ou ${ficha.apelidos[2]}`)


}

transformador()


//b)

let ficha2 = {...ficha, apelidos:["pesadelo","eletricista","ligadesliga"]}

ficha = ficha2

transformador()

// 2 ) Resolva os passos a seguir: 

const pessoa  = {nome:"Eduardo",idade:36,profissão:"mecanico"}
const pessoa2 = {nome:"Marcus vinicius",idade:30,profissão:"inspetor"}


function minhaFuncao(pessoa,pessoa2){

    return console.log([pessoa.nome],[pessoa2.nome])

}

minhaFuncao(pessoa,pessoa2)


//3) 

//a) 
let carrinho = []


//b)

let fruta1={nome:"Laranja",Disponibilidade:true }
let fruta2={nome:"Uva",Disponibilidade:true }
let fruta3={nome:"Banana",Disponibilidade:true }


//c)
function sacolao(fruta1){

 

carrinho.push(fruta1.nome)
carrinho.push(fruta2.nome)
carrinho.push(fruta3.nome)
return console.log(carrinho)

}
sacolao(fruta1)


//D)
carrinho = [fruta1,fruta2,fruta3]

console.log(carrinho)


