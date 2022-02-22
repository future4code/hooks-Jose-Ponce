// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("altura"))
  const largura = Number(prompt("largura"))
  //return altura*largura
 return console.log(altura * largura)
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Ano atual"))
const anoNascimento = Number(prompt("Ano de Nascimento"))
return console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return (peso/(altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("nome")
const idade = Number(prompt("idade"))
const email = prompt("email")
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
//const corFavorita = Prompt("Fale suas três cores favoritas")
cor1=prompt("Fale Sua Cor:")
cor2=prompt("Fale Sua Cor:")
cor3=prompt("Fale Sua Cor:")
corFavorita=[cor1,cor2,cor3]
//return cor=[`cor1:${cor1},cor2:${cor2},cor3:${cor3}`]
return console.log(corFavorita)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

 return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return array[array.length -1]
//LENGHT
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //const arrayPrimeiro =  array[0]
  //const arrayUltima = array[array.length -1]

let um = array[0]
let ultimo = array[array.length -1]
//array.splice(0,1)     //tirar o primeiro
//array.pop(array)      //tirar o ultimo
array[0] = ultimo
array[array.length -1] = um
//const palacio = array

return array

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}