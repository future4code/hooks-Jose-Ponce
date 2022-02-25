//Exercicios de interpretacao de codigos    ---------------------------------------------
/* 
1)
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo"
horario: "14h"

2-A)
nome: "Juca"
idade: 3
raca: "SRD"

nome: "Juba"
idade: 3
raca: "SRD"

nome: "Jubo"
idade:3
raca: "SRD"

2-B)
A sintaxe Spread copia o objeto inteiro que esta sendo referenciada.

//3-A)
false
undefined
//3-B)
o "false" foi devido a propriedade backender ser declarada com FALSE
o undefined é porque não foi declarado nenhuma propriedade "ALTURA"
*/
//Exercicios de interpretacao de codigos    ---------------------------------------------


//1-A)
/* const humano = {
    nome: "Kayne West",
    apelidos: ["Ye","Yeezy","oBala"]
}

function apresentacao(humano){
    return console.log  (`Eu sou ${humano.nome}, mas pode me chamar de: ${humano.apelidos[0]}, ${humano.apelidos[1]} ou ${humano.apelidos[2]}`)
}
apresentacao(humano)
//1-B)
const humano2 = {
    ...humano,
    apelidos: ["CaineUeste","Antigo Caine","Deus"]
}

apresentacao(humano2) */

/* const pessoaUm = {
    nome:"Carlinhos Pereira",
    idade: 22,
    profissao:"Analista de Processos"
}


const pessoaDois = {
    nome:"Lindberg Silva",
    idade: 47,
    profissao: "Empresário"
}

function analiseArray(pessoa) {
return console.log(`${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissao}, ${pessoa.profissao.length}.`)

}
analiseArray(pessoaDois) */
//3)
/* let carrinho = []

frutaUm = {
    nome:"banana",
    disponibilidade: true
}
frutaDois = {
    nome:"Morango",
    disponibilidade: true
}
frutaTres = {
    nome:"Maçã",
    disponibilidade: true
}
function pegaEJoga(f1,f2,f3) {
carrinho.push(f1,f2,f3)
return console.log(carrinho)
}
pegaEJoga(frutaUm,frutaDois,frutaTres)
 */



/* 
DESAFIOS

function perguntarPessoa(){
    const Pessoinha = {
    nome: prompt("Nome:"),
    idade: Number(prompt("Idade:")),
    profissao: prompt("Profissão:")
    }
}


perguntarPessoa()

console.log(perguntarPessoa.Pessoinha)
console.log(perguntarPessoa.Pessoinha.typeof())
 */
