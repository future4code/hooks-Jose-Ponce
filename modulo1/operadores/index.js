/* Interpretação de código: 

1-  a. false
    b. false
    c. verdadeiro
    d. boolean

2- O colega não converteu o valor de string para número.

3-  let p1 = Number(primeiroNumero)
    let p2 = Number(segundoNumero)
    const soma = p1 + p2
*/
/* 
    Exercicio 1
suaIdade = prompt("Sua idade:")
amigoIdade = prompt ("Qual idade do seu amigo?")
nSuaIdade = Number(suaIdade)
nAmigoIdade = Number (amigoIdade)

validador = nSuaIdade > nAmigoIdade
conta = (nSuaIdade - nAmigoIdade)

console.log("Sua Idade é maior que a do seu amigo?",validador)

console.log("A diferença de idade de vocês é:",conta)
 */


/*     Exercicio 2
numeroPar = prompt("Escreva um número PAR:")

nPAR = Number(numeroPar)

restoDivisao = nPAR % 2

console.log("Aqui:",restoDivisao)

Números pares não vão ter resto, sempre zendo 0 e ímpares sim.
 */

//Exercicio 3
/* 
idadeAnos = prompt("Qual sua idade?")

nIdadeAnos = Number(idadeAnos)

idadeMes = (nIdadeAnos * 12)

idadeDias = (nIdadeAnos * 365)

idadeHoras = (24 * idadeDias)

console.log("Sua idade:",nIdadeAnos,".","Quantos MESES você viveu:",idadeMes,"quantos DIAS você viveu:",idadeDias,"Quantas HORAS você viveu:",idadeHoras)
 */

//Exercicio 4
/* 
const stN1 = prompt("Primeiro Número:")
const stN2 = prompt("Segundo número:")
const n1 = Number(stN1)
const n2 = Number(stN2)

let p1 = (n1>n2)
let p2 = (n1===n2)
let p3 = (n1%n2==0)
let p4 = (n2%n1==0)
console.log(n1,"<- n1 e n2 ->",n2)
console.log("O primeiro numero é maior que segundo?",p1)
console.log("O primeiro numero é igual ao segundo?",p2)
console.log("O primeiro numero é divisível pelo segundo?",p3)
console.log("O segundo numero é divisível pelo primeiro",p4)
 */

/* //Exercicio DESAFIO 1
let FF = 77
let KK = null
let Celsius = prompt("Digite a temperatura em Celsius")
CL=Number(Celsius)
//FuncaoKK(kelvin)ParaFF(Fahrenheit)
fnKKToFF = (FF - 32) * (5/9) + 273.15
//FuncaoCL(Celsius)ParaFF(Fahrenheit)
fnCLToFF = CL * (9/5) + 32
//FuncaoCL(Celsius)ParaKK(Kelvin)
fnCLtoKK = CL + 273,15
console.log ("A) ",fnKKToFF,"K")
console.log ("B) ", fnCLToFF,"ºF")
console.log ("C) ", fnCLToFF,"ºF e",fnKKToFF,"K") */

//Exercicio 2
/* let qwHora = 0.05
calcLight280 = (qwHora*280)
let Desc15 = calcLight280 * (15/100)
let vlDesc15 = calcLight280 - Desc15
console.log("1QW",qwHora)
console.log("Valor de 280QW:",calcLight280)
console.log("O desconto de 15% vai ser de:",vlDesc15)
 */

//Exercicio 3
//lb=Libra
/* let lb = 20
let kg = null
let oz = 10.5
let mi = 100
let ft = 50
let gal = 103.56
let stXic = prompt("Digite quantas Xicaras voce quer convertar para Litros:")
xic=Number(stXic)

let lbToKg = lb/2.2046         
let ozToKg = oz/35.274
let miToM = mi*1609
let ftToM = ft/3.281
let galToL = gal * 379
let xicToL = xic * 6

console.log("A) 20lb equivalem a",lbToKg,"kg")
console.log("B) 10.5oz equivalem a",ozToKg,"kg")
console.log("C) 100mi equivalem a",miToM,"m")
console.log("D) 50ft equivalem a",ftToM,"m")
console.log("E) 103.56gal equivalem a",galToL,"l")
console.log("F)",stXic,"xic equivalem a",xicToL,"l") */