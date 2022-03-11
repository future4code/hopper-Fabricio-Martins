// 1.  Leia o código abaixo
    
//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]
    
    // const novoArrayA = usuarios.map((item, index, array) => {
    //    console.log(item, index, array)
    // })
    
    
//     a) O que vai ser impresso no console?
 

//vai ser impresso nome das meninas com apelido e posição e depois imprimi array.


    // 2. Leia o código abaixo
    
//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    // console.log(novoArrayB)
//     ```
    
//     a) O que vai ser impresso no console?

// vai mostra somente nome das garotas pois so retorna o valor para o elemento.

//     - **Exercícios de interpretação de código**
    

//     3. Leia o código abaixo
        
//         ```jsx
        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayC = usuarios.filter((item, index, array) => {
        //    return item.apelido !== "Chijo"
        // })
        
        // console.log(novoArrayC)
//         ```
           // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayC = usuarios.filter((item, index, array) => {
        //    return item.apelido !== "Chijo"
        // })
        
        // console.log(novoArrayC)
//         a) O que vai ser impresso no console?
        
// imprime todo menos o quye tiver apelido Chijo


// - **Exercícios de escrita de código**
//     1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        
//         ```jsx
     
//         ```
        
//         - ⭐  Resultados esperados em cada item
            
//             ```jsx
//             // item A
//             [
//               "Lupin", 
//               "Polly",
//               "Madame",
//               "Quentinho", 
//               "Fluffy", 
//               "Caramelo"
//             ]
            
//             // item B
//             [
//                { nome: "Lupin", raca: "Salsicha"},
//                { nome: "Quentinho", raca: "Salsicha"}
//             ]
            
//             // item C
//             [
//               "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
//               "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
//             ]
//             ```
        //        const pets = [
        //    { nome: "Lupin", raca: "Salsicha"},
        //    { nome: "Polly", raca: "Lhasa Apso"},
        //    { nome: "Madame", raca: "Poodle"},
        //    { nome: "Quentinho", raca: "Salsicha"},
        //    { nome: "Fluffy", raca: "Poodle"},
        //    { nome: "Caramelo", raca: "Vira-lata"},
        // ]
        
//         a) Crie um novo array que contenha apenas o nome dos doguinhos

// const novoArrayCachorros = pets.map((dogName)=>{console.log(dogName.nome)})


//         b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
        
// let racaDoPet = pets.filter((dogRaca)=>{console.log(dogRaca.raca)})


//         c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
        
// let clientePoodles = pets.map((dogRaca)=>{
//     if (dogRaca.raca === "Poodle"){console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${dogRaca.nome} !`)}
// })

        
//     2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        

//             ```
            const produtos = [
           { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
           { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
           { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
           { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
           { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
           { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
           { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
           { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
           { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
           { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]
        
//         a) Crie um novo array que contenha apenas o nome de cada item

// const imprimeNome = produtos.map((item)=>{console.log(item.nome)})

//         b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
        
 const newArrey = produtos.map(produto=>{

    const item = {
        nome: produto.nome,
        preco: produto.preco*0.95.toFixed(2),
    }
return item

 })
console.log(newArrey)
        
     
// //         c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
        const bebidas = produtos.filter((prod)=>{
            return prod.categoria ==="Bebidas";
        })


// //         d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
        
const ipe = produtos.filter(produto=>produto.nome.includes("Ype"));
console.log(ipe)





// //         - 💡  Dica
            
// //             <aside>
// //             ⭐ Para te ajudar, você pode usar o método de stirngs chamado includes() que verifica se os caracteres escolhidos fazem parte da sua string
            
// //             E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!
            
// //             </aside>
            
        
// //         e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
      const produtoYpe = ipe.map((ype)=>{return `Compre ${ype.nome} por ${ype.preco}`});
      console.log(produtoYpe)

      