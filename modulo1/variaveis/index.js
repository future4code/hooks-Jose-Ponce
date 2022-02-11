
/*

            Primeira Questão:
10
10 5

            Segunda Questão:
10 10 10

            Terceira Questão:
p (horasDia)
t (salarioDia)

*/
            //Escrita de código - 1

let nomeA
let idadeB

console.log(typeof nomeA,idadeB)

//D Foi impresso os tipos "undefined" porque eu não atribui nenhum valor às variáveis.

//G
let nome = prompt("Qual o seu nome?")
let idade = prompt ("Qual sua Idade?")
console.log("Seu Nome é:",nome, "Sua idade é:",idade)

            //Escrita de código - 2

const perg1 = prompt("Você tomou café hoje?")

const perg2 = prompt("Você almoçou hoje?")

const perg3 = prompt("Você jantou?")

console.log("Você tomou café hoje? -",perg1)
console.log("Você almoçou hoje? -", perg2)
console.log("Você jantou? -",perg3)



            //Escrita de código 3
let a = 10
let b = 25
let gaveta = 0

gaveta=b
b=a
a=gaveta

console.log("O novo valor de A é:",a,"e o novo valor de B:",b)

            //DESAFIO

let n1 = prompt("Digite o Primeiro Número:")
let n2 = prompt("Digite o Segundo Número:")
let n1n = Number(n1) //errei tanto aqui até entender que o Number precisava ser maiúsculo kk
let n2n = Number(n2)
n3=(n1n+n2n)
n4=(n1n*n2n)

console.log("O",n1,"SOMADO ao",n2,"resulta em:",n3)
console.log("O",n1,"MULTIPLICADO ao",n2,"resulta em:",n4)



