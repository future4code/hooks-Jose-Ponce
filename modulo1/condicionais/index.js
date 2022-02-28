
//EXERCICIOS DE INTERPRETACAO DE CODIGO___________________________________________________

//1A
//      O codigo verifica se o numero (ja convertido) que o usuario colocou, é par (se o resto é 0)
//1B
//      Ele imprime apenas para numeros pares.
//1C
//      Ele imprime o else apenas para numeros impares.

//2A
//      O codigo serve para informar o valor da fruta que o usuario informar
//2B
//      "O Preço da fruta Maça é R$ 2.25"
//2C
//      "O Preço da fruta Pêra é R$ 5"

//3A    A primeira linha esta perguntando ao usuario um numero e convertendo a resposta de string para numero
//3B
//      "Esse número passou no teste" e não vai retornar nenhuma mensagem se for -10  
//3C
//      Haverá um erro informando que a variavel mensagem nao foi definida, porque ela esta declarada apenas no if (bloco) e não global.

//EXERCICIOS DE ESCRITA DE CODIGO_________________________________________________________
//1
/* 
const idadeUsuario = Number(prompt("Qual sua Idade?"))
if (idadeUsuario >= 18){
    console.log("Você pode dirigir")
}
    else {
    console.log("Você não pode dirigir.")
}
 */
//2
/* const turnoAluno = prompt(`Qual o seu turno?
M       (Matutino)
V       (Vespertino)
N       (Noturno)
`)

let mensagem
//turnoAluno=resposta.toUpperCase()

if (turnoAluno === "M"){
    console.log("Bom dia")
}

else if  (turnoAluno === "V"){
    console.log("Boa tarde")   
}

else if  (turnoAluno === "N")
    console.log("Boa Noite")   
 
else 
    console.log("Letra incorreta")
 */
//3

/* const resposta = prompt(`Qual o seu turno?
M       (Matutino)
V       (Vespertino)
N       (Noturno)
`)

let mensagem
turnoAluno=resposta.toUpperCase()
switch (turnoAluno){
    case "M":
    mensagem = ("Bom dia")
    break;
    
    case "V":
    mensagem = ("Boa tarde")
    break;

    case "N":
    mensagem = ("Boa noite")
    break;
}

console.log(mensagem) */

/* let preco = Number(prompt("Qual valor do filme?"))
let generoFilme = prompt("Qual o genero do filme:")

if (preco <= 15 && generoFilme==="fantasia"){
    console.log("Bom Filme!")
}
    else
        console.log("Escolha outro filme :(")
 */

