//----------------------------------------EXERCICIO DE LEITURA
//1.
    //a. undefined
    //b. null
    //c. 11
    //d. 3
    //e. 11 [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    //f. 9
//2.
    //SUBI NUM ÔNIBUS EM MIRROCOS, 27

/* 
//Indice: 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */


//----------------------------------------EXERCICIO DE ESCRITA
//1.
nome = prompt("Digite seu nome:")
email = prompt ("Digite o seu e-mail:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)
//2.
 let array = ["sushi","biscoito","hamburguer","pizza","batataFrita"]

console.log("a) ",array)
console.log (`Essas são as minhas comidas preferidas:
${array[0]}
${array[1]}
${array[2]}
${array[3]}
${array[4]}`)

let usuarioComidaFavorita=prompt("Qual sua comida favorita?")
array[1] = usuarioComidaFavorita
console.log(array)

//3
let listaDeTarefas = null
tarefa1 = prompt("Me fale a primeira tarefa que você precisa fazer:")
tarefa2 = prompt("Me fale a segunda tarefa que você precisa fazer:")
tarefa3 = prompt("Me fale a terceira tarefa que você precisa fazer:")

listaDeTarefas=[tarefa1,tarefa2,tarefa3]

console.log(listaDeTarefas)

tarefaRealizada = prompt(`Qual das três tarefas você já realizou:
0.${listaDeTarefas[0]}
1.${listaDeTarefas[1]}
2.${listaDeTarefas[2]}`)

listaDeTarefas.splice(tarefaRealizada,1)
console.log(`Falta as seguintes tarefas: ${listaDeTarefas}`) 
//----------------------------------------DESAFIOS
//1
fraseAleatoria = ("Oi José Tudo bem?")
corteFraseAleatoria = fraseAleatoria.split(" ", )
array = [corteFraseAleatoria]

console.log(array) 
//2
arrayFruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
tamanhoAbacaxi = arrayFruta[2].length

console.log("Indice",arrayFruta.indexOf("Abacaxi")," e o tamanho do Abacaxi:",tamanhoAbacaxi)






