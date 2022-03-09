// Exercícios de interpretação de código_____________________________________________________________
// 1) O código está fazendo um loop que só vai para quando a variável  chegar no valor 5

// 2)A)Vai ser impresso todos os numeros maiores que 18
// 2)B)Pode sim, vai ser necessário o indexOf() (Eu sei que não era para fazer, porém tive que testar para ter certeza, segue abaixo:)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18){
//         indice=lista.indexOf(numero)
//         console.log(numero,indice)   
//     }
// }

// 3) ****

// Exercícios de escrita de código____________________________________________________________________       
// 1)
// let i=0
// let quantosPets = Number(prompt("Quantos bichinhos de estimação você tem?"))
// if(quantosPets > 0){
    
// for (i = 0;i < quantosPets; i++){
//     let nomes = [prompt(`Qual o nome dos bichinhos? (cada um por vez!)`)]
//     console.log(nomes)
// }
// }
// else{
//     console.log("Que pena! Você pode adotar um pet!")
// }

// 2)
// A)

let arrayOriginal = [80, 30, 130, 40, 60, 21, 3 ]

// function imprimirFunc(original){
 
// return console.log(original)

// }

// imprimirFunc(arrayOriginal)

// // B) 

// function divisaoArr(original) {
//         for (let i = 0; original.length; i++){
//                 let itemArr = original[i]
//                 console.log(itemArr/10)
//         }

// }

// divisaoArr(arrayOriginal)

// // C)

// function numParesArr(original) {
//         const arrOriginalPares = []

//         for (let i = 0; i < original.length; i++){
        
//                 if (original[i] % 2 === 0){
//                         arrOriginalPares.push(original[i])

//                 }
                
//         }
        
//         console.log(arrOriginalPares)
// }

// numParesArr(arrayOriginal)
// D)
// function arrIndex (original) {
//         for (let i = 0; i < original.length; i++){
//                 itemArr = original[i]
//                 console.log(`O elemento do índex ${i} é: ${itemArr}`)

//         }
// }
// arrIndex(arrayOriginal)

function arrMaiorMenor (original) {
        let numMaior = 0
        
        for (let i = 0; i < original.length; i++){
                const numLista = original[i]
                if (numLista > numMaior){
                        numMaior = numLista

                }
                else {
                         numMenor = original[i]
                }  

                }
        console.log(`NUMERO MAIOR É ${numMaior}`)
        console.log(`NUMERO MENOR É ${numMenor}`)
}

arrMaiorMenor(arrayOriginal)




