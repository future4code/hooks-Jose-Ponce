//Exercícios de interpretação de código____________________________

//1 vai ser impresso a array usuarios inteira com o nome, apelido e o indice.
//2 vai ser impresso apenas os nomes dos usuarios, sem o apelido.
//3 vai ser impresso todos os usuarios que não tivrem o apelido "Chijo".




//Exercícios de escrita de código_____________________________

// //1A

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// const arrQuestaoA = pets.map(item => {
//     return item.nome
// })
// console.log(arrQuestaoA)

// //2B

// const arrQuestaoB = pets.filter(item =>{
//     return item.raca == "Salsicha"

// })
// console.log(arrQuestaoB)


// const enviarMensagem = (item) =>{
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item}!`)
// }

// //2C

// const arrQuestaoC = pets.filter(item =>{
    
//     if(item.raca == "Poodle"){ 
        
//         enviarMensagem(item.nome)
//     }

// })

//2A
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// const apenasNomeItem = produtos.map(item =>{
//     return item.nome        
// })
// console.log(apenasNomeItem)

// //2B

// const desconto5 = (itemPreco) =>{
//    return (itemPreco * 5/100)
// }

// const nomeEPreco = produtos.map(item =>{
//     return `Nome: ${item.nome}Valor: ${item.preco} e seu desconto ${desconto5(item.preco)}`
// })

// console.log(nomeEPreco)

//2C
// const apenasBebidas = produtos.filter(item =>{
//     return item.categoria == "Bebidas"
// })
// console.log(apenasBebidas)

// //2D
// const apenasYpe = produtos.filter(item =>{
//     return item.nome.includes("Ypê")
// })
// console.log(apenasYpe)

//2E
// const fraseYpe = produtos.filter(item =>{
//     if(item.nome.includes("Ypê")){
//        console.log(`Compre ${item.nome} por ${item.preco}`)
//     }

// })
// console.log(fraseYpe)


//DESAFIOS____________________________________________________________

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const alfabetoPoke = pokemons.sort(item =>{
})
console.log(alfabetoPoke)


