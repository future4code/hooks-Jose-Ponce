// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    const arrayPares = array.filter((array =>{
        return array % 2 === 0
    }))
 return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let i
 let numParElevado = []
 
        for (i=0; array.length > i; i++){
            if(array[i] % 2 === 0){
               array[i] * 2
               numParElevado.push(array[i]**2)

            }
        }
        
    
 return numParElevado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  //MATH.MAX !!!
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numMaior
    let numMenor

    if (num1 > num2){
        numMaior = num1
        numMenor = num2
    }
    else{
        numMaior = num2
        numMenor = num1
    }
    const Divisivel = numMaior % numMenor === 0
    const Diferenca = numMaior - numMenor
    
    return{
    maiorNumero: numMaior,
    maiorDivisivelPorMenor: Divisivel,
    diferenca: Diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const pares = []
        for (let i = 0; pares.length < n; i+=2){
              pares.push(i)
          }
    return pares
    }
   // return pares

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA <(ladoB + ladoC) && ladoC < (ladoA + ladoB)){
    
        if (ladoA == ladoB && ladoB == ladoC){
            return `Equilátero`
        }
        else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
            return `Isósceles`
        }
        else{
            return `Escaleno`
        }
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let listaMaiorMenor = []
    const listaCresce = array.sort ((a,b) => {
        if (a > b){
            return 1}
        if (a < b){
            return -1}

        return 0
    })
    listaMaiorMenor.push(listaCresce[listaCresce.length -2])
    listaMaiorMenor.push(listaCresce[1])
    
    return listaMaiorMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
        return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

const pessoaAnonima = {...pessoa, nome:"ANÔNIMO"
}
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const alturaAut = 1.5 //Altura Autorizada
    const idadeMin = 14  //Idade Minima
    const idadeMax = 60 //Idade Maxima
    const pessoasAutorizadas = pessoas.filter((pessoas) => {
    return (pessoas.altura >= alturaAut && pessoas.idade > idadeMin && pessoas.idade <idadeMax)   
})
return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const alturaAut = 1.5 //Altura Autorizada
    const idadeMin = 14  //Idade Minima
    const idadeMax = 60 //Idade Maxima
    const pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
    return !(pessoas.altura >= alturaAut && pessoas.idade > idadeMin && pessoas.idade <idadeMax)   
})
return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
//Esse daqui vou precisar dar os parabéns ao Walmir, porque tinha empacado nessa
function retornaContasComSaldoAtualizado(contas) {
    let soma = 0 
    let saldoAtualizado = 0
    for (let i = 0; i < contas.length;i++){
        for (let somaCompra = 0; somaCompra < contas[i].compras.length; somaCompra++){
            soma += contas[i].compras[somaCompra]
            saldoAtualizado = contas[i].saldoTotal - soma
            contas[i].saldoTotal = saldoAtualizado
            soma=0
        }
        contas[i].compras =[]
    }
return contas

}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function comparar(a,b){
        if(a.nome < b.nome){
        return -1
        }
        if (a.nome > b.nome){
        return 1
        }
        return 0
    }
    return consultas.sort(comparar)

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}