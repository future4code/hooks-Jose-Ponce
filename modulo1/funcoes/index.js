
//________________________________EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.    A) 10 50
//      B) nada.
//2.    A) essa função pega a frase que o usuário escreve e converte para caixa baixa, depois vefica se no texto tem a string "cenoura".
//      B) i - true / ii - true / iii - true

//________________________________EXERCICIOS DE ESCRITA DE CÓDIGO

//1.    A)
/* function primeiroExercicio(){

console.log('Eu sou José Guilherme, tenho 24 anos, moro em Rio de Janeiro e sou estudante e trabalhador.')
}
primeiroExercicio()
 */

//      B)
/* function unificacaoString(){
const nome = "José"
const idade = 24
const cidade = "Rio de Janeiro"
const profissao = "Suporte de Sistemas"

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
}
unificacaoString() */

//2.
    //a)
/*
function Soma(n1, n2) {
    return n1 + n2
}
const somando = Soma(4, 6)
console.log(somando) */
    //b)
/* function numeroMaior(n1,n2){
return n1 > n2
}
console.log(numeroMaior(4,2)) */
    //c)
/*     function parImpar(n1){
 return n1 % 2 == 0        

    }
console.log("True=PAR e False = Impar: ",parImpar(2)) */
    //d)
/* function Mensagem(){
const texto = ("Oi Galerinha")
textoTamanho = texto.length
console.log(texto.toUpperCase(),textoTamanho)

}
Mensagem() */

const n1 = Number(prompt("Digite um numero"))
const n2 = Number(prompt("Digite um numero"))

function Soma(n1, n2) {
    return n1 + n2
}
const somando = Soma(n1, n2)

function Diferenca(n1, n2) {
    return n1 - n2
}
const subtracao = Diferenca(n1,n2)


function Multiplicacao(n1, n2) {
    return n1 * n2
}
const vezes = Multiplicacao(n1,n2)

function Divisao(n1, n2) {
    return n1 / n2
}
const dividir = Divisao(n1,n2)

console.log(`Números inseridos: ${n1} e ${n2}
Soma: ${somando}
Diferença: ${subtracao}
Multiplicação: ${vezes}
Divisão: ${dividir}
`)

//Gostaria MUITO de poder realizar o DESAFIO, porém hoje tive um imprevisto, vou realizar outro dia!